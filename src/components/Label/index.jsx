import Link from "next/link"

const Label = ({ text, link, condition }) => {
  return (
    <Link
      href={link}
      className={`bg-gray-300 text-hitam px-4 py-2 rounded-full flex justify-center ${condition}`}
    >
      {text}
    </Link>
  )
}
export default Label
