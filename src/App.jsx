import Content from "./Components/Content"
import Herosection from "./Components/Herosection"
import Navbar from "./components/Navbar"


const App = () => {
  const navList = ["Paket Travel", "Hubungi Kami", "Login"]
  const heroList = ["Foto", "Text"]

  
  return (
    <>
      <Navbar propsNavList={navList} />
      <Herosection propsHeroList={heroList}/>
      <Content/>
    </>
  )
}

export default App
