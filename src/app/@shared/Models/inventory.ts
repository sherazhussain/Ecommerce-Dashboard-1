import { environment } from '@env/environment';

export class Inventory {
  constructor(
    public id: string,
    public product_name: string,
    public description: string,
    public status: string,
    public product_image: string,
    public date: string
  ) {}

  static adapt(item: any): Inventory {
    return item.rows.map((item: any) => {
      return new Inventory(item.id, item.product_name, item.description, item.status, item.product_image, item.date);
    });
  }
}
