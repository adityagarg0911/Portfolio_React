import React from 'react';
import twitter from '../../assets/twitter.png';
import leetcode from '../../assets/leetcode.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import codechef from '../../assets/codechef.png';
import codeforces from '../../assets/codeforces.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='
    bg-black text-white
    pt-[20px] pb-[20px] md:pt-[40px] md:pb-[40px]
    '>
      <div className='
        flex flex-col justify-center items-center
        gap-[25px] md:gap-[40px]
        mb-[35px] md:mb-[70px]
      '>
        <div className='
          font-bold
          text-[2.8rem] sm:text-[4rem]
        '>Get In Touch</div>
        <div className="flex gap-[20px] sm:gap-[30px] md:gap-[60px] lg:gap-[100px]">
          <Link to='https://www.linkedin.com/in/aditya-garg-07543122b/' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={linkedin} alt="" /> </Link>
          <Link to='https://leetcode.com/adityagarg0911/' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={leetcode} alt="" /> </Link>
          <Link to='https://codeforces.com/profile/adityagarg0911' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={codeforces} alt="" /> </Link>
          <Link to='https://github.com/adityagarg0911/' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={github} alt="" /> </Link>
          <Link to='https://www.codechef.com/users/adityagarg0911' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={codechef} alt="" /> </Link>
          {/* <Link to='' target='_blank'> <img className='bg-white rounded-[10px] h-[35px] sm:h-[45px] md:h-[55] md:w-[55px] ' src={twitter} alt="" /> </Link> */}
        </div>      
      </div>

      <div className='
      flex flex-col justify-center items-center
      text-[1.5rem] sm:text-[2.1rem]
      '>
        <div className='text-[#f1f1af]'>
          - Made By Aditya Garg -
        </div>
        <div className=' text-[#b91d73]'>
          <i>Adios, Amigo</i>
        </div>
      </div>
    </div>
  )
}

export default Footer