
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import logo from "./assets/img/logo.jpg"

function App() {

  let entrega= "Primer preentrega"
  let classHuno = "estiloHuno"



  return (
    <>

      <div > 
        
        <img src={logo} alt="Logo" className='imgLogo' /> 

        <Navbar/>
        <ItemListContainer mensaje="Este es mi saludo"/>
      
        <h1 className={classHuno}>{entrega}</h1>


       
      
       </div> 
    </>
  )
}

export default App
