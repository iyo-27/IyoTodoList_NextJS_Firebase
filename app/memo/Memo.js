'use client';
import React, { useState, useEffect } from 'react';
import TaskDetail from "./TaskDetail";
import getAllMyData from "../lib/Server";

// 登録されたTODOを表示する関数コンポーネント
export default function Memo(){
    console.log('Memoまで来てる')
    const [allmydata, setAllMyData] = useState('登録されたデータが読み込めませんでした。')

    useEffect(() => {
        //setAllMyData(getAllMyData())
        
        console.log('useEffectが走るよ' + allmydata)
    })

    // Firebaseから未完了データ取得
    getAllMyData()
    console.log('getAllMyData走るよ' + allmydata)

    // 確認用データ
    //let message = 'テストタスクだよー！！'
    let key = 1
    let message = 'test'

    // ここの日付は登録されているものを表示するだけにする
    let d = new Date()
    let deadLine = (d.getMonth() + 1) + '/' + d.getDate(); 

    // おそらく検索モード、追加モードでスイッチするようになるため変数にぶち込んでる
    let data = (
        <TaskDetail key={key} message={message} deadLine={deadLine}/>
    )

    return (
        <div className='nes-container '>
          {data}
        </div>
    )

}