import React from "react";
import TaskDetail from "./TaskDetail";

// 登録されたTODOを表示する関数コンポーネント
export default function Memo(){
    // 確認用データ
    let key = 1
    let message = 'テストタスクだよー！！'

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