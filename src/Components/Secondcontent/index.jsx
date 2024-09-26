const Secondcontent = ({ propsSecondContent }) => {
    console.log(propsSecondContent)
    return (
        <>
         <div className="bg-black text-gray-50 items-center text-center h-9 md:text-2xl">
                <h3 className="py-1 md:pb-4">USTADZ PEMBIMBING</h3>
            </div>
        <div className="flex flex-col md:flex-row justify-center gap-3 items-center rounded overflow-hidden shadow-lg bg-[#E5D9F2]">
            {propsSecondContent.map((data, index) => (
                <div key={index} className="bg-[#36BA98] p-5 rounded-lg">
                    <img src={data.image} alt="" className="h-64 md:h-28" />
                    <h1 className="bg-slate-200 rounded-md py-2 px-4 text-center">{data.name}</h1>
                </div>
            ))}
        </div>
        </>
    )
}
export default Secondcontent