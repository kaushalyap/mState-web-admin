import React from "react";
import { Table } from "@mantine/core";
import DataRow from "./DataRow";
import { useEffect, useState } from "react";
import { readHistories } from "../services/ReadData";
import Link from "next/link";
import { User } from "../models/User";

export default function DataTable() {
  const [histories, setHistories] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    readHistories().then((item) => {
      if (item) {
        console.clear();
        console.log(item);
        setHistories(item);
        setLoading(false);
      } else console.log("");
    });
  }, [setHistories, setLoading]);

  return (
    <Table striped highlightOnHover verticalSpacing="md">
      <thead className="bg-yellow-300">
        <tr>
          <th className="md:text-lg lg:text-xl lg:pl-6 tracking-wider rounded-tl-xl">
            UID
          </th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 1</th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 2</th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 3</th>
          <th className="md:text-lg lg:text-xl tracking-wider rounded-tr-xl">
            Settings
          </th>
        </tr>
      </thead>
      <tbody>
        {histories != null
          ? histories.map((item: any, index: number) => {
              return (
                <Link key={index} href={`profile/${item[0].uid}`} passHref>
                  <tr className="bg-pink-200 cursor-pointer">
                    <td className="md:text-lg lg:pl-6">
                      {trimUid(item[0].uid)}
                    </td>
                    <td className="md:text-lg">
                      <div>
                        <span className="lg:text-xl">{item[0].score} </span>
                        <span className="text-gray-600 text-sm">
                          {item[0].questionnaireType}
                        </span>
                      </div>
                      <div className="text-xs md:text-base text-gray-600 tracking-wider">
                        {convertTimestampToDate(item[0].timestamp.seconds)}
                      </div>
                    </td>
                    <td className="md:text-lg">
                      <div>
                        <span className="lg:text-xl">{item[1].score}</span>
                        <span className="text-gray-600 text-sm">
                          &nbsp;
                          {item[1].questionnaireType}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-600 tracking-wider">
                        {convertTimestampToDate(item[1].timestamp.seconds)}
                      </div>
                    </td>
                    <td className="md:text-lg tracking-wide">
                      <div>
                        <span className="lg:text-xl">{item[2].score}</span>
                        <span className="text-gray-600 text-sm">
                          &nbsp;
                          {item[2].questionnaireType}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-600 tracking-wider">
                        {convertTimestampToDate(item[2].timestamp.seconds)}
                      </div>
                    </td>
                    <td className="md:text-lg tracking-wide">
                      <div>
                        <span className="text-gray-600 text-sm md:text-base lg:text-lg">
                          Sms:
                        </span>
                        {displaySettings(item[0].user, "sms")}
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm md:text-base lg:text-lg">
                          Call:
                        </span>
                        {displaySettings(item[0].user, "call")}
                      </div>
                    </td>
                  </tr>
                </Link>
              );
            })
          : ""}
      </tbody>
    </Table>
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

function displaySettings(user: any, setting: string): string {
  let onOff = "";
  if (user == null) {
    console.log("User is Null");
  } else onOff = user["settings"]["smsOn"] ? "On" : "Off";
  /* if (user == null) {
    return;
  } else onOff = user.settings.callOn ? "On" : "Off"; */

  return onOff;
}
