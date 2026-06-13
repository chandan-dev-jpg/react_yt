// import React from 'react'

const Card = (promps) => {
    console.log(promps.age)
  return (
    <div>
      <div className="card">
      <img src="https://images.unsplash.com/photo-1781276798742-0ed9a0f3f61a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{promps.user}</h1>
      <p>i am a fullstack developer</p>
      <button>Sumbith</button>
      
    </div>
    </div>
  )
}

export default Card
