import { useState } from 'react';
import { FormCard } from './FormCard';
import FrontCard from './FrontCard/FrontCard';
import bgLeft from '../assets/bg-main-desktop.png';
import bgLeftMobile from '../assets/bg-main-mobile.png';
import BackCard from './BackCard/BackCard';
import useRezise from '../hooks/useRezise';

const CardLayout = () => {
   const [formDate, setFormDate] = useState({ cardName: '', cardNumber: '', month: '', year: '', cvc: '' });

   const OnchageInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;
      setFormDate({
         ...formDate,
         [name]: value,
      });
   };

   const { width } = useRezise();

   return (
      <div className='card-layout h-full flex items-center flex-col lg:flex-row bg-white'>
         <div className='content-left w-full lg:w-1/3 relative'>
            {width >= 1024 ? (
               <img src={bgLeft} alt='bg-left' className='bg-left' />
            ) : (
               <img src={bgLeftMobile} alt='bg-left' className='bg-left-movile' />
            )}
            <FrontCard {...formDate} />
            <BackCard {...formDate} />
         </div>
         <div className='content-right lg:w-2/3 flex flex-1 justify-center items-center'>
            <FormCard {...formDate} OnchageInput={OnchageInput} />
         </div>
      </div>
   );
};

export default CardLayout;
