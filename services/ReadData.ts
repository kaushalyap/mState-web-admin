import {
  query,
  where,
  getDocs,
  doc,
  collectionGroup,
  getDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { History } from "../models/History";
import { User } from "../models/User";
import { historyConverter, userConverter } from "./Converters";

export async function readHistories() {
  const q = query(
    collectionGroup(db, "History"),
    where("score", ">=", 10)
  ).withConverter(historyConverter);
  const querySnapshot = await getDocs(q);
  const histories = Array<History>();
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      const history: History = doc.data();
      history.uid = doc.ref.parent.parent!.id;
      histories.push(history);
    } else console.log("No documents!");
  });
  return filterLastMonthHistories(histories);
}

async function filterLastMonthHistories(histories: Array<History>) {
  const date = new Date();
  const month = date.getMonth();
  date.setMonth(date.getMonth() - 1);
  if (date.getMonth() == month) {
    date.setDate(0);
    date.setHours(0, 0, 0, 0);
  }
  const monthOldTimestamp: number = (date.valueOf() / 1000) | 0;

  const recentHistories = Array<History>();

  histories.forEach((history) => {
    if (history.timestamp.seconds >= monthOldTimestamp) {
      recentHistories.push(history);
    }
  });

  const groupedHistories = groupByUid(recentHistories, "uid");
  const uIds = Object.keys(groupedHistories);

  const sortedRecentHistories = sortByTimestampLimit(groupedHistories);

  const users: Array<User | undefined> = await Promise.all(
    uIds.map(function (uid) {
      return readUser(uid);
    })
  );

  sortedRecentHistories.forEach(function (histories) {
    histories.forEach(function (history) {
      users.forEach(function (user) {
        if (user != undefined) {
          history.settings = user.settings;
        }
      });
    });
  });

  const filteredHistories = filterSettingsOff(sortedRecentHistories);
  return filteredHistories;
}

function groupByUid(histories: Array<History>, key: string) {
  return histories.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function sortByTimestampLimit(arr: Object) {
  const sortedRecentHistories: Array<Array<History>> = [];
  Object.keys(arr).forEach(function (key) {
    sortedRecentHistories.push(
      arr[key]
        .sort((first: History, second: History) =>
          first.timestamp > second.timestamp ? -1 : 1
        )
        .slice(0, 3)
    );
  });
  return sortedRecentHistories;
}

function filterSettingsOff(histories: Array<Array<History>>) {
  return histories.filter(function (item) {
    return !item[0].settings.smsOn || !item[0].settings.callOn;
  });
}

export async function readUser(docId: string) {
  const docRef = doc(db, "Users", docId).withConverter(userConverter);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let user = docSnap.data();
    return user;
  } else console.log("No such document");
}
