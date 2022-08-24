import React, { useState } from 'react';

const Tasks = () => {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [countFinished, setCountFinished] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    function submit(e) {
        e.preventDefault();
    }

    function addItem() {
        if (!newItem) {
            alert("Ajouter une tache");
            return;
        }
        const newCount = count + 1;
        setCount(newCount);
        const item = {
            id: newCount,
            value: newItem,
        };
        setItems(oldList => [...oldList, item]);
        setNewItem("");
    }

    function removeItem(itemSelect) {
        const newItems = items.filter((item) => item.id !== itemSelect.id);
        if (itemSelect.checked) {
            setCountFinished(countFinished - 1);
            setCount(count - 1);
        } else {
            setCount(count - 1);
        }
        setItems(newItems);
    }

    function check(e, item) {
        const li = e.target.parentElement;
        const nameTask = li.children[1];

        if (e.target.checked) {
            li.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
            nameTask.classList.add("line");
            setCountFinished(countFinished + 1);
            item.checked = true;
        } else {
            li.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            nameTask.classList.remove("line");
            setCountFinished(countFinished - 1);
            item.checked = false;
        }
    }

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    return (
        <>
            <form className='createTask' onSubmit={submit}>
                <input type="text" value={newItem} placeholder='Nom de la tache' onChange={e => setNewItem(e.target.value)} />
                <button type="submit" onClick={() => addItem()}>+ Ajouter</button>
            </form>
            <hr />
            <div>
                <input type="search" name="Recherche" placeholder='Recherche' onChange={handleSearchTerm} />
            </div>
            <hr />
            <form id="search" className='items'>
                <ul>
                    {items.filter((item) => {
                        return item.value.toLowerCase().includes(searchTerm.toLowerCase()); 
                    })
                        .map((item) => {
                            return (
                                <li key={item.id} >
                                    <input type="checkbox" className='checkbox' onChange={(e) => check(e, item)} />
                                    <span className='nameTask' >{item.value}</span>
                                    <button className='btnItem' onClick={() => removeItem(item)}></button>
                                </li>
                            )
                        })}
                </ul>
            </form>
            <div className='counter'>
                <p>Nombre de tache(s): <span className='bg-red'>{count}</span></p>
                <p>Tache(s) terminée(s): <span className='bg-red'>{countFinished}</span></p>
            </div>
        </>
    );
};

export default Tasks;