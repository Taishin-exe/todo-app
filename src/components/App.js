import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'


import Form from './Form'
import List from './List'
// import '../stylesheets/App.css'

const AppWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Sacramento');
text-align: center;
background: linear-gradient(#fff, #000);
height: 100vh;
h1 {
    font-family: 'Sacramento', cursive;
    padding: 30px;
    font-size: 40px;
    background: linear-gradient(#000000, #fff);
}
`

const GlobalStyle = createGlobalStyle`
${reset}
`
const App = () => {
    const [todoItems, setTodoItems] = React.useState( [
        {
            id: 1,
            content: 'テスト1'
        },
        {
            id: 2,
            content: 'テスト2'
        },
        {
            id: 3,
            content: 'テスト3'
        }
    ] 
    )

    const addTodoItem = (newContent) => {
        // console.log(newTodoItem)
        const newTodoItem = {
            id: todoItems.length + 1,
            content: newContent
        }
        const newTodoItems = todoItems.concat(newTodoItem)
        setTodoItems(newTodoItems)
    }

    const deleteTodoItem =(id) => {
        const newTodoItems = todoItems.filter(todoItem => id !== todoItem.id)
        setTodoItems(newTodoItems);
    }


    return (
        <>
            <GlobalStyle />
            <AppWrapper>
            <h1>My ToDo List</h1>
            <Form addTodoItem={addTodoItem}/>
            <List todoItems={todoItems} deleteTodoItem={deleteTodoItem}/>
            </AppWrapper>
            </>
    )
}

export default App
