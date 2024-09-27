const Footer = ({ propsFooter }) => {
    console.log("ini footer", propsFooter)
    return (
        <div>
            <div className="flex gap-16 bg-black text-white md:gap-28 p-2">
                {propsFooter.map((data, index) => (
                    <div key={index}>
                        <div className=" gap-2 grid-cols-2">
                            <h1 className="font-bold">{data.item1}</h1>
                            <h1 className="text-slate-200 hover:scale-125">{data.item2}</h1>
                            <h1 className="text-slate-200 hover:scale-125">{data.item3}</h1>
                            <h1 className="text-slate-200 hover:scale-125">{data.item4}</h1>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    )
}
export default Footer