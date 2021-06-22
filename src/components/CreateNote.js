import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//import { propTypes } from 'react-bootstrap/esm/Image';

function CreateNote(props) {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: '',
    });

    const InputEvent = (event) => 
    {
        // const value = event.target.value;
        // const name= event.target.name;

        const {name, value} = event.target;
        setNote((prevData)=> {
            return{
                ...prevData,
                [name]: value,
            };
        });
        //console.log(note);
    };

    const addEvent = () => 
    {
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };
    const expandData = () => {
        setExpand(true);
    };

    const backNormal = () => {
        setExpand(false);
    };
    
  return (
    <>
        <div className="main_note" onDoubleClick={backNormal}>
            <form>
                {expand ?
                <input type="text" name="title" value={note.title}
                    onChange={InputEvent} placeholder="Title" autoComplete="off"
                />: null }
                <textarea name="content" onChange={InputEvent}
                    rows="3" onClick={expandData}
                    placeholder="Please Write Something..." value={note.content}
                ></textarea>
                {expand ?
                <Button onClick={addEvent} className="MuiButton-root">
                    <AddIcon className="plus-sign" />
                </Button> : null }
            </form>
        </div>
    </>
  );
}

export default CreateNote;
