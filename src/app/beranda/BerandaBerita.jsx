import CardBerita from "@/components/CardBerita"
import Title from "@/components/Title"

const BerandaBerita = () => {
  return (
    <div className="my-4">
      <Title title="Riwayat Berita" styles="" />
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide">
        <CardBerita />
        <CardBerita />
      </div>
    </div>
  )
}
export default BerandaBerita
