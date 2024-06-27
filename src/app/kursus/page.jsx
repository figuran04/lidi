import KursusGrid from "./KursusGrid"
import KursusHeader from "./KursusHeader"
import KursusSearch from "./KursusSearch"
import KursusTab from "./KursusTab"

const KursusPage = () => {
  return (
    <div className="py-10">
      <KursusHeader />
      <KursusSearch />
      <KursusTab />
      <KursusGrid />
    </div>
  )
}

export default KursusPage
