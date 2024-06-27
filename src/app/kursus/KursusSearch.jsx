import Search from "@/components/Search"

const KursusSearch = () => {
  return (
    <div className="bg-primary text-white rounded-3xl mx-4 p-3">
      <div className="m-2">
        <h2 className="font-black text-xl w-8/12">
          TEMUKAN KURSUS KESUKAAN MU
        </h2>
        <p>26.7K Kursus</p>
      </div>
      <Search placeholder="Cari berita apapun di sini" />
    </div>
  )
}

export default KursusSearch
