const Title = ({ title, styles }) => {
  return (
    <div className="font-bold text-xl">
      <h3 className={`mx-2 my-2 ${styles}`}>{title}</h3>
    </div>
  )
}
export default Title
