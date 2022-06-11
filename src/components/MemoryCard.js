import React from 'react'

export default function MemoryCard(props) {
  return (
    <div className="card" onClick={props.click}style={{width : "10rem", marginBottom : "3rem", marginTop : "3rem"}} data-index={props.index}>
        <img src={props.animal.image} className="card-img-top" alt="..." data-index={props.index}/>
        <div class="card-body" data-index={props.index}>
          <h5 class="card-title" data-index={props.index} style={{color : "black"}}>{props.animal.name}</h5>
        </div>

    </div>
  )
}
