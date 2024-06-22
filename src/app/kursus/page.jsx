import Back from "@/components/Back"
import Search from "@/components/Search"

const KursusPage = () => {
  return (
    <div>
      <Back />
      <div>
        <h1 className="text-3xl font-black text-primary">Waktunya Belajar</h1>
        <p className="text-xl">Pelajari hal-hal dalam satu halaman</p>
      </div>
      <div>
        <Search placeholder="Cari berita apapun di sini" />
      </div>
    </div>
  )
}

export default KursusPage
