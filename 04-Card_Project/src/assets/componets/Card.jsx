// import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  console.log(props.company)
  return (
    <div>
      <div className="parent">
        <div className="card">
<div className="top">
  <div>
    <img src="https://tse4.mm.bing.net/th/id/OIP.6BOvnuJ5HvweVJzuIi-H7AHaHa?pid=Api&P=0&h=180" alt="" />
    

  </div>
  <div>

    <button >Save <Bookmark/></button>
  </div>
</div>
          <div className="center">
<div>
  <h3>{props.company}<span>{props.datePosted}</span></h3>
  <h3>{props.post}</h3>
</div>
<div>
  <h4>Full Time</h4>
  <h4>Part time</h4>
</div>
          </div>
          <div className="bottom">
<div>

  <h4>{props.price}</h4>
  <p>{props.location}</p>
</div>
<div>

<button>Apply</button>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card
