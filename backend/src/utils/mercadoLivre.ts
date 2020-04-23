import meli from 'mercadolibre';
require('dotenv').config();

class MercadoLivre {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
  constructor() {
    this.CLIENT_ID = process.env.CLIENT_ID;
    this.CLIENT_SECRET = process.env.CLIENT_SECRET;
  }
}

export default new MercadoLivre();
