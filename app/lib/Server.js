import {getDocs, collection} from "firebase/firestore"
import {db} from '../../fire'

export default async function getAllMyData(){

  const querySnapshot = await getDocs(collection(db, 'mydata'));

  if (querySnapshot.size == 0) {

    return ['err', '登録されたデータが読み込めませんでした。']
  
  }else{

    return querySnapshot 
  
   }
}
