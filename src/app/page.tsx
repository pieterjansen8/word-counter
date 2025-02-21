import Mainbox from "@/components/ui/mainbox"
export default function Home() {
  return (
    <div className="grid items-center dark:bg-slate-800 justify-items-center p-10  sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <span className=" select-none  dark:text-white font-medium  text-blue-700 sm:text-3xl text-xl ">Welcome to the best word counter web app!</span>
        <Mainbox></Mainbox>
        <span className="font-medium cursor-default select-none dark:text-white ">made by <a className="text-blue-300 " href="https://github.com/pieterjansen8">pieter jansen</a></span>
    </div>
  );
}
