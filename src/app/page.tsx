"use client";

import { ActionMenu, Toast, Verification } from "@/component";
import { useToast } from "@/store";
import { useState } from "react";

export default function Home() {
  const [isVerified, setIsVerified] = useState(false);

  const { message } = useToast();

  return (
    <div className="w-screen min-h-screen">
      {isVerified ? (
        <ActionMenu />
      ) : (
        <Verification setIsVerified={setIsVerified} />
      )}
      {message !== "" && <Toast msg={message} />}
    </div>
  );
}
