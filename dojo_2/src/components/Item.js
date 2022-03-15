function Item({ item, index, onChecked }) {
    const uid = 'itemNotToDo_' + index;

    return (
        <div className={item.done ? 'done': ''}>
            <label htmlFor={uid}>
                 <input type="checkbox" id={uid} onChange={() => onChecked(index)} defaultChecked={item.done ? 'checked': ''}/>
                 <span>{item.task}</span>
            </label>
        </div>
    );
}

export default Item;