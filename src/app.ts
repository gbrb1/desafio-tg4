import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";
import { router } from "./routes";

//Cria a aplicação
export const app = express();

//Libera o acesso aos serviços
app.use(cors());
//Permite receber e enviar JSON
app.use(bodyParser.json());
//Configura os logs
app.use(logger("dev"));
//Configuração de rotas
app.use(router);
