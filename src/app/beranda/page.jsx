import BerandaSearch from "./BerandaSearch"
import BerandaHeader from "./BerandaHeader"
import BerandaKursus from "./BerandaKursus"
import BerandaBerita from "./BerandaBerita"
import BerandaTab from "./BerandaTab"

const BerandaPage = () => {
  return (
    <div className="px-4 py-10">
      <BerandaHeader />
      <BerandaSearch />
      <BerandaTab />
      <BerandaKursus />
      <BerandaBerita />
    </div>
  )
}

export default BerandaPage
