import photoLeft1 from '../assets/jpgs/gabriel-rodrigues.jpg';
import photoLeft2 from '../assets/jpgs/pexels-rodnae-productions.jpg';

const About = () => {
  return (
    <section className='container grid grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='playfair-sub'>who we are</h1>
        <p className='text-sm leading-[1.8] w-4/5 text-left'>
          We are a non-profit organizaiton dedicated to helping the children
          <br />
          We do whatever it takes to make sure children don’t just survive but
          thrive. Helper believes that every child should be able to make their
          mark on their world and help build a better future. We stand the help
          fellow human beings, we are Help The Children.
        </p>
      </div>
      <div className='relative'>
        <img
          src={photoLeft1}
          alt='picture of children smiling'
          className='h-3/5 absolute top-[10%] left-[10%] rounded-lg'
        />
        <img
          src={photoLeft2}
          alt='picture of volunteer picking goods for donation'
          className='w-3/5 absolute z-30 bottom-[15%] left-[35%] rounded-lg'
        />
      </div>
    </section>
  );
};

export default About;
