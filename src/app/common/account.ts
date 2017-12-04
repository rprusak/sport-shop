export class Account {
  username: string;
  name: string;
  surname: string;
  email: string;
  city: string;
  address: string;
  password: string;
  admin: boolean;

  constructor(username: string, name: string, surname: string, email: string, password: string, city: string,
              address: string) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.city = city;
    this.address = address;
    this.admin = false;
  }


}
