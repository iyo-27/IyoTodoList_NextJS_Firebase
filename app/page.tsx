import Head from 'next/head'
import { text } from 'stream/consumers'
import Memo from './memo/Memo'

export default function Home() {
  let title = 'Iyoの勉強ページ'
  let subTitle = 'TODOリスト'

  return ( 
    <div>
      <h2 className='nes-container is-dark with-title bodyTitle'>{title}</h2>
      <main>
        {/* アイコン並べてかわいくした */}
        <section className="icon-list">
          <i className="nes-icon is-large star"></i>
          <i className="nes-kirby2"></i>
          <i className="nes-icon is-large star"></i>
          <i className="nes-kirby"></i>
          <i className="nes-icon is-large star"></i>
          <i className="nes-kirby"></i>
          <i className="nes-icon is-large star"></i>
          <i className="nes-kirby"></i>
          <i className="nes-icon is-large star"></i> 
          <i className="nes-kirby2"></i> 
        </section>
        {/*このインプットがタスク追加用インプット */}
        <form>
          <input type='text' id='addMessage' className='nes-input'/>
          <button type="submit" className="nes-btn is-primary">ついか</button>
        </form>
        
        <h2 className="subTitle">{subTitle}</h2>
        <Memo />
        {/* アイコン並べてかわいくした */}
        <section className="icon-list">
          <i>△△△</i>
          <i className="nes-ash"></i>
          <i className="nes-pokeball"></i>
          <i className="nes-bulbasaur"></i>
          <i className="nes-charmander"></i>
          <i className="nes-squirtle"></i>
          <i className="nes-pokeball"></i>
        </section>
      </main>
    </div>
  )
}
