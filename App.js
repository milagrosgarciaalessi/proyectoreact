
import ItemListContainer from "./components/itemListContain/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

function App() {

  return (
    <div>
       <Navbar />
       <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
