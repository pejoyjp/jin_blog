import { darkModeState } from '@/store/atoms/darkMode';
import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { useRecoilValue } from 'recoil';
import Appbar from './navbar/Appbar';

function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);
  const darkMode = useRecoilValue(darkModeState)

  return (
    <div className='md:hidden'>
      {/* Drawer toggle button */}
      <button
        className="text-black focus:outline-none"
        onClick={() => setShowDrawer(!showDrawer)}
      >
          <AiOutlineMenu size={20} color={darkMode?'white':''}/>
      </button>

      {/* Drawer overlay */}

      {showDrawer && (
        <div
          className="fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50"
          
        />
      )}

      {/* Drawer content */}
      <div
          onClick={()=>setShowDrawer(false)}
          className={`fixed z-50 top-0 left-0 w-44 h-full bg-white shadow-lg transform transition-all duration-300 ${
            showDrawer ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold">Drawer</h2>
        </div>
        <div className="p-4">
          {/* Drawer content goes here */}
          <Appbar col/>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
