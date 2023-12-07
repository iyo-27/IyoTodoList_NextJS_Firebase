import {getDocs, collection} from 'firebase/firestore'
import {doc, addDoc, setDoc} from 'firebase/firestore'
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

  try {
    const docData = {
      task: taskText,
      //deadline: Timestamp.fromDate(deadline),
      deadline: null,
      deleteflg: false,
      completeflg: false
    }
  
    // ドキュメントの件数の取得
    const snapshot = await getDocs(collection(db, documentName));

    await setDoc(doc(db, documentName, (snapshot.size + 1).toString()), docData);
    //const docRef = await addDoc(collection(db, documentName), docData);
    console.log("Document written with ID: ", docRef.id);

    return docRef
    
  } catch (error) {
    console.log(`Error: ${JSON.stringify(error)}`)
  }
}
