from typing import Optional, Literal, List
from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
import requests
from src.model import ScoresResponse, SportResponse, GroupResponse, Score, OddsResponse, Market, Bookmaker, Outcome

API_KEY = "e7e76d5037335e915c4976b4e22a0e00"
BASE_URL = "https://api.the-odds-api.com"

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/sports", response_model=list[GroupResponse])
async def get_sports(
    all: Optional[Literal["true", "false"]] = "false",
) -> list[SportResponse]:
    url = f"{BASE_URL}/v4/sports"
    params = {
        "apiKey": API_KEY,
        "all": all,
    }
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        res = response.json()
    else:
        raise Exception(f"Error fetching data: {response.status_code} - {response.text}")
    
    data: dict[str, GroupResponse] = {}
    for item in res:
        group = item.get("group")
        if group not in data:
            data[group] = GroupResponse(group=group, sports=[])
        data[group].sports.append(
            SportResponse(
                key=item["key"],
                group=item["group"],
                title=item["title"],
                description=item.get("description", ""),
                active=item["active"],
                has_outrights=item.get("has_outrights", False)
            )
        )
    return data.values()

@app.get("/sports/{sport_key}", response_model=List[ScoresResponse])
async def get_sport(sport_key: str, region: Optional[str]="us") -> SportResponse:
    url = f"{BASE_URL}/v4/sports/{sport_key}/odds"
    params = {
        "apiKey": API_KEY,
        "regions": region,
    }
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        res = response.json()
    else:
        raise HTTPException(500, f"Error fetching data: {response.status_code} - {response.text}")
    if not res:
        raise HTTPException(404, detail="Sport not found or no odds available.")
    return [ScoresResponse(
        id=item["id"],
        sport_key=item["sport_key"],
        sport_title=item["sport_title"],
        commence_time=item["commence_time"],
        completed=item["completed"],
        home_team=item["home_team"],
        away_team=item["away_team"],
        scores=[Score(name=score["name"], score=score["score"]) for score in item["scores"]],
        last_update=item["last_update"]
    ) for item in res]

@app.get("/sports/{sport_key}/events/{event_id}/odds", response_model=List[OddsResponse])
async def get_odds(sport_key: str, event_id: str, region: Optional[str]="us") -> List[OddsResponse]:
    url = f"{BASE_URL}/v4/sports/{sport_key}/events/{event_id}odds"
    params = {
        "apiKey": API_KEY,
        "regions": region,
    }
    response = requests.get(url, params=params)
    if response.status_code == 200:
        res = response.json()
    else:
        raise HTTPException(500, f"Error fetching data: {response.status_code} - {response.text}")
    if not res:
        raise HTTPException(404, detail="Odds not found for the specified event.")
    return [OddsResponse(
        id=item["id"],
        sport_key=item["sport_key"],
        sport_title=item["sport_title"],
        commence_time=item["commence_time"],
        home_team=item["home_team"],
        away_team=item["away_team"],
        bookmakers=[Bookmaker(
            key=bookmaker["key"],
            title=bookmaker["title"],
            markets=[Market(
                key=market["key"],
                last_update=market["last_update"],
                outcomes= [Outcome(
                    name=outcome["name"],
                    price=outcome["price"],
                    point=outcome.get("point"),
                    h2h=outcome.get("h2h")
                ) for outcome in market["outcomes"]],
                link=market["link"],
                sid=market["sid"]
            ) for market in bookmaker["markets"]],
            link=bookmaker["link"],
            sid=bookmaker["sid"]
        ) for bookmaker in item["bookmakers"]]
    ) for item in res]
