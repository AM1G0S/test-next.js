import { rest } from "msw";

export const handlers = [
  rest.get("https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "5e800be0...",
        username: "Ваня Петькин",
        city: "Краснодар",
        gamesCount: 15,
        rumersCount: 350,
        joinedAt: "2024-06-20T12:00:00Z",
        avatar: null,
        description: "Я профессиональный скуф, обожаю сидеть дома...",
        telegram: "@ribakit3"
      })
    );
  })
];