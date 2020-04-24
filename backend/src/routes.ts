import { Router } from 'express';
import validateToken from './middlewares/token';
import UserController from './app/controllers/userController';
import ProdutoController from './app/controllers/produtoController';

class Routers {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post('/user', validateToken, UserController.auth);

    this.router.get('/produto', validateToken, ProdutoController.show);
    this.router.post('/produto', validateToken, ProdutoController.create);
  }
}

export default new Routers().router;
