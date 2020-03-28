import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = (props) => {
const ItemStyle = styled.li`
 background-color: white;
 box-shadow: 2px 2px 4px inset;
 border-radius: 10px;
 width: 500px;
 height: 45px;
 margin: 0 auto;
 margin-bottom: 15px;
 padding: 5px;
 align-items: center;
 justify-content: flex-end;
 display: flex;
p {
    width: 400px;
    text-align: left;
}
`
    const [isDone, setIsDone] = React.useState(false)

    // 三項演算子　または条件演算子
    const buttonText = isDone ? '未完了' : '完了'

    // if (isDone) {
    //     buttonText ='未完了'
    // }　else {
    //     buttonText ='完了'
    // }

    const toggleIsDone = () => setIsDone(!isDone)

    return (
        <ItemStyle>
            <p>{props.todoItem["content"]}</p>
            <Button variant="contained" onClick ={toggleIsDone} color={isDone ? "secondary" : "default"}>{buttonText}</Button>
            <DeleteIcon onClick={() => props.deleteTodoItem(props.todoItem['id'])}></DeleteIcon>
            {/* <Button variant="contained" color="secondary"　onClick={() => props.deleteTodoItem(props.todoItem['id'])}>削除</Button> */}
        </ItemStyle>
    )
}

export default Item