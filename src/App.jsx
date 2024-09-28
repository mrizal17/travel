import Content from "./Components/Content"
import Herosection from "./Components/Herosection"
import Navbar from "./Components/Navbar"
import Secondcontent from "./Components/Secondcontent"
import Footer from "./Components/Footer"


const App = () => {
  const navList = ["Paket Travel","Pembimbing", "Hubungi Kami", "Login"]
  const heroList = ["Foto", "Text"]
  const content = [
    {
      name: "PAKET 1",
      price: "32jt",
      image: "./image/paket 1.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET 2",
      price: "35jt",
      image: "./image/paket 2.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET 3",
      price: "40jt",
      image: "./image/paket 3.png",
      button: "Daftar Sekarang"
    },
    {
      name: "PAKET 4",
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
  const footer = [
    {
      item1: "Our Social Media",
      item2: "Instagram",
      item3: "Facebook",
      item4: "Twitter",
    },
    {
      item1: "Contact Us",
      item2: "Email",
      item3: "Phone",
      item4: "Address",
    },
  ]

  
  return (
    <>
      <Navbar propsNavList={navList} />
      <Herosection propsHeroList={heroList}/>
      <Content propsContent={content}/>
      <Secondcontent propsSecondContent={secondContent} />
      <Footer propsFooter={footer}/>
    </>
  )
}

export default App
