import Label from "@/components/Label"
import Title from "@/components/Title"

const KursusTab = () => {
  return (
    <div className="sticky top-0 bg-putih py-2 pl-4">
      <Title title="KATEGORI" styles="font-black text-primary" />
      <div className="mt-2 flex space-x-3 overflow-x-scroll scrollbar-hide pr-4">
        <Label text="Semua" link="/kursus/Semua" condition="active" />
        <Label text="Teknologi" link="/kursus/teknologi" condition="" />
        <Label text="Life Hack" link="/kursus/lifehack" condition="" />
        <Label text="Keuangan" link="/kursus/keuangan" condition="" />
        <Label text="Keuangan" link="/kursus/keuangan" condition="" />
      </div>
    </div>
  )
}

export default KursusTab
