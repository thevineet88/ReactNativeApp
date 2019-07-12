import React from 'react'
import { Component,TextInput } from 'react-native' 

const Todo = (props) => {
    return (
        <TextInput >{props.value} </TextInput>
    )
}

export default Todo