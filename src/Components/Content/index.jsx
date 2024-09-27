const Content = ({propsContent}) => {
    console.log("ini content",propsContent)
    return (
        <>
        <div className="bg-black text-gray-50 items-center text-center h-9 md:text-2xl">
                <h3 className="py-1 md:pb-4">PAKET UMRAH</h3>
            </div>
            <div className="flex flex-col md:flex-row md:p-3 md:text-center lg:gap-10 justify-center gap-3 items-center rounded overflow-hidden shadow-lg bg-[#7FA1C3]">
                {propsContent.map((data,index)=>(
                    <div key={index} className="container bg-[#EDDFE0] p-3 rounded-lg md:p-1 md:w-60 md:h-80 ">
                        <h1 className="text-2xl text-slate-950 font-bold text-center">{data.name}</h1>
                        <h1 className="text-2xl text-slate-950 font-bold text-center pb-1">{data.price}</h1>
                        <img src={data.image} alt="image" className="h-64 md:h-48" />
                        <div className="text-center pt-2">
                        <button className="bg-[#A67B5B] hover:bg-[#6F4E37] text-white font-bold py-2 px-4 rounded">{data.button}</button>
                        </div>
                        
                       
                        

                    </div>
                ))}

            </div>
            
            
        </>
    )
}
export default Content