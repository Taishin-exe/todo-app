import React from 'react'
import Item from './Item'

const List = (props) => {
    console.log(props.todoItems);
    
    return (
        <ul>
            {props.todoItems.map(todoItem => <Item todoItem={todoItem} key ={todoItem.id}/>)}
        </ul>
    )
}

export default List