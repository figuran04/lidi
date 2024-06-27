const Navbar = () => {
  return (
    <div className="flex flex-col z-0 fixed bottom-0 left-0 justify-around w-screen items-end text-xl font-bold">
      <div className="w-full flex justify-center">
        <div className="flex justify-center items-center relative h-12">
          <div className="w-20 h-20 bg-primary text-primary border-8 border-putih rounded-full absolute top-0 flex justify-center items-center">
            Text
          </div>
        </div>
      </div>
      <div className="flex w-full bg-putih">
        <div className="pt-2 pb-4 bg-primary text-white w-full flex justify-center">
          <h2>Beranda</h2>
        </div>
        <div className="pt-2 pb-4 w-full flex justify-center">
          <h2>Menu</h2>
        </div>
      </div>
    </div>
  )
}
export default Navbar
