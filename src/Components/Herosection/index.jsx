const Herosection = ({ propsHeroList }) => {
    console.log("isi Hero Section", propsHeroList)
    return (
        <>
            <div className="bg-[url('/image/makkah1.png')] relative h-32 bg-cover bg-center">
                {/* Konten lain */}
                <div className="text-center py-9"><h1 className="text-black text-sm font-bold">Meraih Ibadah Merangkai Ukhuwah</h1>
                <p className="text-black text-sm font-bold">Bersama</p>
                <h1 className="text-black text-sm font-bold">Bang Ijal Travel & Tour</h1>
                </div>
            </div>
            <div
                className=" bg-black bg-opacity-50 flex justify-center">
            </div>
        </>

    )
}
export default Herosection