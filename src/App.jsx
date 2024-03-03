import MainContent from "./components/MainContent"
import SideBar from "./components/Sidebar";


import './styles/components/app.sass'
import './styles/main.sass'
function App() {


  return (
    <div id='portfolio'>
      <h1>Marcos Medeiros</h1>
      <SideBar></SideBar>
      <MainContent></MainContent>
    </div>
  )
}

export default App
