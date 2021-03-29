import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors'
import {CommonRoutesConfig} from './common/common.routes.config';
import {MainRoutes} from './main/main.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];

app.use(bodyparser.json());
app.use(cors());

routes.push(new MainRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
});