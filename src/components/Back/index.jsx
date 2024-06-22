"use client"
import { useRouter } from "next/navigation"

const Back = () => {
  const router = useRouter()
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="my-2 flex items-center font-arialBold"
      >
        Back
      </button>
    </div>
  )
}
export default Back
