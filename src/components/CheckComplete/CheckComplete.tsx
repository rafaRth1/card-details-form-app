import './CheckComplete.css';

interface Props {
   setCheckValidateCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckComplete = ({ setCheckValidateCard }: Props) => {
   return (
      <div className='check-complete-container flex flex-col items-center  lg:w-2/3'>
         <h2 className='uppercase text-3xl font-semibold'>Thank You!</h2>
         <p className='my-5'>We've added your card details</p>
         <button className='p-2 rounded-lg text-white w-1/2' onClick={() => setCheckValidateCard(false)}>
            Continue
         </button>
      </div>
   );
};

export default CheckComplete;
