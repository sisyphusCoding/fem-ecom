import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import{Squeeze as Hamburger, Squeeze} from 'hamburger-react'

import{motion,AnimatePresence, Variants} from 'framer-motion'
import {useMedia} from 'react-use'
import { fail } from "assert";
const listItem:string[] = ['collections','men','women','about','contact']

const navBar:Variants = {
   initial:{y:'-100%'},
  animate:{y:'0%',
    transition:{
      damping:300,
      staggerChildren:.25 
    }
  },
  exit:{y:'-100%',transition:{
    when:'afterChildren', 
    damping:300,
  }}
}


const itemLetter:Variants = {
  initial:{y:'-300%'},
  animate:{y:'0%',transition:{damping:300}},
  exit:{y:'-300%'
,transition:{damping:300}
  }
}



const Navbar:FC = () => {
  
  const [isOpen,setIsOpen] = useState<boolean>(false)

  const isMoreTabe = useMedia('(min-width:768px)')
  
  useEffect(()=>{
    //Hide and Show Menu
    if(isMoreTabe){setIsOpen(true)}
    else if(!isMoreTabe){setIsOpen(false)}
  },[isMoreTabe])

  return(

    <section
     className="
      shadow-xl
      min-w-full
      p-[3vmin]
      lg:p-0 lg:px-16
      flex items-center justify-between
      relative
       "
     >
  
<div
  className="flex items-center justify-center"     
  >

    {!isMoreTabe?
     <div 
        className="z-20 hover:opacity-70"
         >
        <Squeeze toggled={isOpen} toggle={setIsOpen} />
        </div>     

    :null}

  <div 
    className="
        gap-10
        flex items-center justify-center">
        <div className="
          ml-1.5
          min-h-full
          md:min-w-[10vmin]
          min-w-[20vmin] 
          cursor-pointer
          hover:opacity-70
          transition-all ease duration-300
          -mt-2
          ">
          <Image 
            alt="logo-image"
            layout="responsive"
            objectFit="contain"
            height={30} width={100}
            src={'/images/logo.svg'} />
        </div>

<AnimatePresence>
    {isOpen?
    <motion.nav
        variants={navBar}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
       className="
        backdrop:bg-black
        z-10
        bg-zinc-100 bg-opacity-30
        backdrop-blur-md backdrop-filter
        gap-5
        shadow-[10px_0_20px_rgba(0,0,0,.4)]
        flex md:items-center md:justify-center
        py-[20vmin]    md:p-0 
        px-[10vmin]      
        md:flex-row flex-col
        md:relative absolute top-0 left-0
        min-h-screen w-[80vmin]
        md:min-h-fit md:min-w-fit
         md:bg-transparent
              
        "
       >

    {listItem.map((item,index)=>(
      <div
                 
     key={index}
      className='overflow-hidden'
      >
        <motion.h3
        variants={itemLetter}
           className="

            transition-all ease duration-300
            md:w-fit
            w-2/4
            md:rounded-none 
            md:text-base text-xs      
            px-6 md:px-0
            md:py-10
            border-b-4 border-transparent    
            cursor-pointer     
            hover:border-b-orange-500      
            hover:text-zinc-400
            capitalize"
           >
          {item}
        </motion.h3>
        </div>
    ))}


    </motion.nav>
      :null} 
      </AnimatePresence>
      </div>

      </div>

    <div 
    className="
        gap-5
        flex justify-between items-center"
       >

      <div 
      className="
          md:min-w-[2.5vmin]
          min-w-[4vmin]"
         >
      
          <Image 
            alt="logo-image"
            layout="responsive"
            objectFit="contain"
            height={35} width={35}
            src={'/images/icon-cart.svg'} />
        </div>

      <div 
      className="
          z-0
          md:min-w-[5vmin]
          min-w-[10vmin]"
         > 
          <Image 
            alt="logo-image"
            layout="responsive"
            objectFit="contain"
            height={35} width={35}
            src={'/images/image-avatar.png'} />
        </div>

      </div>

    </section>
  )
}


export default Navbar
