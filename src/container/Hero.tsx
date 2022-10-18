import { Navbar } from '../components';

export const Hero = () => {
  return (
    <section
      className="bg-[url('/src/assets/jpgs/gabriel-rodrigues.jpg')] 
      min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
    >
      <Navbar />
      <section className="table h-[calc(100vh-98px)] text-center text-white px-8">
        <main className="table-cell align-middle">
          <h1 className="text-5xl uppercase leading-[1.2] mb-4 font-bold">
            giving kids a chance
          </h1>
          <p className="text-sm opacity-75 leading-[1.7] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            vitae, phasellus enim elementum. Amet, platea sit etiam accumsan,
            vel dictum.
          </p>
          <div className="text-sm font-bold flex flex-col gap-2">
            <button className="p-3 bg-black rounded-sm">How it works</button>
            <button className="p-3 bg-black rounded-sm"> Donate Now</button>
          </div>
        </main>
      </section>
    </section>
  );
};
