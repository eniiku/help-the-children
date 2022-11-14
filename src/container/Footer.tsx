import logoIcon from '../assets/Logo.svg';

export const Footer = () => {
  return (
    <footer className='px-4 py-2 md:px-8 md:py-3 w-[100%]'>
      <div className='flex flex-col md:flex-row py-4 md:py-8 items-center'>
        <div className='flex flex-col items-center w-fit mb-4 md:mb-0 md:mr-24'>
          <h1 className='flex items-center justify-center gap-2 font-bold text-xl'>
            <img src={logoIcon} alt='twinsfeed logo' className='w-[35px]' />
            TwinFeed
          </h1>

          <p className='w-[30ch] md:w-[22ch] mt-3 text-sm text-center'>
            A non profit organization dedicated to helping the children
          </p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {[
            {
              heading: 'company',
              links: ['about us', 'mission', 'donate'],
            },

            {
              heading: 'follow',
              links: ['instagram', 'twitter'],
            },

            {
              heading: 'legal',
              links: ['terms & conditions', 'privacy policy'],
            },
          ].map((item) => (
            <div key={item.heading}>
              <h1 className='uppercase font-bold mt-4'>{item.heading}</h1>

              <ul>
                {item.links.map((link) => (
                  <li
                    key={link}
                    className='capitalize text-sm mb-2 underline underline-offset-2'
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center justify-center opacity-60'>
        <p className='text-[10px] text-center py-2 capitalize'>
          &copy; 2022 HelpTheChldre. All rights reseverd.
        </p>
      </div>
    </footer>
  );
};
