export class Settings {
  smsOn: boolean;
  callOn: boolean;

  constructor(smsOn: boolean, callOn: boolean) {
    this.smsOn = smsOn;
    this.callOn = callOn;
  }
}
