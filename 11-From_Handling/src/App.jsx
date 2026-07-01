import React from 'react'

const App = () => {
  const changeSubmit=(e)=>
  {
    e.preventDefault();
    console.log("Data Submit");
  }
  return (
    <div>
      <form onSubmit={(e)=>
        {
          changeSubmit(e)
        }
      }>
        <input type="text" name="" id="" placeholder='Enter a Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
