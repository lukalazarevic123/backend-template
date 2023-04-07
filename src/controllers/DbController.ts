import { Router, Request, Response } from "express";
import { AppRoute } from "../router/app-route";
import cors from "cors";

export class DbController implements AppRoute {
  public route: string = "/db";
  router: Router = Router();

  constructor() {
    this.router.use(cors({ origin: "*" }));
    
    //endpoint
    this.router.get('/check', cors(), (request, response) => {
        this.checkEndpoint(request, response);
    });
  }

  public async checkEndpoint(req: Request, res: Response) {
    res.status(200).json({msg: "Check"});

    return;
  }
}
