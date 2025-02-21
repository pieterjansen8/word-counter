"use client"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
export default function MainBox() {
  const [words, setWords] = useState(0);

  function Tellwords(input: string) {
    const wordCount = input.trim().split(/\s+/).filter(Boolean).length; // Use regex and filter directly
    setWords(wordCount);
  }
  return (
    <div className="w-full flex h-full flex-col justify-center items-center">
         <Textarea
          style={{height: 70 + "vh"}}
          className="sm:h-80 p-4 resize-y border-2 rounded-md  cursor-default mt-5 border-blue-600  dark:border-white dark:text-white focus:cursor-text dark:hover:text-white hover:text-blue-600" 
          onChange={(event) => Tellwords(event.target.value)}
        />
    <span className="font-medium text-2xl mt-5 dark:text-white text-blue-600 select-none">Counted words: {words}</span>
    </div>
  )
}