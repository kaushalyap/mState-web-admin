import { DocumentData } from "firebase/firestore";
import { Guardian } from "../models/Guardian";
import { History } from "../models/History";
import { Settings } from "../models/Settings";
import { User } from "../models/User";

const historyConverter = {
  toFirestore: (history: History) => {
    return {
      timestamp: history.timestamp,
      questionnaireType: history.questionnaireType,
      score: history.score,
    };
  },
  fromFirestore: (snapshot: DocumentData) => {
    const data = snapshot.data();
    return new History(
      "",
      data.timestamp,
      data.questionnaireType,
      data.score,
      null
    );
  },
};

const userConverter = {
  toFirestore: (user: User) => {
    return {
      uid: user.uid,
      name: user.name,
      address: user.address,
      mobileNo: user.mobileNo,
      guardian: user.guardian,
      settings: user.settings,
    };
  },
  fromFirestore: (snapshot: DocumentData) => {
    const data = snapshot.data();
    return new User(
      data.uid,
      data.name,
      data.address,
      data.mobileNo,
      data.settings,
      data.guardian
    );
  },
};

const guardianConverter = {
  tofFirestore: (guardian: Guardian) => {
    return {
      name: guardian.name,
      mobileNo: guardian.mobileNo,
    };
  },
  fromFirestore: (snapshot: DocumentData) => {
    const data = snapshot.data();
    return new Guardian(data.name, data.mobileNo);
  },
};

const settingsConverter = {
  tofFirestore: (settings: Settings) => {
    return {
      smsOn: settings.smsOn,
      callOn: settings.callOn,
    };
  },
  fromFirestore: (snapshot: DocumentData) => {
    const data = snapshot.data();
    return new Settings(data.smsOn, data.callOn);
  },
};

export {
  historyConverter,
  userConverter,
  guardianConverter,
  settingsConverter,
};
