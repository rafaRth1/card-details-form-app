import BgBackCard from '../../assets/bg-card-back.png';
import './BackCard.css';

interface Props {
   cvc: string;
}

const BackCard = ({ cvc }: Props) => {
   return (
      <div className='back-card-movile'>
         <div className='image-back-card'>
            <img src={BgBackCard} alt='Background Back Card' className='object-cover' />
         </div>
         <p className='card-cvv'>{cvc.length === 0 ? '000' : cvc.slice(0, 3)}</p>
      </div>
   );
};

export default BackCard;
