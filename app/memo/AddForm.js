'use client';
import React, { useState } from 'react';
import {addTask} from "../lib/Server";


// 新規タスクの登録、追加フォームの描画する関数コンポーネント
function AddForm(props){

    const [task, setTask] = useState('')
    let buttonName = 'ついか'

    console.log('AddFormまで来てる')

    const doTextChange = (e) => {
        setTask(e.target.value)
        console.log('setTask完了：' + task)
    }

    // TODO:時間をUIから登録できるようにする
    const doAction = (e) => {
        console.log('これからaddTask')
        const data = addTask(task, new Date());
        console.log('addTask完了：' + data)
    }

    return <form>
        <input type='text' id='addTask' className='nes-input' onChange={doTextChange} value={task} required/>
        <button type="submit" className="nes-btn is-primary" value='Add' onClick={doAction}>{buttonName}</button>
    </form>
}

export default AddForm