import { useState } from "react";

const AddNote = ({ handleAddNote }) => {

    const [noteTxt, setNoteTxt] = useState('');
    const characterLimit = 200;


    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >=0) {
            setNoteTxt( e.target.value )
        }
    }

    const handleSaveClick = () => {
        if ( noteTxt.trim().length > 0){
            handleAddNote(noteTxt);
            setNoteTxt('');
        }    
    }

    return (
        <div className="note new">
            <textarea 
                cols="10" 
                rows="10"
                value={noteTxt} 
                placeholder="Type to add a note..."
                onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteTxt.length} Remaining</small>
                <button className="save btn" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;