const ListBerita = ({ title }) => {
  return (
    <div className="flex my-4">
      <div className="skeleton rounded-3xl w-36 h-24 overflow-hidden flex-shrink-0"></div>
      <h2 className="text-xl line-clamp-3 m-2">{title}</h2>
    </div>
  )
}
export default ListBerita
