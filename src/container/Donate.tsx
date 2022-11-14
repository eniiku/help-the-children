import { AiOutlineArrowRight } from 'react-icons/ai';

export const Donate = () => {
  return (
    <section id='donate' className='container grid place-content-center'>
      <div className='flex flex-col items-center'>
        <h1 className='playfair-sub'>ready to help?</h1>

        <p className='w-3/5 text-center leading-[1.7]'>
          You have two hands. One to help yourself, the second the help others.
          Share your kindness through donations here
        </p>
      </div>

      <div className='grid mt-16 grid-cols-2 md:grid-cols-4 gap-4'>
        {['$5', '$15', '$45', '$125'].map((amount) => (
          <button key={amount} className='donate__btn'>
            {amount}
          </button>
        ))}

        <button className='donate__btn donate__btn--search'>
          <form className='w-full flex items-center gap-4'>
            <label htmlFor='custom'>$</label>

            <input
              type='search'
              name='custom'
              placeholder='Custom Amount'
              className='flex-1 bg-transparent border-l pl-4 placeholder-slate-300
                outline-none'
            />
          </form>
        </button>

        <button
          type='submit'
          className='donate__btn donate__btn--green donate__btn--submit flex items-center 
            justify-center gap-2'
        >
          continue
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
