const CardKursus = ({ text, color }) => {
  return (
    <div
      className={`h-44 ${color} rounded-3xl flex justify-center text-white text-xl font-bold py-2`}
    >
      <p>{text}</p>
    </div>
  )
}
export default CardKursus
