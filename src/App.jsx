import React from 'react'
import './App.css'
import Promises from './Promises/Promises'
import ItemListContainer from './ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <ItemListContainer  greeting={"Rick and Morty"} greeting2={"Bienvenid@s"}/>
      <Promises />
    </div>
  )
}

export default App