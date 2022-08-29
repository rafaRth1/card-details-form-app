import { useState } from 'react';
import FrontCard from '../FrontCard/FrontCard';
import BackCard from '../BackCard/BackCard';
import InputForm from '../InputForm/InputForm';
import useRezise from '../../hooks/useRezise';
import bgLeft from '../../assets/bg-main-desktop.png';
import bgLeftMobile from '../../assets/bg-main-mobile.png';
import './CardLayout.css';
import CheckComplete from '../CheckComplete/CheckComplete';

interface Props {
   checkValidateCard: boolean;
   setCheckValidateCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardLayout = ({ checkValidateCard, setCheckValidateCard }: Props) => {
   const [cardName, setCardName] = useState({ value: '', hassError: null });
   const [cardNumber, setCardNumber] = useState({ value: '', hassError: null });
   const [month, setMonth] = useState({ value: '', hassError: null });
   const [year, setYear] = useState({ value: '', hassError: null });
   const [cvc, setCvc] = useState({ value: '', hassError: null });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (
         Number(month.value) > 0 &&
         Number(month.value) <= 12 &&
         Number(year.value) >= 22 &&
         Number(year.value) <= 28
      ) {
         setCheckValidateCard(true);
      } else {
         setCheckValidateCard(false);
      }
   };

   const { width } = useRezise();

   return (
      <div className='card-layout h-full flex items-center flex-col bg-white lg:flex-row lg:w-full '>
         <div className='content-left w-full lg:w-1/2 relative'>
            {width >= 1024 ? (
               <img src={bgLeft} alt='bg-left' className='bg-left' />
            ) : (
               <img src={bgLeftMobile} alt='bg-left' className='bg-left-movile' />
            )}
            <FrontCard cardName={cardName.value} cardNumber={cardNumber.value} month={month.value} year={year.value} />
            <BackCard cvc={cvc.value} />
         </div>

         {checkValidateCard ? (
            <CheckComplete setCheckValidateCard={setCheckValidateCard} />
         ) : (
            <div className='content-right flex flex-1 justify-center items-center mt-16 lg:w-2/3'>
               <div className='form-card'>
                  <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
                     <InputForm
                        value={cardName.value}
                        state={cardName}
                        setstate={setCardName}
                        name={'cardNameValue'}
                        label={'CardHolder Name'}
                        type={'text'}
                        className={'border-2 border-slate-200 rounded-md bg-white p-2 w-full my-2'}
                        placeholder='e.g. Rafael Alvarez'
                        regularphrase={/\d/}
                     />

                     <InputForm
                        value={cardNumber.value.slice(0, 16)}
                        state={cardNumber}
                        setstate={setCardNumber}
                        name={'cardNumber'}
                        label={'Card Number'}
                        type={'text'}
                        className='border-2 border-slate-200 rounded-md bg-white p-2 w-full my-2'
                        placeholder='e.g. 0000 0000 0000 0000'
                        min={0}
                        regularphrase={/\d/}
                     />

                     <div className='flex items-center'>
                        <InputForm
                           value={month.value.slice(0, 2)}
                           state={month}
                           setstate={setMonth}
                           min={0}
                           name={'month'}
                           label={'Month'}
                           type={'number'}
                           className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 my-2'
                           placeholder='MM'
                           regularphrase={/\d/}
                        />
                        <InputForm
                           value={year.value.slice(0, 2)}
                           state={year}
                           setstate={setYear}
                           name={'year'}
                           type={'number'}
                           label={'Year'}
                           min={0}
                           className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 m-2'
                           placeholder='YY'
                           regularphrase={/\d/}
                        />
                        <InputForm
                           value={cvc.value.slice(0, 3)}
                           state={cvc}
                           setstate={setCvc}
                           name='cvc'
                           label={'Cvc'}
                           type={'text'}
                           min={0}
                           className='border-2 border-slate-200 rounded-md bg-white p-2 w-40 my-2'
                           placeholder='000'
                           regularphrase={/\d/}
                        />
                     </div>

                     <button className='w-full bg-purple-900 text-white p-3 rounded-lg my-2'>Confirm</button>
                  </form>
               </div>
            </div>
         )}
      </div>
   );
};

export default CardLayout;
