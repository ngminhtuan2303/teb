from pydantic import BaseModel, Field
from fastapi import Query
from typing import Literal, Optional, List


class SportRequest(BaseModel):
    all: Optional[Literal["true", "false"]] = Field(Query(default="false", description="Fetch all sports or only active ones."))
    
class SportResponse(BaseModel):
    key: str = Field(..., description="Unique identifier for the sport.")
    group: str = Field(..., description="Group to which the sport belongs.")
    title: str = Field(..., description="Title of the sport.")
    description: str = Field(..., description="Description of the sport.")
    active: bool = Field(..., description="Indicates if the sport is currently active.")
    has_outrights: bool = Field(..., description="Indicates if the sport has outright betting options.")

class GroupResponse(BaseModel):
    group: str = Field(..., description="The group of the sport.")
    sports: List[SportResponse] = Field(..., description="List of sports in the group.")


class Score(BaseModel):
    name: str = Field(..., description="Name of the team.")
    score: str = Field(..., description="Score of the team.")
    
class ScoresResponse(BaseModel):
    id: str = Field(..., description="Unique identifier for the odds entry.")
    sport_key: str = Field(..., description="Key of the sport for which odds are provided.")
    sport_title: str = Field(..., description="Title of the sport.")
    commence_time: str = Field(..., description="Start time of the event in ISO 8601 format.")
    completed: bool = Field(..., description="Indicates if the event has completed.")
    home_team: Optional[str] = Field(None, description="Name of the home team.")
    away_team: Optional[str] = Field(None, description="Name of the away team.")
    scores: List[Score] = Field(..., description="List of scores for the teams.")
    last_update: str = Field(..., description="Last update time of the odds in ISO 8601 format.")

class Outcome(BaseModel):
    name: str = Field(..., description="Name of the outcome.")
    price: float = Field(..., description="Price of the outcome.")
    point: Optional[float] = Field(None, description="Point spread for the outcome, if applicable.")

class Market(BaseModel):
    key: str = Field(..., description="Unique identifier for the market.")
    last_update: str = Field(..., description="Last update time of the market in ISO 8601 format.")
    outcomes: List[Outcome] = Field(..., description="List of outcomes for the market.")
    link: str = Field(..., description="Link to the market's odds page.")
    sid: str = Field(..., description="Unique identifier for the market's event.")

class Bookmaker(BaseModel):
    key: str = Field(..., description="Unique identifier for the bookmaker.")
    title: str = Field(..., description="Title of the bookmaker.")
    markets: List[Market] = Field(..., description="List of markets offered by the bookmaker.")
    link: str = Field(..., description="Link to the bookmaker's odds page.")
    sid: str = Field(..., description="Unique identifier for the bookmaker's event.")

class OddsResponse(BaseModel):
    id: str = Field(..., description="Unique identifier for the odds entry.")
    sport_key: str = Field(..., description="Key of the sport for which odds are provided.")
    sport_title: str = Field(..., description="Title of the sport.")
    commence_time: str = Field(..., description="Start time of the event in ISO 8601 format.")
    home_team: str = Field(..., description="Name of the home team.")
    away_team: str = Field(..., description="Name of the away team.")
    bookmakers: List[Bookmaker] = Field(..., description="List of bookmakers providing odds.")
