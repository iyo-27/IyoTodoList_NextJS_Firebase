'use client';
import React from 'react'

function TaskDetail(props){
    
    // チェックボックスのmargin
    const Checkboxmargin = {
        margin: '16px'
    }

    // 期限の変換
    let d = new Date(props.deadline * 1000)
    console.log('TaskDetailまで来てる id：' + props.id + ', message：' + props.message + ', deadline：' + d.getDay())

    // 期限を過ぎている場合、赤色表示
    let deadLineStyle = 'nes-text '
    if (d.getTime() < (new Date()).getTime()) {
        deadLineStyle += 'is-primary'
    } else {
        deadLineStyle += 'is-error'
    }

    return(
        <label className='listItem'>
            <input type='checkbox' className='nes-checkbox' style={Checkboxmargin} id={props.id}/>
            <span>{props.message}</span>
            <span>&nbsp;</span>
            <span><label className={deadLineStyle}>期限</label>：{(d.getMonth() + 1) + '/' + d.getDate()}</span>
        </label>
    )
}

export default TaskDetail