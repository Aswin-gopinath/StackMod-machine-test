"use client"
import Image from "next/image";
import Login from "./login/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/login")
  },[])
  return (
    <div className="w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 ">
    </div>
  );
}
