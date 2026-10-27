import React from 'react'

const Searchbar = () => {
  return (
    <form id='Searchbar' onSubmit={(e) => e.preventDefault()}>
      <input type='text' placeholder='Search'/>
    </form>
  )
}

export default Searchbar
