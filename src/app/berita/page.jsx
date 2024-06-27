import BeritaHeader from "./BeritaHeader"
import BeritaSearch from "./BeritaSearch"
import BeritaTab from "./BeritaTab"
import BeritaList from "./BeritaList"

const BeritaPage = () => {
  return (
    <div className="py-10">
      <BeritaHeader />
      <BeritaSearch />
      <BeritaTab />
      <BeritaList />
    </div>
  )
}
export default BeritaPage
