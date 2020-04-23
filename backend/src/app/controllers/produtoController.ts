import { Request, Response } from 'express';
require('dotenv').config();

class produtoController {
  SYS_PWD: string;

  constructor() {
    this.SYS_PWD = process.env.SYS_PWD;
  }

  public show(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).send(`error:${error}`);
    }
  }

  public create(req: Request, res: Response) {}
}

export default new produtoController();
