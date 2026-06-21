// import React from 'react'

const App = () => {
  return (
    <div onWheel={()=>
    {
      console.log("Page Scrolling");
    }
    }>
      <div className="page1">page1</div>
      <div className="page2">page1</div>
      <div className="page3">page1</div>
      
    </div>
  )
}

export default App
