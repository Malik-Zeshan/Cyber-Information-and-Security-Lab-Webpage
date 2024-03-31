import React from 'react'
import Rmission from './Rmission'
import Lmission from './Lmission'


const Mission = () => {
  return (
    <section
        id='mission'
        className=' px-20 w-full h-50px flex felx-col h-auto font-titleFont '
        >
        <Lmission/>
        <Rmission/>
    </section>
  )
}

export default Mission