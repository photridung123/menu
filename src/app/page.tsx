"use client";

import { ActionMenu, Noel23, Toast, Verification } from "@/component";
import { PASS_CODE } from "@/constant";
import { useToast } from "@/store";
import { verifyPassCode } from "@/utility";
import { useState } from "react";

export default function Home() {
  const [passCode, setPassCode] = useState("");

  const { message } = useToast();

  return (
    <div className="w-screen min-h-screen">
      {verifyPassCode(passCode) ? (
        passCode === PASS_CODE.MENU_ACTION ? (
          <ActionMenu />
        ) : (
          <Noel23 />
        )
      ) : (
        <Verification setPassCode={setPassCode} />
      )}

      {message !== "" && <Toast msg={message} />}
    </div>
  );
}
