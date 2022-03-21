import React from "react";
import Link from "next/link";
import { History } from "../models/History";

export default function DataRow({ data }: { data: Array<History> }) {
  return (
    <Link href={`profile/${data[0].uid}`} passHref>
      <tr className="bg-pink-200 cursor-pointer">
        <td className="md:text-lg lg:pl-6">{trimUid(data[0].uid)}</td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{data[0].score} </span>
            <span className="text-gray-600 text-sm">
              {data[0].questionnaireType}
            </span>
          </div>
          <div className="text-xs md:text-base text-gray-600 tracking-wider">
            {convertTimestampToDate(data[0].timestamp.seconds)}
          </div>
        </td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{data[1].score}</span>
            <span className="text-gray-600 text-sm">
              &nbsp;
              {data[1].questionnaireType}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {convertTimestampToDate(data[1].timestamp.seconds)}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="lg:text-xl">{data[2].score}</span>
            <span className="text-gray-600 text-sm">
              &nbsp;
              {data[2].questionnaireType}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {convertTimestampToDate(data[2].timestamp.seconds)}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Sms:
            </span>
            <span>&nbsp;{displaySettings(data[0].settings, "sms")}</span>
          </div>
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Call:
            </span>
            <span>&nbsp;{displaySettings(data[0].settings, "call")}</span>
          </div>
        </td>
      </tr>
    </Link>
  );
}

function convertTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear().toString().substring(2, 4);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}/${year}`;
}

function trimUid(uid: string) {
  return uid.toString().substring(0, 10);
}

function displaySettings(settings: any, key: string) {
  if (settings != null && key == "sms") {
    let onOff = settings.smsOn ? "On" : "Off";
    return onOff;
  }

  if (settings != null && key == "call") {
    let onOff = settings.callOn ? "On" : "Off";
    return onOff;
  }
}
