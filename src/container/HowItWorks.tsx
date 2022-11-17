export const HowItWorks = () => {
  return (
    <section>
      <div>
        <h1>how it works</h1>
        <p>
          Here at TWINSFEED,we are driven with passion to help the helpless,
          following in the footsteps of our Lord and Saviouour Lord and Saviour.
          In that regards there are certain goals we aim to acheieve.
        </p>
      </div>
      <div>
        {[
          {
            no: 1,
            text: 'Irrespective of religion, TWINSFEED helps foster children, youngsters with disabilities, orphans, homeless people, and others in need.',
          },
          {
            no: 2,
            text: 'TWINSFEED ensures the well-being of these children in terms of education, material, and spiritual well-being.',
          },
          {
            no: 3,
            text: 'TWINSFEED guarantees that these youngsters have the opportunity to enjoy themselves as they should by planning events and outings for them on Christian Special Holidays and throughout Long Term Holidays.',
          },
          {
            no: 4,
            text: 'TWINSFEED provides empowerment training/seminars on an annual basis. We are making a plan to visit correctional facilities twice a year.',
          },
        ].map((item) => (
          <div key={item.no}>
            <p>{item.text}</p>
            <div aria-hidden>{item.no}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
