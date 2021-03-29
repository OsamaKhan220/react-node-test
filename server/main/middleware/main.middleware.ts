import express from 'express';

class MainMiddleware {

    validateAddRequest = async(req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (
            req.body.num1 && 
            req.body.num2 && 
            // typeof req.body.num1 === "number" &&
            // typeof req.body.num2 === "number"
        ) {
            next();
        } else {
            res.status(400).send({error: `Invalid Params`});
        }
    }
}

export default new MainMiddleware();