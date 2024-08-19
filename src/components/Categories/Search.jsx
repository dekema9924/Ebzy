import React from 'react'

function Search({isclicked}) {
  return (
    <form>
        <input style={{width: isclicked ? "200px" : "10px"}} className='border-2 rounded-2x pl-5 rounded-2xl outline-none text-gray-500 transition-all ' type="text" name="" id="" placeholder='Search...' />

    </form>
  )
}

export default Search