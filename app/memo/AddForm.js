import React, {} from 'react';

// 新規タスクの登録、追加フォームの描画する関数コンポーネント
function AddForm(props){

    let buttonName = 'ついか'

    console.log('AddFormまで来てる')

    return <form>
        <input type='text' id='addMessage' className='nes-input'/>
        <button type="submit" className="nes-btn is-primary">{buttonName}</button>
    </form>
}

export default AddForm