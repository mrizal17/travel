const Content = () => {
    return (
        <>
            <div className="bg-black text-gray-50 items-center text-center">
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
            </div>
        </>
    )
}
export default Content