import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/test", (c) => {
  return c.json({ hello: "world" });
});

app.get("/user/:userId", (c) => {
  const { userId } = c.req.param();
  return c.json({ user: userId });
});

export const GET = handle(app);
