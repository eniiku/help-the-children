import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <header
      className="p-8 flex justify-between items-center
      sticky z-50 "
    >
      <h1 className="font-bold text-2xl">
        Twin<span>Feed</span>
      </h1>
      <AiOutlineMenu size={26} onClick={handleMenuOpen} />

      {isMenuOpen && (
        <nav
          className="fixed h-screen w-4/6 backdrop-blur-xl top-0
          right-0 table p-8 z-20"
        >
          <AiOutlineClose
            size={28}
            className="absolute right-8 top-8"
            onClick={handleMenuClose}
          />
          <ul className=" table-cell align-middle">
            {['who we are', 'what we do', 'contact'].map((link) => (
              <li
                key={link}
                onClick={handleMenuClose}
                className="mb-8 capitalize text-lg py-2 border-b-2 
                 border-b-black"
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
