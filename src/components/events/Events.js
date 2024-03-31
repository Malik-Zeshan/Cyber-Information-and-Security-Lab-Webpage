import React from 'react'
import Levent from './Levent'
import Revent from './Revent'

const Events = () => {
  return (
    <section
    id='events'
        className=' px-20 w-full h-50px flex felx-col h-auto font-titleFont '
        >
        <Levent/>
        <Revent/>
    </section   >
  )
}

export default Events