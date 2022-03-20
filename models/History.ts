import { Timestamp } from "firebase/firestore";
import { QuestionnaireType } from "./QuestionnaireType";
import { Settings } from "./Settings";

export class History {
  uid: string;
  timestamp: Timestamp;
  questionnaireType: QuestionnaireType;
  score: number;
  settings: Settings;

  constructor(
    uid: string,
    timestamp: Timestamp,
    questionnaireType: QuestionnaireType,
    score: number,
    settings: Settings
  ) {
    this.uid = uid;
    this.timestamp = timestamp;
    this.questionnaireType = questionnaireType;
    this.score = score;
    this.settings = settings;
  }
}
