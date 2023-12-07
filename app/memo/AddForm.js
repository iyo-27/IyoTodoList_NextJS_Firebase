import React, {} from 'react';

function AddForm(props){

    let buttonName = 'ついか'

    console.log('AddFormまで来てる')

    return <form>
        <input type='text' id='addMessage' className='nes-input'/>
        <button type="submit" className="nes-btn is-primary">{buttonName}</button>
    </form>
}

export default AddForm