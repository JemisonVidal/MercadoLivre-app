import mercadoLivre from 'mercadolibre';
require('dotenv').config();

class MercadoLivre {
  token: string;
  mercadoLivreObj: mercadoLivre.meli;

  constructor(token: string) {
    this.token = token;
    this.mercadoLivreObj = new mercadoLivre.meli(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      token
    );
  }

  private async geti(url: string, params?: string) {
    return await this.mercadoLivreObj.get(url, params);
  }

  private async post(url: string, body: any, params?: string) {
    return await this.mercadoLivreObj.post(url, body, params);
  }
}

export default new MercadoLivre(this.token).mercadoLivreObj;
