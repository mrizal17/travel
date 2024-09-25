const Navbar = ({ propsNavList }) => {
    console.log("ini props nav", propsNavList)

    return (
        <>
            <div className="flex items-center gap-3 justify-between text-[7px] px-6 bg-slate-200">
                <div>
                    <img src="/image/logo.png" className="w-8 ml-3 " alt="" />
                </div>
                {propsNavList.map((item, index) => (
                    <div key={index}>
                        <h1 className="hover:underline">{item}</h1>
                    </div>
                ))}

            </div>
        </>

    )
}
export default Navbar