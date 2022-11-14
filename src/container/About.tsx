import photoLeft1 from '../assets/jpgs/gabriel-rodrigues.jpg';
import photoLeft2 from '../assets/jpgs/pexels-rodnae-productions.jpg';

const About = () => {
  return (
    <section id='about' className='container grid md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='playfair-sub'>who we are</h1>
        <p className='text-sm leading-[1.8] w-4/5 text-center md:text-left'>
          We are a non-profit organizaiton dedicated to helping the children We
          do whatever it takes to make sure children don’t just survive but
          thrive. Helper believes that every child should be able to make their
          mark on their world and help build a better future. We stand the help
          fellow human beings, we are Help The Children.
        </p>
      </div>
      <div className='hidden md:block md:relative'>
        <img
          src={photoLeft1}
          alt='picture of children smiling'
          className='h-1/4 md:h-3/5 absolute top-[10%] left-[10%] rounded-lg'
        />
        <img
          src={photoLeft2}
          alt='picture of volunteer picking goods for donation'
          className='w-1/3 md:w-3/4 absolute z-30 bottom-[15%] left-[35%] rounded-lg'
        />
      </div>
    </section>
  );
};

export default About;
