import {getDocs, collection} from 'firebase/firestore'
import {doc, addDoc, setDoc, Timestamp} from 'firebase/firestore'
import {db} from '../../fire'


const documentName = 'mydata'

// 全ドキュメントをドキュメント登録順に取得
export async function getAllMyData(){

  try {

    const querySnapshot = await getDocs(collection(db, documentName));

    return (querySnapshot.size == 0 ? ['err', '登録されたデータが読み込めませんでした。'] : querySnapshot)

  } catch (error) {
    
    console.log(`Error: ${JSON.stringify(error)}`)

  }
}

// 新規タスクの追加
export async function addTask(taskText, deadline){

  console.log('addTask出発 taskText：'+ taskText + ' deadline：' + deadline)
  console.log('new Data：' + new Date(deadline) + ' TimeStamp：' + Timestamp.fromDate(new Date(deadline)))

  try {
    const docData = {
      task: taskText,
      deadline: Timestamp.fromDate(new Date(deadline)),
      deleteflg: false,
      completeflg: false
    }
  
    // ドキュメントの件数の取得
    const snapshot = await getDocs(collection(db, documentName));

    const docRef = await setDoc(doc(db, documentName, (snapshot.size + 1).toString()), docData);

    return docRef
    
  } catch (error) {
    console.log(`Error: ${JSON.stringify(error)}`)
  }
}
