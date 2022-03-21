import React from "react";
import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { readHistories } from "../services/ReadData";
import Link from "next/link";
import { History } from "../models/History";
import DataRow from "./DataRow";

export default function DataTable() {
  const [histories, setHistories] = useState<Array<Array<History>>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    readHistories().then((item) => {
      if (item) {
        setHistories(item);
        setLoading(false);
      }
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
        {!loading ? (
          histories != null ? (
            histories.map((item: Array<History>, index: number) => {
              return <DataRow key={index} data={item} />;
            })
          ) : (
            ""
          )
        ) : (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
