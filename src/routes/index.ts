import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response)=>{ //renderiza a pasta Home (com os arquivos mustache/html)
    res.render("home")
});

router.get("/contato", (req: Request, res: Response)=>{ // exibe na tela Formulario de contato
    res.send("Formulario de contato")
});

router.get("/sobre", (req: Request, res: Response)=>{
    res.send("Pagina institucional sobre a empresa")
});

export default router;
