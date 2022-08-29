import { useState } from 'react';
import InputForm from './InputForm/InputForm';

export const FormCard = () => {
   const [cardName, setCardName] = useState({ value: '', hassError: null });
   const [cardNumber, setCardNumber] = useState({ value: '', hassError: null });
   const [monthValue, setMonthValue] = useState({ value: '', hassError: null });
   const [yearValue, setYearValue] = useState({ value: '', hassError: null });
   const [cvcValue, setCvcValue] = useState({ value: '', hassError: null });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('Submit');
   };

   return (
      <div className='form-card'>
         <form className='flex flex-col' onSubmit={(e) => handleSubmit(e)}>
            <InputForm
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
               state={cardNumber}
               setstate={setCardNumber}
               name={'cardNumber'}
               label={'Card Number'}
               type={'text'}
               regularphrase={/\d/}
               className='border-2 border-slate-200 rounded-md bg-white p-2 w-full my-2'
               placeholder='e.g. 0000 0000 0000 0000'
               min={0}
            />

            <div className='flex items-center'>
               <InputForm
                  state={monthValue}
                  setstate={setMonthValue}
                  name={'month'}
                  label={'Month'}
                  type={'number'}
                  regularphrase={/\d/}
                  className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 my-2'
                  placeholder='MM'
                  min={0}
               />
               <InputForm
                  state={yearValue}
                  setstate={setYearValue}
                  name={'year'}
                  type={'number'}
                  label={'Year'}
                  min={0}
                  regularphrase={/\d/}
                  className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 m-2'
                  placeholder='YY'
               />
               <InputForm
                  state={cvcValue}
                  setstate={setCvcValue}
                  name='cvc'
                  label={'Cvc'}
                  type={'number'}
                  min={0}
                  regularphrase={/\d/}
                  className='border-2 border-slate-200 rounded-md bg-white p-2 w-40 my-2'
                  placeholder='000'
               />
            </div>

            <button className='w-full bg-purple-900 text-white p-3 rounded-lg my-2'>Confirm</button>
         </form>
      </div>
   );
};
