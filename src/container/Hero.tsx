import { Navbar } from '../components';
import { Button } from '../components';

export const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-[100vh] bg-[url("/src/assets/jpgs/sunil-damor.jpg")] bg-cover bg-center
      bg-no-repeat bg-blend-overlay bg-[#062B27] bg-opacity-60 flex flex-col text-white px-4
      md:px-8'
    >
      <Navbar />

      <section className='flex-1 grid place-content-center'>
        <main className='flex flex-col items-center -mt-[100px]'>
          <div className='text-center mb-3'>
            <p className='uppercase tracking-wide text-xs font-medium md:text-sm'>
              a non profit organization dedicated to
            </p>

            <h1 className='text-3xl md:text-6xl uppercase playfair'>
              helping the children
            </h1>
          </div>

          <div className='flex flex-col items-center w-[320px] md:w-[620px] text-center'>
            <p className='font-xs md:font-base leading-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              laudantium autem vitae blanditiis veniam facere eius perferendis!
              Fugiat hic itaque, atque placeat minus ut asperiores dolore
              laborum magni, blanditiis mollitia?
            </p>

            <div className='flex items-center gap-16 mt-6'>
              <button className='capitalize underline underline-offset-4 font-bold'>
                How it works
              </button>

              <Button>donate now</Button>
            </div>
          </div>
        </main>
      </section>
    </section>
  );
};
