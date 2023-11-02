import { environment } from '@env/environment';

export class Users {
  constructor(
    public id: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public phone: string,
    public status: string,
    public date_of_birth: string,
    public date: string
  ) {}

  static adapt(item: any): Users {
    return item.rows.map((item: any) => {
      return new Users(
        item.id,
        item.first_name,
        item.last_name,
        item.email,
        item.phone,
        item.status,
        item.date_of_birth,
        item.date
      );
    });
  }
}
