import React from "react";
import Link from "next/link";

type History = {
  key: string;
  item: {
    uid: string;
    name: string;
    test1: {
      score: number;
      type: string;
      date: string;
    };
    test2: {
      score: number;
      type: string;
      date: string;
    };
    test3: {
      score: number;
      type: string;
      date: string;
    };
    settings: {
      sms: boolean;
      call: boolean;
    };
  };
};

export default function DataRow(item: History) {
  return (
    <Link href={`profile/${item.item.uid}`} passHref>
      <tr className="bg-pink-200 cursor-pointer">
        <td className="md:text-lg lg:pl-6">{item.item.name}</td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{item.item.test1.score} </span>
            <span className="text-gray-600 text-sm">
              {item.item.test1.type}
            </span>
          </div>
          <div className="text-xs md:text-base text-gray-600 tracking-wider">
            {item.item.test1.date}
          </div>
        </td>
        <td className="md:text-lg">
          <div>
            <span className="lg:text-xl">{item.item.test2.score} </span>
            <span className="text-gray-600 text-sm">
              {item.item.test2.type}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {item.item.test2.date}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="lg:text-xl">{item.item.test3.score} </span>
            <span className="text-gray-600 text-sm">
              {item.item.test3.type}
            </span>
          </div>
          <div className="text-sm md:text-base text-gray-600 tracking-wider">
            {item.item.test3.date}
          </div>
        </td>
        <td className="md:text-lg tracking-wide">
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Sms:{" "}
            </span>
            {item.item.settings.sms ? "On" : "Off"}
          </div>
          <div>
            <span className="text-gray-600 text-sm md:text-base lg:text-lg">
              Call:{" "}
            </span>
            {item.item.settings.call ? "On" : "Off"}
          </div>
        </td>
      </tr>
    </Link>
  );
}
