import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';


function App() {
  const [items, setItems] = useState([
    {
      task: "Dojos !",
      done: false,  
    },
    {
      task: "Respirer la compote par le nez (ça fait tousser…)",
      done: false,
    }
  ]);

  function addItem(item){
    setItems([...items, item]);    
  }

  function onItemChecked(index){
    let copyItems = [...items];
    copyItems[index].done = !copyItems[index].done;
    setItems(copyItems);
  }

  return (
    <div className="App">
      <Header/>
      <ItemForm onFormSubmit={addItem}/>
      <ItemList items={items} onItemChecked={onItemChecked}/>
    </div>
  );
}

export default App;
