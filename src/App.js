import './App.css';
import NavBar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer';
/*import ItemListContainer from './containers/ItemListContainer';*/


function App() {
  return (
    <>
    <NavBar/>
    {/*<ItemListContainer/>*/}
    <ItemDetailContainer/>
    </>
  );
}

export default App;
