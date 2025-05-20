import darkImg from './images/dark-mode-night-moon-svgrepo-com.svg';
import lightImg from './images/light-mode-svgrepo-com.svg';
import { useState } from 'react';

export default function ToggleSwitch({vwMode, setVwMode}){
  
  const [img, setImg] = useState(darkImg);

  let isDark = vwMode === '' ? false : true;

  function handleVwMode(){
    isDark = !isDark;

    if (isDark){
      setImg(lightImg);
      setVwMode('dark');
    }
    else{
      setImg(darkImg);
      setVwMode('');
    }

    console.log(isDark);
  }

  return (
    <>
      <button onClick={handleVwMode} className='bg-white p-2 rounded-md'><img src={img} className='w-5'/></button>
    </>
  );
}
