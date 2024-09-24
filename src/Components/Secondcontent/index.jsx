const Secondcontent = ({ propsSecondContent }) => {
    console.log(propsSecondContent)
    return (
        <>
        <div>
            {propsSecondContent.map((data, index) => (
                <div key={index}>
                    <img src={data.image} alt="" />
                    <h1>{data.name}</h1>
                </div>
            ))}
        </div>
        </>
    )
}
export default Secondcontent