export class MXPUser {
  isLoggedIn: boolean = false;
  uid: number = 0;
  username: string = "";

  constructor(loggedIn: boolean, un: string, id: number) {
    this.isLoggedIn = loggedIn;
    this.uid = id;
    this.username = un;
  }
}
