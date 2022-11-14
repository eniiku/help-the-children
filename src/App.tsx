import { Fragment } from 'react';
import { Footer, Hero, HowItWorks, Donate } from './container';

function App() {
  return (
    <Fragment>
      <Hero />
      {/* <HowItWorks /> */}
      <Donate />
      <Footer />
    </Fragment>
  );
}

export default App;
