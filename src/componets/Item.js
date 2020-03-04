import React from 'react'

const Item = (props) => {
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
        <li>
            <p>{props.todoItem["content"]}</p>
            <button type="button" onClick ={toggleIsDone}>{buttonText}</button>
            <button type="button">削除</button>
        </li>
    )
}

export default Item