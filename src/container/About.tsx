import photoLeft1 from '../assets/jpgs/pexels-lagos-food-bank-initiative-9090745.jpg';
import photoLeft2 from '../assets/jpgs/pexels-lagos-food-bank-initiative.jpg';

const About = () => {
  return (
    <section id='about' className='container grid md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='playfair-sub text-left'>who we are</h1>
        <p className='text-base leading-[2] w-4/5 text-center md:text-left mt-1'>
          <span className='font-medium text-[#229fd4]'>TWINSFEED</span> is a{' '}
          <span className='font-medium text-[#229fd4]'>
            CHRISTIAN NON-GOVERNMENTAL ORGANIZATION
          </span>{' '}
          that reaches out to foster children, the underprivileged, and people
          with disabilities by providing education, consumable goods, and, most
          importantly, bringing them to the knowledge of Christ to help as many
          people as possible be fulfilled here on Earth and to establish a
          rehabilitation center eventually. We are a group of people who have
          taken on the responsibility of putting smiles on the faces of
          wonderful children, particularly those who have not received adequate
          love and care. We are joint heirs of Jesus Christ; we are Christ's
          ambassadors, following in his footsteps and feeding the hungry with
          every available resource.
        </p>
      </div>
      <div className='hidden md:block md:relative'>
        <img
          src={photoLeft1}
          alt='picture of children smiling'
          className='w-2/3 md:w-2/3 absolute top-[8%] left-[5%] rounded-lg'
        />
        <img
          src={photoLeft2}
          alt='picture of volunteer picking goods for donation'
          className='w-2/3 md:w-2/3 absolute bottom-[8%] right-[5%] rounded-lg'
        />
      </div>
    </section>
  );
};

export default About;
