import { environment } from '@env/environment';

export class Revenue {
  constructor(
    public id: string,
    public category: string,
    public quartly_1: string,
    public quartly_2: string,
    public quartly_3: string,
    public quartly_4: string
  ) {}

  static adapt(item: any): Revenue {
    return item.rows.map((item: any) => {
      return new Revenue(item.id, item.category, item.quartly_1, item.quartly_2, item.quartly_3, item.quartly_4);
    });
  }
}
