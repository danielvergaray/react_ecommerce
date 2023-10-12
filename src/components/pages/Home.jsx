import React from 'react'
import SliderHeroListContainer from '../silderHero/SliderHeroListContainer'
import { useParams } from 'react-router'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const Home = () => {
  const params = useParams()
  
 const data= [
  {
    name:"Hogwarts Legacy",
    price: 40,
    imageSmall: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697055811/gameStation-ecommerce/ItemListContainer/dvshgq52bdszhfg72lmx.jpg",
    imageFull: "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1697055664/gameStation-ecommerce/ItemDetailContainer/rwbg1hd8vjyhu4mafagt.png",
    category:"Fantasía",
    device: "PS4"

  },
  {
    name:"",
    price:"",
    image: "",
    category:""

  }
]

/* const addData=()=>{
  const db = getFirestore();

  const collectionRef= collection(db, "productos")

  for (let item of data){
    addDoc(collectionRef, item)
      .then(res=> console.log(res.id))
      .catch(err => console.log(err))
  }
}  */


  return (
    <div>
      <SliderHeroListContainer/>
    </div>
  )
}

export default Home