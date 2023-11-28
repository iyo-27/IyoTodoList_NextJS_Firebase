import React from 'react'

type Props = {
    key: number
    message: string
    deadLine: string
  }

function TaskDetail({ key, message, deadLine}: Props){

    // チェックボックスのmargin
    const Checkboxmargin = {
        margin: '16px'
    }

    return(
        <label className="listItem">
            <input type="checkbox" className="nes-checkbox" style={Checkboxmargin} id={key}/>
            <span>{message}</span>
            <span>&nbsp;</span>
            <span><label className="nes-text is-primary">期限</label>：{deadLine}</span>
        </label>
    )
}

export default TaskDetail