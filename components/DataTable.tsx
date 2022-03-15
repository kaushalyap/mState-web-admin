import React, { Children } from "react";
import { Table } from "@mantine/core";

export default function DataTable({ children }: { children: React.ReactNode }) {
  return (
    <Table striped highlightOnHover verticalSpacing="md">
      <thead className="bg-yellow-300">
        <tr>
          <th className="md:text-lg lg:text-xl lg:pl-6 tracking-wider rounded-tl-xl">
            Name
          </th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 1</th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 2</th>
          <th className="md:text-lg lg:text-xl tracking-wider">Test 3</th>
          <th className="md:text-lg lg:text-xl tracking-wider  rounded-tr-xl">
            Settings
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
