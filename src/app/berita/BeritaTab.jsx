import Label from "@/components/Label"

const BeritaTab = () => {
  return (
    <div className="sticky top-0 bg-putih py-2 pl-4">
      <div className="flex space-x-3 overflow-x-scroll scrollbar-hide pr-4">
        <Label text="Terbaru" link="/berita/terbaru" condition="active" />
        <Label text="Populer" link="/berita/populer" condition="" />
        <Label text="Gaya Hidup" link="/berita/gaya-hidup" condition="" />
        <Label text="Politik" link="/berita/politik" condition="" />
      </div>
    </div>
  )
}
export default BeritaTab
