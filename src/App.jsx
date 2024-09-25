import Content from "./Components/Content"
import Herosection from "./Components/Herosection"
import Navbar from "./components/Navbar"
import Secondcontent from "./Components/Secondcontent"


const App = () => {
  const navList = ["Paket Travel","Pembimbing", "Hubungi Kami", "Login"]
  const heroList = ["Foto", "Text"]
  const content = [
    {
      name: "PAKET 1",
      price: "35jt",
      image: "./image/paket 1.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET 2",
      price: "32jt",
      image: "./image/paket 2.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET 3",
      price: "30jt",
      image: "./image/paket 3.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET PREMIUM",
      price: "45jt",
      image: "./image/paket 4.png",
      button: "Daftar Sekarang"
    },

  ]
  const secondContent = [
    {
      image: "./image/Ustadz.png",
      name: "Ustadz 1",
    },
    {
      image: "./image/Ustadz.png",
      name: "Ustadz 2",
    },
    {
      image: "./image/Ustadz.png",
      name: "Ustadz 3",
    },
    {
      image: "./image/Ustadz.png",
      name: "Ustadz 4",
    },
    {
      image: "./image/Ustadz.png",
      name: "Ustadz 5",
    }
  ]

  
  return (
    <>
      <Navbar propsNavList={navList} />
      <Herosection propsHeroList={heroList}/>
      <Content propsContent={content}/>
      <Secondcontent propsSecondContent={secondContent} />
    </>
  )
}

export default App
