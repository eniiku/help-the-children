import photoLeft1 from '../assets/jpgs/larm-rmah.jpg';
import photoLeft2 from '../assets/jpgs/pexels-rodnae-productions.jpg';

const About = () => {
  return (
    <section>
      <div>
        <img src={photoLeft1} alt='something' />
        <img src={photoLeft2} alt='something' />
      </div>
      <div>
        <h1>who we are</h1>
        <p>
          We are a non-profit organizaiton dedicated to helping the children
          <br />
          We do whatever it takes to make sure children don’t just survive but
          thrive. Helper believes that every child should be able to make their
          mark on their world and help build a better future. We stand the help
          fellow human beings, we are Help The Children.
        </p>
      </div>
    </section>
  );
};

export default About;
