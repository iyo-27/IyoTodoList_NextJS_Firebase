'use client';
import React, { useState, useEffect } from 'react';
import TaskDetail from "./TaskDetail.js";
import getAllMyData from "../lib/Server";

// 登録されたTODOを表示する関数コンポーネント
export default function Memo(){
    console.log('Memoまで来てる')
    
    const idPrefix = 'row_' // タスク詳細のidプレフィックス
    const [allmydata, setAllMyData] = useState([])

    // Firebaseから未完了データ取得
    useEffect(() => {
        (async function () {
            const data = await getAllMyData();
            setAllMyData(data)     
         })();
    }, [])

    console.log(allmydata)

    // 取得したデータから登録済みのタスク一覧を生成
    // おそらく検索モード、追加モードでスイッチするようにするかもしれないから変数にぶち込んでる
    let taskDetail = []
    if(allmydata[0] != 'err'){
        allmydata.forEach((doc) => {
            console.log('getAllMyData結果：' + doc.id + ' => ' + doc.get('task'));
            taskDetail.push(<TaskDetail id={idPrefix + doc.id} message={doc.get('task')} deadline={doc.get('deadline')}/>)
        })
    }

    return (
        <div className='nes-container '>
          {taskDetail}
        </div>
    )

}