import express, { Request, Response} from "express"; // importar express Request e Response
import mustache from "mustache-express"; //importa Template Engins Mustache 
import path from "path"; // para indicar diretório absoluto
import varMainRoutes from "./routes/index"; //importa o arquivo de paths para a variavel varMainRoutes

const server = express(); //salva express em constante server para ser usado

server.set("view engine", "mustache"); // seta view com mustache
server.set("views", path.join(__dirname, "views")); //indica pasta que estarão os arquivos HTML
server.engine("mustache", mustache()); // definir engine como mustache e rodar função

server.use(express.static( path.join(__dirname, "../public")));  // determina diretorio absoluto >> __dirmane insica ditetório atual >> ../ indica diretório pai >> pulic indica diretório public

server.use("/", varMainRoutes); //usa a variavel varMainRoutes no caminho / (arquivo de path)



server.use((req: Request, res: Response)=>{  //Cria retorno quando o path não é encontrado
    res.status(404).send("Pagina não encontrada");
});

server.listen(80); //insica porta que o servidor ira rodar

