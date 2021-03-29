import {CommonRoutesConfig} from '../common/common.routes.config';
import MainMiddleware from './middleware/main.middleware';
import {Add} from './controllers/add';
import express from 'express';

export class MainRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MainRoutes');
    }

    configureRoutes() {

        this.app.post(`/add`, [
            MainMiddleware.validateAddRequest,
            function (req: express.Request, res: express.Response) {
                res.status(200).send({
                    error: false,
                    result: Add(req.body.num1, req.body.num2)
                });
            }
        ]);

        return this.app;
    }
}