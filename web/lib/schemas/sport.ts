import { z } from "zod";

export const sportSchema = z.object({
    key: z.string(),
    group: z.string(),
    title: z.string(),
    description: z.string(),
    active: z.boolean(),
    has_outrights: z.boolean(),
})

export type Sport = z.TypeOf<typeof sportSchema>

export const groupSchema = z.object({
    group: z.string(),
    sports: z.array(sportSchema),
})

export type Group = z.TypeOf<typeof groupSchema>

export const scoreSchema = z.object({
    name: z.string(),
    score: z.string(),
})

export type Score = z.TypeOf<typeof scoreSchema>

export const listScoreSchema = z.object({
    id: z.string(),
    sport_key: z.string(),
    sport_title: z.string(),
    commence_time: z.string(),
    completed: z.boolean(),
    home_team: z.string().optional(),
    away_team: z.string().optional(),
    scores: z.array(scoreSchema),
    last_update: z.string(),
})

export type ListScores = z.TypeOf<typeof listScoreSchema>

export const outComeSchema = z.object({
    name: z.string(),
    price: z.number(),
    point: z.number().optional(),
})

export type OutCome = z.TypeOf<typeof outComeSchema>

export const marketSchema = z.object({
    key: z.string(),
    last_update: z.string(),
    outcomes: z.array(outComeSchema),
    link: z.string(),
    sid: z.string(),
})

export type Market = z.TypeOf<typeof marketSchema>

export const bookMakerSchema = z.object({
    key: z.string(),
    title: z.string(),
    markets: z.array(marketSchema),
    link: z.string(),
    sid: z.string(),
})

export type BookMaker = z.TypeOf<typeof bookMakerSchema>

export const oddsSchema = z.object({
    id: z.string(),
    sport_key: z.string(),
    sport_title: z.string(),
    commence_time: z.string(),
    home_team: z.string(),
    away_team: z.string(),
    bookmakers: z.array(bookMakerSchema),
})

export type Odds = z.TypeOf<typeof oddsSchema>