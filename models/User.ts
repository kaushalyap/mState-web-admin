import { Guardian } from "./Guardian";
import { Settings } from "./Settings";

export class User {
  uid: string;
  name: string;
  address: string;
  mobileNo: string;
  settings: Settings;
  guardian: Guardian;

  constructor(
    uid: string,
    name: string,
    address: string,
    mobileNo: string,
    settings: Settings,
    guardian: Guardian
  ) {
    this.uid = uid;
    this.name = name;
    this.address = address;
    this.mobileNo = mobileNo;
    this.settings = settings;
    this.guardian = guardian;
  }
}
