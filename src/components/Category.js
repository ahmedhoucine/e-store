import React from 'react'

const Category = ({id,title,oncategoryclick}) => {
  return (
    <div key={id} onClick={() => oncategoryclick(id)}>{title}</div>
  )
}

export default Category
