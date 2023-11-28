//import {useState, useEffect} from 'react'
import { doc, getDocs, collection, Timestamp} from "firebase/firestore"
import { db} from '../../fire'

export default async function getAllMyData(){

  const querySnapshot = await getDocs(collection(db, 'mydata'));

  let result = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log('getAllMyData結果：' + doc.id, " => ", doc.data());
    result.push({key:doc.id.toString(), data:doc.data()})
  })

  console.log('getAllMyDataのresulte：' + result[0]['data'].task)

  //const [mydata, setAllMyData] = useState(result)
  
  //return [[mydata, setAllMyData]]

  return result

}
