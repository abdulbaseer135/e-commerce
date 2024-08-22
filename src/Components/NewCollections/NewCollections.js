import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
    <div className="collections">
        {new_collection.map((item,index)=>{
               return <Item key={index} id={item.id} title={item.title} image={item.image} price={item.price} />
            })}
    </div>      
    </div>
  )
}

export default NewCollections
