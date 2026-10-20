const Nav = () => {
  return (
    <div className="flex justify-between h-[18%] px-10 py-4 w-100% bg-slate-950 items-center">
        <div className="text-orange-500 text-2xl">
            Step.
        </div>
        <div className="flex gap-10 text-white">
            <a href="#" style={{color:"darkOrange"}}>Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Resume</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </div>
    </div>
  )
}

export default Nav
