import React from 'react'
import RIntro from './RIntro'
import LIntro from './LIntro'



export const Intro = () => {
  
  return (
    <section
        id='intro'
        className=' px-10  w-full  flex felx-col h-auto font-titleFont ' 

        >
        <LIntro/>
        <RIntro/>
    </section>
  )
}
