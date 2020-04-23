import { Router } from 'express';
import UserController from './app/controllers/userController';
import ProdutoController from './app/controllers/produtoController';

class Routers {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post('/user', UserController.auth);

    this.router.get('/produto', ProdutoController.show);
    this.router.post('/produto', ProdutoController.create);
  }
}

export default new Routers().router;
