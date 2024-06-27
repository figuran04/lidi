import Label from "@/components/Label"

const BerandaTab = () => {
  return (
    <div className="grid grid-cols-3 gap-2 text-lg my-3 mx-1">
      <Label text="Kursusku" link="/kursus" condition="active" />
      <Label text="Beritaku" link="/berita" condition="" />
      <Label text="Favoritku" link="/favorit" condition="" />
    </div>
  )
}
export default BerandaTab
