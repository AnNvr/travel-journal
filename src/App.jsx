import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './assets/data'

const cards = data.map((item) => {
  return <Card 
          key={item.id}
          item={item}
          />
})

function App() {
  return (
    <div>
        <Navbar />
        {cards}
    </div>
  )
}

export default App
