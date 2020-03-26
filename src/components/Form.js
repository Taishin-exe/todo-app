import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




/* .input {
    position: relative;
    padding: 5px 0 2px 0;
    border: 0;
} */


const Form = (props) => {
    const FormStyle = styled.form`
    /* background-color: gray; */
    height: 60px;
    `
    console.log(props.addTodoItem)

    const handleClick = (e) => {
        e.preventDefault()
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
            <TextField id="standard-basic" label="タイトル ※必須" />
            {/* <TextField type="text" class="input"/> */}
            {/* <button className="btn" onClick={(e) => handleClick(e)}>追加</button> */}
            <Button type="submit" variant="contained" onClick={(e) => handleClick(e)}color="primary">追加</Button>
        </FormStyle>
    )
}

export default Form