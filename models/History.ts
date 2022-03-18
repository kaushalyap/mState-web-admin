import { User } from "./User";

export class History {
  uid: string;
  timestamp: number;
  questionnaireType: QuestionnaireType;
  score: number;
  user?: User;

  constructor(
    uid: string,
    timestamp: number,
    questionnaireType: QuestionnaireType,
    score: number,
    user: User
  ) {
    this.uid = uid;
    this.timestamp = timestamp;
    this.questionnaireType = questionnaireType;
    this.score = score;
    this.user = user;
  }
}

enum QuestionnaireType {
  PHQ9 = "PHQ9",
  EPDS = "EPDS",
}
