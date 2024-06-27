"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/beranda")
    }, 2500)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen relative flex flex-wrap items-center bg-primary text-putih z-10">
      <div className="w-[9.5rem] h-44 absolute top-0 right-0 bg-[#B7B567] rounded-bl-3xl"></div>
      <div className="w-32 h-[12rem] absolute top-0 right-0 bg-[#2E8055] rounded-bl-3xl"></div>
      <div className="w-[6.5rem] h-56 absolute bottom-0 left-0 bg-[#B7B567] rounded-tr-3xl z-20"></div>
      <div className="w-20 h-64 absolute bottom-0 left-0 bg-[#2E8055] rounded-tr-3xl z-30"></div>
      <div className="flex justify-center items-end flex-wrap w-full h-48">
        <h1 className="text-4xl font-black">Lidi</h1>
      </div>
      <div className="flex justify-center w-full h-16 items-end">
        <p>Dalam pengembangan</p>
      </div>
    </div>
  )
}

export default HomePage
