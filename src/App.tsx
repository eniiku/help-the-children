import { Fragment } from 'react';
import { Footer, Hero, HowItWorks, Donate, About } from './container';

function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      {/* <HowItWorks /> */}
      <Donate />
      <Footer />
    </Fragment>
  );
}

export default App;
