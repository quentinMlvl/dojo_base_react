import { useState } from "react";

function ItemForm({ onFormSubmit }) {
    const [itemValue, setItemValue ] = useState('');

    function itemFormSubmitted(e){
        e.preventDefault();
        onFormSubmit({task: itemValue, done: false});
        setItemValue('');
    }

    function handleChange(e){
        setItemValue(e.target.value);
    }


    return (
        <form onSubmit={itemFormSubmitted}>
            <fieldset>
                <input type="text" placeholder="My not todo task…" required value={itemValue} onChange={handleChange} />
                <button type="submit">Add</button>
            </fieldset>
        </form>
    );
}

export default ItemForm;