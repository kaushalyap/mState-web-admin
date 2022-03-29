import React from "react";
import { Modal } from "@mantine/core";

export default function HelpModal({
  openState,
  fn,
}: {
  openState: boolean;
  fn: Function;
}) {
  return (
    <Modal opened={openState} onClose={() => fn(false)} title="Help">
      <h1 className="font-bold mb-4 tracking-wide">Data Table</h1>
      <ul className="list-disc list-outside ml-8 tracking-wide">
        <li className="mb-2">
          Shows the mState user data within the last month where their last
          three test scores in risky areas and either one of their Auto Respond
          setting is set to OFF.
        </li>
        <li className="mb-2">
          TUID : Trimmed Unique Identifier for each user{" "}
        </li>
        <li className="mb-2">
          Test 1 / 2 / 3 : Indicate the most recent tests taken by an user,
          where 1 is considered the most recent and 3 considered the least
          recent.
        </li>
        <li className="mb-6">Settings : User&apos;s Auto Respond settings.</li>
      </ul>

      <h1 className="font-bold mb-4 tracking-wide">Usage</h1>
      <ul className="list-disc list-outside ml-8 tracking-wide">
        <li className="mb-2">
          User data given in the grid allow admins to easily identify users at
          risk.
        </li>
        <li>
          By tapping / clicking user data row you can see user&apos;s profile
          details and guardian details which can be used to contact them.
        </li>
      </ul>
    </Modal>
  );
}
