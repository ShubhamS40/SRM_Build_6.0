"use client";

import { TypewriterEffect } from "@/components/ui/typewritereffect";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 5 seconds
    const timeout = setTimeout(() => {
      router.push("http://localhost:3000"); // Change this to the actual route you need
    }, 7000);

    return () => clearTimeout(timeout); // Cleanup to avoid memory leaks
  }, [router]);

  const wordsArray = [
    { text: "Hello," },
    { text: "Welcome...to...ReloAssist" },
    { text: "Relocation, Reimagined!!" },
  ];

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="p-4 rounded">
        <TypewriterEffect words={wordsArray} />
      </div>
    </div>
  );
}

export default Page;
