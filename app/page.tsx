import Head from 'next/head'
import { text } from 'stream/consumers'

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
        
        
        {/*追加されたタスク表示用インプット Memoコンポーネントを作ろう！！*/}
        <h2 className="subTitle">{subTitle}</h2>
        <div className='nes-container '>
          {/*  ここにTODOリストを表示 */}
          {/*  左側にチェックボックス、右側にタスク名表示かなー！ */}
          <label>今は何もなしー</label>
        </div>

        
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
