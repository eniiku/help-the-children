import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import logoIcon from '../assets/Logo.svg';
import { Button } from '../components';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header className='flex justify-between items-center sticky z-40 py-8'>
      <div className='flex items-center gap-12'>
        <div className='flex items-center gap-3 cursor-default'>
          <img
            src={logoIcon}
            alt='logo for TwinsFeed'
            className='w-[35px] h-[35px] md:w-[50px] md:h-[50px]'
          />

          <h1 className='font-bold text-xl md:text-2xl'>
            Twin<span>Feed</span>
          </h1>
        </div>

        <nav className='hidden md:block'>
          <ul className='flex items-center gap-4'>
            {['about us', 'mission', 'contact'].map((link) => (
              <li
                key={link}
                className='capitalize font-medium cursor-pointer desktop-link'
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='hidden md:block'>
        <Button>donate now</Button>
      </div>
      <AiOutlineMenu size={26} onClick={handleMenuOpen} className='md:hidden' />

      {isMenuOpen && (
        <nav
          className='fixed inset-0 h-screen w-4/6 backdrop-blur-xl bg-black
            table p-8 z-20 bg-opacity-20'
        >
          <AiOutlineClose
            size={28}
            className='absolute right-8 top-8'
            onClick={handleMenuClose}
          />
          <ul className=' table-cell align-middle'>
            {['about us', 'mission', 'contact', 'donate'].map((link) => (
              <li
                key={link}
                onClick={handleMenuClose}
                className='mb-8 uppercase text-lg py-2 border-b
                 border-b-black font-medium'
              >
                {link}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
