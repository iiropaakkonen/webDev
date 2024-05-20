

function List() {

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 32},
                    {id: 3, name: "banana", calories: 2}];
    
    fruits.sort((a, b) => a.calories - b.calories);

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 50);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                            {lowCalFruit.name}: &nbsp;
                                            <b>{lowCalFruit.calories}</b></li>);
    return (<ol>{listItems}</ol>);
} 
export default List