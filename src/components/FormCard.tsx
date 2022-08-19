export const FormCard = ({ cardName, cardNumber, OnchageInput, month, year, cvc }: any) => {
   return (
      <div className='form-card'>
         <form className='flex flex-col'>
            <div>
               <label htmlFor='name' className='block uppercase'>
                  CardHolder Name
               </label>
               <input
                  type='text'
                  id='name'
                  name='cardName'
                  className='border-2 border-slate-200 rounded-md bg-white p-2 w-full my-2'
                  placeholder='e.g. Rafael Alvarez'
                  value={cardName}
                  onChange={(e) => OnchageInput(e)}
               />
            </div>

            <div>
               <label htmlFor='card-number' className='block uppercase'>
                  Card Number
               </label>
               <input
                  type='number'
                  id='card-number'
                  name='cardNumber'
                  min={0}
                  className='border-2 border-slate-200 rounded-md bg-white p-2 w-full my-2'
                  placeholder='e.g. 0000 0000 0000 0000'
                  value={cardNumber.split(', ')}
                  onChange={(e) => OnchageInput(e)}
               />
            </div>

            <div className='flex'>
               <div>
                  <div>
                     <label htmlFor='month' className='block uppercase'>
                        Exp. Date (MM/YYYY)
                     </label>
                     <input
                        type='number'
                        name='month'
                        min={0}
                        className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 my-2'
                        value={month}
                        placeholder='MM'
                        onChange={(e) => OnchageInput(e)}
                     />
                     <input
                        type='number'
                        name='year'
                        min={0}
                        className='border-2 border-slate-200 rounded-md bg-white p-2 w-20 m-3'
                        value={year}
                        placeholder='YY'
                        onChange={(e) => OnchageInput(e)}
                     />
                  </div>
               </div>
               <div>
                  <label htmlFor='cvc' className='block uppercase'>
                     CVC
                  </label>
                  <input
                     type='number'
                     min={0}
                     name='cvc'
                     className='border-2 border-slate-200 rounded-md bg-white p-2 w-40 my-2'
                     value={cvc}
                     placeholder='000'
                     onChange={(e) => OnchageInput(e)}
                  />
               </div>
            </div>

            <button className='w-full bg-purple-900 text-white p-3 rounded-lg my-2'>Confirm</button>
         </form>
      </div>
   );
};
