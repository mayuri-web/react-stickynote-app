
import React, {useState} from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    //alert("Someone Click Me....");
    setAddItem((prevData)=>{
      return[...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => 
  {
    setAddItem((oldData)=> 
      oldData.filter((currdata, index)=>{
        return index !== id;
      })
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      {
        addItem.map((val,index)=>{
          return<Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        })
      }
      <Footer />
    </>
  );
}

export default App;
