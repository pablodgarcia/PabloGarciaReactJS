
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  let entrega= "Primer preentrega"
  let classParr = "estiloParr"

  return (
    <>

      <div > 
        
        <Navbar/>
          
        <ItemListContainer mensaje="Bienvenidos al mundo de las camisetas"/>
      
        <p className={classParr}>{entrega}</p>
      
       </div> 
    </>
  )
}

export default App
        


       



  //https://github.com/pablodgarcia/PabloGarciaReactJS


