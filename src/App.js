import Item from "./components/item/item";
import Card from "./components/card/card";

const App = () => {
  return(
     <> 
     {/*  Tag vazia aceita todas as outras dentro dela.*/} 
    <h1>Minha primeira aplicação com React</h1>
    {/* A tag 'Item' renderiza todo o button em components */}
    <ul>
      <Item>item 1</Item>
      <Item>item 2</Item>
      <Item>item 3</Item>
    </ul>
      
      <Card />
    </>
    )};


export default App;
