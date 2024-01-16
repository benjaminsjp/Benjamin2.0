import Image from "next/image";
import * as React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <div className="">
        <h1>Ferdigheter</h1>
      </div>
      <div>
        <h1>Utdanning</h1>
      </div>
      <div className="">
        <h1>Arbeidserfaring</h1>
      </div>
    </main>
  );
}
