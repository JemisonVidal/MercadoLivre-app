import { Request, Response } from 'express';
require('dotenv').config();

class UserController {
  SYS_PWD: string;

  constructor() {
    this.SYS_PWD = String(process.env);
  }

  public auth(req: Request, res: Response) {
    if (req.body.password === this.SYS_PWD) {
      req.session.user = true;
      res.status(200).json({ user: 'OK' });
    } else {
      res.status(400).json({ user: 'invalid' });
    }
  }
}

export default new UserController();
