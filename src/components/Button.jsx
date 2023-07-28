
import '../css/button.css'
export function Button({ buttonClass,children,rateChanger,isActive}){
  return(
    <button
    type='button' 
    className={isActive? 'active': buttonClass} 
    onClick={rateChanger} >
        {children}
    </button>
  );
    
}
export function SubmitButton({ buttonClass,children}){
  return(
    <button
    type='submit' 
    className={buttonClass}>
        {children}
    </button>
  );
    
}