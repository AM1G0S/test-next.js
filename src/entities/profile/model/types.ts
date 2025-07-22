import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.string(),
  username: z.string(),
  city: z.string().nullable(),
  gamesCount: z.number(),
  rumersCount: z.number(),
  joinedAt: z.string(),
  avatar: z.string().nullable(),
  description: z.string().nullable(),
  telegram: z.string().nullable(),
  tags: z.array(z.string()).optional()
});

export type Profile = z.infer<typeof ProfileSchema>;