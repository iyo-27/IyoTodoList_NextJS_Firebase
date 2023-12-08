import {getDocs, collection} from 'firebase/firestore'
import {doc, addDoc, setDoc, Timestamp} from 'firebase/firestore'
import {db} from '../../fire'


const documentName = 'mydata'

export async function getAllMyData(){

  const querySnapshot = await getDocs(collection(db, documentName));

  if (querySnapshot.size == 0) {

    return ['err', '登録されたデータが読み込めませんでした。']
  
  }else{

    return querySnapshot 
  
   }
}

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
