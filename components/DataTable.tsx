import React from "react";
import { Table } from "@mantine/core";
import DataRow from "./DataRow";
import { useEffect, useState } from "react";
import { readHistories } from "../services/ReadData";
import Link from "next/link";

export default function DataTable() {
  const [histories, setHistories] = useState<any>(null);

  useEffect(() => {
    readHistories().then((item) => {
      if (item) {
        setHistories(item);
      } else console.error("Fetching histories failed!");
    });
  }, [setHistories]);

  /*   const histories = [
    [
      {
        uid: "prW2afyS3WVMaUsnKoXBoEyrvLR2",
        timestamp: {
          seconds: 1647168151,
          nanoseconds: 124000000,
        },
        score: 16,
        user: null,
      },
      {
        uid: "prW2afyS3WVMaUsnKoXBoEyrvLR2",
        timestamp: {
          seconds: 1647163878,
          nanoseconds: 998000000,
        },
        score: 18,
        user: null,
      },
      {
        uid: "prW2afyS3WVMaUsnKoXBoEyrvLR2",
        timestamp: {
          seconds: 1647162553,
          nanoseconds: 5000000,
        },
        score: 17,
        user: null,
      },
    ],
    [
      {
        uid: "OOKuCxCV9wYrB8LtnxoN0mQcyqC2",
        timestamp: {
          seconds: 1647515417,
          nanoseconds: 594000000,
        },
        score: 16,
        user: null,
      },
    ],
  ];
 */
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
          ? histories.map((data: any, index: number) => {
              return (
                <Link key={index} href={`profile/${data[0].uid}`} passHref>
                  <tr className="bg-pink-200 cursor-pointer">
                    <td className="md:text-lg lg:pl-6">
                      {trimUid(data[0].uid)}
                    </td>
                    <td className="md:text-lg">
                      <div>
                        <span className="lg:text-xl">{data[0].score} </span>
                        <span className="text-gray-600 text-sm">
                          Type {data[0].questionnaireType}
                        </span>
                      </div>
                      <div className="text-xs md:text-base text-gray-600 tracking-wider">
                        {convertTimestampToDate(data[0].timestamp.seconds)}
                      </div>
                    </td>
                    <td className="md:text-lg">
                      <div>
                        <span className="lg:text-xl">
                          {data[1] != undefined ? data[1].score : "N/A"}{" "}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {data[1] != undefined
                            ? data[1].questionnaireType
                            : "N/A"}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-600 tracking-wider">
                        {data[1] != undefined
                          ? convertTimestampToDate(data[1].timestamp.seconds)
                          : "N/A"}
                      </div>
                    </td>
                    <td className="md:text-lg tracking-wide">
                      <div>
                        <span className="lg:text-xl">
                          {data[2] != undefined ? data[2].score : "N/A"}{" "}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {data[2] != undefined
                            ? data[2].questionnaireType
                            : "N/A"}
                        </span>
                      </div>
                      <div className="text-sm md:text-base text-gray-600 tracking-wider">
                        {data[2] != undefined
                          ? convertTimestampToDate(data[2].timestamp.seconds)
                          : "N/A"}
                      </div>
                    </td>
                    <td className="md:text-lg tracking-wide">
                      <div>
                        <span className="text-gray-600 text-sm md:text-base lg:text-lg">
                          Sms:{" "}
                        </span>
                        {/* {data[0].user!!.settings.smsOn ? "On" : "Off"} */}
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm md:text-base lg:text-lg">
                          Call:{" "}
                        </span>
                        {/* {data[0].user!!.settings.callOn ? "On" : "Off"} */}
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
  console.log(year);
  return `${day}/${month}/${year}`;
}

function trimUid(uid: string) {
  return uid.toString().substring(0, 10);
}
