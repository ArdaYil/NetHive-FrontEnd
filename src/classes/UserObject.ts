import { User } from "../httpServices/UserService";

class UserObject {
  public name: string;
  public surname: string;
  public email: string;
  public gender: string;
  public role: string;
  public birthdate: Date;
  public _id: string;

  constructor(user: User) {
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.gender = user.gender;
    this.role = user.role;
    this.birthdate = user.birthdate;
    this._id = user._id;
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}

export default UserObject;
