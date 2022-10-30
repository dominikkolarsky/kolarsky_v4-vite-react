import { useState } from 'react';
import useDarkSide from '../hook/useDarkSide'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Switcher() {

    
const [colorTheme, setColorTheme] = useDarkSide()
const [darkSide, setDarkSide]  = useState(colorTheme === 'light' ? true : false)

const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme)
    setDarkSide(checked)
}


  return (
    <div className='flex flex-col items-center'>
        <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        className=""
        sunColor='#d97706'
        moonColor='#075985'
        />
    </div>
  )
}

export default Switcher