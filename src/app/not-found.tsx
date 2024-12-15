'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem("auto-redirect") === "true") {
      router.push("/");
    }
  }, [router]);

  function handleCheck() {
    localStorage.setItem("auto-redirect", "true");
    router.push("/");
  }

  return (
    <div className="grid bg-slate-800 h-screen justify-items-center sm:p-20 font-geist-sans">
      <span className="font-medium text-white text-lg sm:text-3xl mt-4">
        ERROR server can&apos;t find page: &quot;{typeof window !== 'undefined' ? window.location.pathname : ''}&quot;!
      </span>
      <div className="flex items-center space-x-2">
        <Checkbox className="bg-white" id="terms" onCheckedChange={handleCheck} />
        <label htmlFor="terms" className="text-sm font-medium text-white">
          Auto redirect next time
        </label>
      </div>
      <Link href="/" className="text-blue-700 text-2xl font-medium">
        Go back to the main page
      </Link>
    </div>
  );
}
