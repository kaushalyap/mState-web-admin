import React from "react";
import Link from "next/link";
import { History } from "../models/History";

export default function DataRow({ data }: { data: Array<History> }) {
  return (
    <Link href={`profile/${data[0].uid}`} passHref>
      <tr className="bg-pink-200 cursor-pointer">
        <td className="md:text-lg lg:pl-6">{data[0].uid}</td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{data[0].score} </span>
            <span className="text-gray-600 text-sm">
              {data[0].questionnaireType}
            </span>
          </div>
          <div className="text-xs md:text-base text-gray-600 tracking-wider">
            {data[0].timestamp}
          </div>
        </td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{data[1].score} </span>
            <span className="text-gray-600 text-sm">
              {data[1].questionnaireType}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {data[1].timestamp}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="lg:text-xl">{data[2].score} </span>
            <span className="text-gray-600 text-sm">
              {data[2].questionnaireType}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {data[2].score}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Sms:{" "}
            </span>
            {data[0].user!!.settings.smsOn ? "On" : "Off"}
          </div>
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Call:{" "}
            </span>
            {data[0].user!!.settings.callOn ? "On" : "Off"}
          </div>
        </td>
      </tr>
    </Link>
  );
}
