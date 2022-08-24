import React, { useState } from 'react';

const Tasks = () => {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    function addItem() {

        if (!newItem) {
            alert("Ajouter une tache");
            return;
        }
        const newCount = count + 1;
        setCount(newCount);
        const item = {
            id: newCount,
            value: newItem

        };
        setItems(oldList => [...oldList, item]);
        setNewItem("");
    }

    return (
        <>
            <div className='createTask'>
                <input type="text" value={newItem} placeholder='Nom de la tache' onChange={e => setNewItem(e.target.value)} />
                <button onClick={() => addItem()}>+ Ajouter</button>
            </div>
            <hr />

            <div className='items'>
                <ul>
                    {items.map(item => {
                        return (
                            <li key={item.id}>{item.value}
                            <button className='btnItem'></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Tasks;