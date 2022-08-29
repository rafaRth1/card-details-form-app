import bgFronCard from '../../assets/bg-card-front.png';
import './FrontCard.css';

interface Props {
   cardName: string;
   cardNumber: string;
   month: string;
   year: string;
}

const FrontCard = ({ cardName, cardNumber, month, year }: Props) => {
   let cardNumberSeparator = cardNumber
      .slice(0, 16)
      .match(/\d{1,4}/g)
      ?.join(' ')
      .split(',');

   return (
      <div className='front-card-movile'>
         <div className='image-front-card'>
            <img src={bgFronCard} alt='Background Front Card' className='object-cover' />
         </div>
         <div className='data-card-front'>
            <span className='card-number'>{cardNumber.length == 0 ? '0000 0000 0000 0000' : cardNumberSeparator}</span>
            <span className='card-name'>{cardName.length == 0 ? 'Rafael Alvarez' : cardName.split('')}</span>
            <span className='card-date'>
               {month ? month.slice(0, 2) : '00'}/{year ? year.slice(0, 2) : '22'}
            </span>
         </div>
      </div>
   );
};

export default FrontCard;
