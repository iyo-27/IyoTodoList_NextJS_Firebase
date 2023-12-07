'use client';
import React from 'react'

function TaskDetail(props){
    
    // チェックボックスのmargin
    const Checkboxmargin = {
        margin: '16px'
    }
    
    // 期限の変換
    let d = new Date(props.deadline * 1000)
    console.log('TaskDetailまで来てる key：' + props.key + ', message：' + props.message + ', deadline：' + d.getDay())

    return(
        <label className="listItem">
            <input type="checkbox" className="nes-checkbox" style={Checkboxmargin} id={props.key}/>
            <span>{props.message}</span>
            <span>&nbsp;</span>
            <span><label className="nes-text is-primary">期限</label>：{(d.getMonth() + 1) + '/' + d.getDate()}</span>
        </label>
    )
}

export default TaskDetail