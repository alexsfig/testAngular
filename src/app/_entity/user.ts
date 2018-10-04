export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
    public accessToken: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.accessToken = accessToken;
   }

}
