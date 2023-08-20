import express, { Request, Response } from "express";

const server = express();

server.get("/voo/:origem-:destino", (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Search Journet for ${origem.toUpperCase()} to ${destino.toUpperCase()}`);
});

server.listen(80);

