import Head from 'next/head'
import { text } from 'stream/consumers'
import Memo from './memo/Memo'
import AddForm from './memo/AddForm'

export default function Home() {
  let title = 'Iyoのかわいいタスク管理'
  let subTitle = 'TODOリスト'

  // TODO:後でモードを追加して、ボタンの名前を変える
  console.log('Page通過')

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
          <i className="nes-icon is-large star"></i>
        </section>
        {/*このインプットがタスク追加用インプット */}
        <AddForm />
        
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
