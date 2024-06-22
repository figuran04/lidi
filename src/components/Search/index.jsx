const Search = ({ placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-secondary text-lg py-2 px-4 rounded-full text-black placeholder:text-gray-950 w-full shadow-lg"
      />
      <button className="absolute end-1 right-2 p-2 text-lg text-black font-bold">
        Cari
      </button>
    </div>
  )
}
export default Search
