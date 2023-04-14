import { ButtonInterface } from "../types"
import styles from './Button.module.css'
import { useState } from "react";
const Button = ({text, filled, type, href, icon}: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  const [showBox, setShowBox] = useState(false);

  const handleButtonClick = () => {
    setShowBox(true);
  };

  const handleBoxClick = () => {
    setShowBox(false);
  };

  
  return (
  //  <a href={href} className={`${styles.btn} ${styles[type.toLowerCase()]} ${filledClass}`}>
   //   <span>{text}</span>
   //   {icon}
   // </a>
   <div>
      <button onClick={handleButtonClick} className={`${styles.btn} ${styles[type.toLowerCase()]} ${filledClass}`}>More Info</button>
      {showBox && (
        <div className="box" onClick={handleBoxClick}>
          <div></div>
          <p>This is the content of the box.</p>
        </div>
      )}
    </div>
  )
}
export default Button