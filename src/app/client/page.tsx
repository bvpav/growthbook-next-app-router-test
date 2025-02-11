"use client";
import { useFeatureIsOn } from "@growthbook/growthbook-react";
import Link from "next/link";
import { AppFeatures } from "../../generated-types/app-features";

export default function Client() {
  const isInColorTest = useFeatureIsOn<AppFeatures>("create-team");
  const colorClassName = isInColorTest ? "bg-purple-500" : "bg-blue-500";

  return (
    <main className="container p-4 flex flex-col gap-4 items-start">
      <h1 className="text-2xl font-bold">Next App Router + Growthbook</h1>
      <p>
        This is a <strong>client</strong> component.
      </p>
      <Link
        className={`${colorClassName} text-white px-4 py-2 rounded-2xl`}
        href="/"
      >
        Go to server component page
      </Link>
    </main>
  );
}
