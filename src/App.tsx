import { useState } from 'react';
import './App.css';
import CardLayout from './components/CardLayout/CardLayout';
import CheckComplete from './components/CheckComplete/CheckComplete';

function App() {
   const [checkValidateCard, setCheckValidateCard] = useState<boolean>(false);

   console.log(checkValidateCard);

   return (
      <div className='App h-full w-full flex justify-center items-center bg-zinc-400'>
         <CardLayout checkValidateCard={checkValidateCard} setCheckValidateCard={setCheckValidateCard} />
      </div>
   );
}

export default App;
