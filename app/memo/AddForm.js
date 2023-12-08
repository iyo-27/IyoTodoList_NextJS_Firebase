'use client';
import React, { useState } from 'react';
import {addTask} from "../lib/Server";


// 新規タスクの登録、追加フォームの描画する関数コンポーネント
function AddForm(props){
    const formLabel = {
        textAlign: 'left',
        fontSize: '18px',
        marginLeft: '1rem'
    }

    const [task, setTask] = useState('')
    const [deadline, setDeadLine] = useState('')
    const [deadlinetime, setDeadLineTime] = useState('')
    let buttonName = 'ついか'

    console.log('AddFormまで来てる')

    const doTextChange = (e) => {
        setTask(e.target.value)
        console.log('setTask完了：' + task)
    }

    const doDeadLineChange = (e) => {
        setDeadLine(e.target.value)
        console.log('setDeadLine完了：' + deadline)
    }

    const doDeadLineTimeChange = (e) => {
        setDeadLineTime(e.target.value)
        console.log('setDeadLineTime完了：' + deadlinetime)
    }
    // TODO:時間をUIから登録できるようにする
    const doAction = (e) => {
        console.log('これからaddTask')
        const data = addTask(task, deadline + ' ' + deadlinetime);
    }

    return <form>
        <div class='nes-field is-inline'>
            <label for="name_field" style={formLabel}>タスク</label>
            <input type='text' id='addTask' className='nes-input' onChange={doTextChange} value={task} required/>
        </div>
        <div class='nes-field is-inline'>
            <label for="name_field" style={formLabel}>期限</label>
            <input type='date' id='addDeadLine' className='nes-input' onChange={doDeadLineChange} value={deadline} required />
            <label for="name_field" style={formLabel}>時間</label>
            <input type='time' id='addDeadLine' className='nes-input' onChange={doDeadLineTimeChange} value={deadlinetime} required />
            <button type="submit" className="nes-btn is-primary" align='right' value='Add' onClick={doAction}>{buttonName}</button>
        </div>
        
    </form>
}

export default AddForm