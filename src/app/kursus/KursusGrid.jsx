import CardKursus from "@/components/CardKursus"

const KursusGrid = () => {
  return (
    <div className="m-4">
      <div className="grid grid-cols-2 gap-4">
        <CardKursus text="Kreativitas" color="bg-[#2E8055]" />
        <CardKursus text="Life Hack" color="bg-kuning" />
        <CardKursus text="Teknologi" color="bg-kuning" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Teknologi" color="bg-kuning" />
        <CardKursus text="Teknologi" color="bg-kuning" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Teknologi" color="bg-kuning" />
        <CardKursus text="Teknologi" color="bg-kuning" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Keuangan" color="bg-[#2E8055]" />
        <CardKursus text="Teknologi" color="bg-kuning" />
      </div>
    </div>
  )
}

export default KursusGrid
