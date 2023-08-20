import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response)=>{ 
    let user = {
        name: "Laerte",
        age: "19 anos"
    };

    res.render("home", { //renderiza a pasta Home (com os arquivos mustache/html)
      user  //renderiza objeto user para que possa ser usada no arquivo mustache (user.name)
    })
});

router.get("/contato", (req: Request, res: Response)=>{ // exibe na tela Formulario de contato
    res.send("Formulario de contato")
});

router.get("/sobre", (req: Request, res: Response)=>{
    res.send("Pagina institucional sobre a empresa")
});

export default router;
