const Herosection = ({propsHeroList}) => {
    console.log("isi Hero Section", propsHeroList)
    return (
        <>
            <div className="bg-[url('/image/makkah1.png')] relative h-32 bg-cover bg-center">
                {/* Konten lain */}
                <h1 className="text-black text-sm font-bold text-center items-center">Abadikan Momen Indah Ibadah Anda Bersama Kami</h1>
            </div>
            <div 
            className=" bg-black bg-opacity-50 flex justify-center">
            </div>
        </>

    )
}
export default Herosection