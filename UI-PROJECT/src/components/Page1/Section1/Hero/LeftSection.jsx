const LeftSection = () => {
  return (
    <div className="h-full w-[50%] bg-slate-700 relative">
        <img  className='h-full w-full object-cover'src="https://images.unsplash.com/photo-1554176259-aa961fc32671?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <div className="flex flex-col justify-center absolute inset-0 h-full w-full items-center">
            <p className="text-gray-300 mb-1.5">Hello, My name is </p>
            <h1 className="text-white text-4xl mb-2.5">Razan Smith</h1>
            <p className="text-gray-300 mb-10">A creative freelancer & full stack developer</p>

            <button className="text-white bg-yellow-700 px-[10px] py-[4px] rounded-2xl cursor-pointer">Know more</button>

        </div>
    </div>
  )
}

export default LeftSection
