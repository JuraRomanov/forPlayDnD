import React from 'react'

function SelectBoxItem({itemValue = 'select box item' , handelClick}) {
  return (
    <div className="select-box__item" onClick={() => handelClick(itemValue)}>
        <span className='select-box__item-value'>
            {itemValue}
        </span>
    </div>
  
  )
}

export default SelectBoxItem