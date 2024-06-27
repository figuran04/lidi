import CardKursus from "@/components/CardKursus"
import Title from "@/components/Title"

const BerandaKursus = () => {
  return (
    <div className="my-4">
      <Title title="Riwayat Kursus" styles="" />
      <div className="grid grid-cols-2 gap-4">
        <CardKursus text="Kreativitas" color="bg-[#2E8055]" />
        <CardKursus text="Life Hack" color="bg-kuning" />
      </div>
    </div>
  )
}
export default BerandaKursus
