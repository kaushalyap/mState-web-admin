import { Timestamp } from "firebase/firestore";
import { QuestionnaireType } from "./QuestionnaireType";
import { Settings } from "./Settings";

type Nullable<T> = T | null;

export class History {
  uid: string;
  timestamp: Timestamp;
  questionnaireType: QuestionnaireType;
  score: number;
  settings: Nullable<Settings>;

  constructor(
    uid: string,
    timestamp: Timestamp,
    questionnaireType: QuestionnaireType,
    score: number,
    settings: Nullable<Settings>
  ) {
    this.uid = uid;
    this.timestamp = timestamp;
    this.questionnaireType = questionnaireType;
    this.score = score;
    this.settings = settings;
  }
}
