const Content = ({propsContent}) => {
    console.log("ini content",propsContent)
    return (
        <>
        <div className="bg-black text-gray-50 items-center text-center h-9">
                <h3 className="py-1">Paket Umrah</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
            </div>
            <div className="flex flex-col justify-center gap-3 items-center rounded overflow-hidden shadow-lg bg-[#7FA1C3]">
                {propsContent.map((data,index)=>(
                    <div key={index} className="bg-[#EDDFE0] p-3 rounded-lg">
                        <h1 className="text-2xl text-slate-950 font-bold text-center">{data.name}</h1>
                        <h1 className="text-2xl text-slate-950 font-bold text-center pb-1">{data.price}</h1>
                        <img src={data.image} alt="image" className="h-64" />
                        <div className="text-center pt-2">
                        <button className="bg-[#A67B5B] hover:bg-[#6F4E37] text-white font-bold py-2 px-4 rounded">{data.button}</button>
                        </div>
                       
                        

                    </div>
                ))}

            </div>
            
            {/* <div className="bg-black text-gray-50 items-center text-center">
                <h3>Paket Umrah</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div class="w-44 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src="/image/paket.png" alt="Gambar Card"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Paket 1</div>
                    </div>
                </div>
                <div class="w-44 rounded overflow-hidden shadow-lg bg-white grid-cols-2">
                    <img className="w-full" src="/image/paket.png" alt="Gambar Card"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Paket 2</div>
                    </div>
                </div>
                <div class="w-44 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src="/image/paket.png" alt="Gambar Card"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Paket 3</div>
                    </div>
                </div>
                <div class="w-44 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src="/image/paket.png" alt="Gambar Card"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-center">Paket 4</div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Content