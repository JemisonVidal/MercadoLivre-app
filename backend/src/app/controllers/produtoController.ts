import { Request, Response } from 'express';
import mercadoLivre from '../../utils/mercadoLivre';
require('dotenv').config();

class produtoController {
  SYS_PWD: string;

  constructor() {
    this.SYS_PWD = process.env.SYS_PWD;
  }

  public async show(req: Request, res: Response) {
    try {
      const mercadoLivreObj = new mercadoLivre(res.locals.token);
      const user = await mercadoLivreObj.get('/users/me');
      const categories = await mercadoLivreObj.get(
        `/sites/${user.site_id}/categories`
      );
      const currencies = await mercadoLivreObj.get('/currencies');
      const listing_types = await mercadoLivreObj.get(
        `/sites/${user.site_id}/listing_types`
      );

      res.status(200).json({ user, categories, currencies, listing_types });
    } catch (error) {
      res.status(500).send(`error:${error}`);
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const mercadoLivreObj = new mercadoLivre(res.locals.token);
      const user = await mercadoLivreObj.get('/users/me');
      const predict = await mercadoLivreObj.get(
        `/sites/${
          user.site_id
        }/category_predictor/predict?title=${encodeURIComponent(
          req.body.title
        )}`
      );
      await mercadoLivreObj.post('/items', {
        title: req.body.title,
        category_id: predict.id,
        price: req.body.price,
        currency_id: req.body.currency,
        available_quantity: req.body.quantity,
        buying_mode: 'buy_it_now',
        listing_type_id: req.body.listing_type,
        condition: req.body.condition,
        description: req.body.description,
        tags: ['immediate_payment'],
        pictures: [
          {
            source: `${req.protocol}://${req.get('host')}/pictures/${
              req.body.file.filename
            }`,
          },
        ],
      });
      res.status(200).json({ message: 'item created' });
    } catch (error) {
      res.status(500).send(`error:${error}`);
    }
  }
}

export default new produtoController();
