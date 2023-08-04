import { useState } from 'react';
import './App.css'
import {Button, SubmitButton} from './components/Button'
import star from '../src/img/icon-star.svg'
import thanks from '../src/img/illustration-thank-you.svg'


function App() {
  const [rate, setRate] = useState(null);
  const [status , setStatus] = useState('rate')
  if(status == 'submit'){
    return (
      <article className='thanks'>
       <img className='thanks-img' src={thanks} alt="" />
       <span className='rate-msg'>You selected {rate} out of 5</span>
       <h1>Thank you!</h1>
       <p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
      </article>
    );
  } 

  return (
    <article className='rating'>
      <img className='rating-star' src={star} alt="" />
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated 
        to help us improve our offering!</p>
        <form onSubmit={ e =>
         {
          e.preventDefault();
          setStatus('submit')
          }}>
        <div className='button-container'>
        <Button buttonClass="rate" rateChanger={()=>setRate(1)} isActive={rate===1}>1</Button>
        <Button buttonClass="rate" rateChanger={()=>setRate(2)} isActive={rate===2}>2</Button>
        <Button buttonClass="rate" rateChanger={()=>setRate(3)} isActive={rate===3}>3</Button>
        <Button buttonClass="rate" rateChanger={()=>setRate(4)} isActive={rate===4}>4</Button>
        <Button buttonClass="rate" rateChanger={()=>setRate(5)} isActive={rate===5}>5</Button>
        </div>
        <SubmitButton buttonClass="submit">Submit</SubmitButton>
      </form>
    </article>
  );
}

export default App
