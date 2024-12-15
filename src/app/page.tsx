'use client'
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";

export default function Home() {
  const [words, setWords] = useState(0);

  function Tellwords(input: string) {
    const wordCount = input.trim().split(/\s+/).filter(Boolean).length; // Use regex and filter directly
    setWords(wordCount);
  }

  return (
    <div className="grid items-center dark:bg-slate-800 justify-items-center p-10  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <span className=" select-none  dark:text-white font-medium  text-blue-700 sm:text-3xl text-xl ">Welcome to the best word counter web app!</span>
        <Textarea
          style={{height: 70 + "vh"}}
          className="sm:h-80 p-4 resize-y border-2 rounded-md  cursor-default mt-5 border-blue-600  dark:border-white dark:text-white focus:cursor-text dark:hover:text-white hover:text-blue-600" 
          onChange={(event) => Tellwords(event.target.value)}
        />
        <span className="font-medium text-2xl mt-5 dark:text-white text-blue-600 select-none">Counted words: {words}</span>
        <span className="font-medium text-blue-600 cursor-default select-none dark:text-white ">made by <a href="https://github.com/pieterjansen8">pieter jansen</a></span>
    </div>
  );
}
