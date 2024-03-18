import React, { useState } from 'react'

function CreatePersonHeader() {
  const [personName , setPersonName]= useState("")
  return (
    <div className='person__header'>
      <input type="text" className='person__name'
       onChange={(e) => setPersonName(e.target.value)}
      />
      <div className="person__header__box-info">
          
      </div>
    </div>

  )
}

export default CreatePersonHeader