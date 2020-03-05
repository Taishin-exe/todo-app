import React from 'react'
import styled from 'styled-components'


const FormStyle = styled.form`
background-color: gray;
height: 24px;
.btn {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding:  4px 0;
  margin-left: 3px;
  text-decoration: none;
  color: #00BCD4;
  background: #fff;
  border-radius: 0 15px 15px 0;
  transition: .4s;
}

.btn:active {
  background: gray;
}

.input {
    position: relative;
    padding: 5px 0 2px 0;
    border: 0;
}
`


const Form = (props) => {
    console.log(props.addTodoItem)

    const handleClick = () => {
        const input =document.getElementsByTagName('input')[0]
        // console.log(input.value)

        // 0文字での入力はリターンを使って処理を終了させる
        if (input.value.length === 0) {
            return;
        }

        props.addTodoItem(input.value)

        input.value = ""


    }
    return (
        <FormStyle>
            <input type="text" class="input"/>
            <button className="btn" onClick={handleClick}>追加</button>
        </FormStyle>
    )
}

export default Form