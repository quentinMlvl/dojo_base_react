import Item from "./Item";

function ItemList({ items, onItemChecked }) {
    return (
        <ul>
            {
                items.map((item, index) => {
                    return (
                        <li key={index}>
                            <Item  item={item} index={index} onChecked={onItemChecked}/>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ItemList;