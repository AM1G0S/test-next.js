import { ProfileSchema, Profile } from "@/entities/profile/model/types";
import axios from "axios";

const mockedProfile: Profile = {
  id: "mock-id",
  username: "Ваня Петькин",
  city: "Краснодар",
  gamesCount: 15,
  rumersCount: 350,
  joinedAt: "2024-06-20T12:00:00Z",
  avatar: null,
  description: "Я профессиональный скуф, обожаю сидеть дома...",
  telegram: "@ribakit3",
  tags: ["tag1", "tag2"]
};

export const getProfile = async (): Promise<Profile> => {
  try {
    const res = await axios.get("https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591");
    const raw = res.data.data;
    return ProfileSchema.parse({
      id: raw.id,
      username: raw.name,
      city: raw.city?.name ?? null,
      gamesCount: raw.calling_limit ?? 0,
      rumersCount: raw.going_limit ?? 0,
      joinedAt: raw.created_at,
      avatar: raw.avatar_url,
      description: raw.about,
      telegram: raw.telegram,
      tags: []
    });
  } catch (e) {
    console.warn("⚠️ API не работает, используем моки");
    return mockedProfile;
  }
};
