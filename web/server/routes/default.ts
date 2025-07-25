import { ky } from "@/protocol";
import { authedProcedure, publicProcedure, router } from "../trpc";
import { Group, ListScores, Odds } from "@/lib/schemas/sport";
import { z } from "zod";

const list_score_input = z.object({
    sport_key: z.string()
})

const get_odds_input = z.object({
    sport_key: z.string(),
    event_key: z.string(),
})

export const defaultRouter = router({
    list_sport: authedProcedure.query(() => ky.get<Group[]>("/sports")),
    list_score: authedProcedure.input(list_score_input).query(async ({input}) => {
        const {sport_key} = input
        const res = await ky.get<ListScores[]>(`/sports/${sport_key}`)
        return res
    }),
    get_odds: authedProcedure.input(get_odds_input).query(async ({input}) => {
        const {sport_key, event_key} = input
        const res = await ky.get<Odds>(`/sports/${sport_key}/events/${event_key}/odds`)
        return res
    }),
})