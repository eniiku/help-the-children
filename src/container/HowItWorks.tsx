export const HowItWorks = () => {
  return (
    <section className='container grid place-content-center gap-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='playfair-sub'>how it works</h1>
        <p className='paragraph w-3/5 text-center'>
          Here at TWINSFEED,we are driven with passion to help the helpless,
          following in the footsteps of our Lord and Saviouour Lord and Saviour.
          In that regards there are certain goals we aim to acheieve.
        </p>
      </div>
      <div
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12 how-it-works__grid
        place-content-center'
      >
        {[
          {
            no: 1,
            text: 'TWINSFEED helps foster children, youngsters with disabilities, orphans, homeless people, and others in need. Irrespective of religion',
          },
          {
            no: 2,
            text: 'TWINSFEED ensures the well-being of these children in terms of education, material, and spiritual well-being.',
          },
          {
            no: 3,
            text: 'TWINSFEED ensures these youngsters are given the priviledge to have fun by planning events and outings for them on specific days throughout the years.',
          },
          {
            no: 4,
            text: 'TWINSFEED provides empowerment training/seminars on an annual basis. We are making a plan to visit correctional facilities twice a year.',
          },
        ].map((item) => (
          <div key={item.no} className='shadow-md how-it-works__grid-item'>
            <p className='text-lg'>{item.text}</p>
            <div
              aria-hidden
              className='absolute z-30 left-2 bottom-2 w-10 h-10 rounded-full cursor-default
              bg-[#229fd4] flex justify-center items-center font-bold text-white'
            >
              {item.no}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
