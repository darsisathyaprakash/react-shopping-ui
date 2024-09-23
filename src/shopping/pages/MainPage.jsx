import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/banner'
import Collection from '../components/Collection'
import Fotter from '../components/Fotter'
import { Gents,Ladies } from '../components/data'
import Lady from '../components/Lady'

const MainPage = () => {
     const[gentsFashion,setGentsFashion]=useState(Gents)
     console.log(Gents)
     const[LadiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collection gentsFashion={gentsFashion}/>
        <Lady LadiesFashion={LadiesFashion}/>
        <Fotter/>
    </div>
  )
}

export default MainPage
