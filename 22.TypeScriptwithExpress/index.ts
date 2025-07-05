import express, { Request, Response } from "express"; 

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello :) TypeScript⭐ with ExpressJs🔗</h1>");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
