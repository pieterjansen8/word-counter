'use client';
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
export default function NotFound() {
  const router =  useRouter()
  const setup = () => { 
    if(localStorage.getItem("auto-redirect")=="true"){
      router.push("/")
    }
  }
  function handlecheck(){
    localStorage.setItem("auto-redirect", "true")
    router.push("/")
  }
  setup()
  return (
    <div className="grid  bg-slate-800 h-screen justify-items-center  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className=' font-medium text-white text-lg sm:text-3xl mt-4'>ERROR  server can't find page: "{window.location.pathname}" ! </span>
      <div className="flex items-center space-x-2">
        <Checkbox className='bg-white' id="terms" onCheckedChange={handlecheck}/>
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