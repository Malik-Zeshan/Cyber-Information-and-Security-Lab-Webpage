import React from 'react'

const Newsletter = () => {
  return (
    <section className='px-10 my-20 w-full flex flex-col gradient-background '>
      <div className='w-full h-full flex items-center '>
        <div className=' h-80 justify-center    text-white w-full font-bodyFont flex  flex-col '>
          <h3 className='text-6xl  ml-10 text-white font-bold'>Get our First newsletter <br />
            December 2022</h3>
        
        </div>
     
        <div className=' w-[300px] h-full flex items-center font-bodyFont text-center bg-white fcolor font-semibold rounded-lg mt-4 py-2 justify-center  mr-14 text-black  text-2xl'>
        <a className='hover:font-bold duration-100 hover:border-b-2 border-solid border-color ' href='https://drive.google.com/file/d/1enxZAER9q20lOz_MdzUuftOwLtwSIrgL/view?usp=drive_link' target="_blank" rel="noopener noreferrer" download='newsletter.pdf'> Download</a>
        </div>
    
       </div>
    </section>
  )
}

export default Newsletter