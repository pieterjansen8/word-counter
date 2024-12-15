'use client';
import Link from 'next/link'
import { useEffect } from 'react';
import {useRouter} from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
export default function NotFound() {
  const router =  useRouter()
  const Setup = () => { 
    useEffect(() => {
      if(localStorage.getItem("auto-redirect")=="true"){
        router.push("/")
      }
    })
  }
  function Handlecheck(){
    useEffect(() => {
       localStorage.setItem("auto-redirect", "true")
       router.push("/")
    })
  }
  Setup()
  return (
    <div className="grid  bg-slate-800 h-screen justify-items-center  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className=' font-medium text-white text-lg sm:text-3xl mt-4'>ERROR  server can&apos;t find page: &quot;{window.location.pathname}&quot; ! </span>
      <div className="flex items-center space-x-2">
        <Checkbox className='bg-white' id="terms" onCheckedChange={Handlecheck}/>
        <label
          htmlFor="terms"
          className="text-sm font-medium text-white"
        >
          Auto redirect next time
        </label>
      </div>
      <Link href={"/"} className='text-blue-700 text-2xl font-medium'>go back to main page</Link>
    </div>
  )
}