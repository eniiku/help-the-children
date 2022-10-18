export const HowItWorks = () => {
  return (
    <section
      className="min-h-screen bg-sky-900 text-center px-8
      grid place-content-center"
    >
      <div>
        <main>
          <h3 className="uppercase mb-2">how it works</h3>
          <h1 className="capitalize text-5xl">what we do</h1>
        </main>
        <aside className="grid gap-8 justify-center mt-10 grid-cols-4 ">
          {['Step 1', 'Step 2', 'Step 3', 'Step 4'].map((item) => (
            <div
              key={item}
              className="border-2 border-white w-[300px] h-[250px]
              rounded-sm grid content-center text-white p-12"
            >
              <div>
                <article>
                  <h1 className="font-bold text-2xl capitalize">{item}</h1>
                  <p className="mb-5 mt-2 text-sm leading-[2]">
                    This is some text inside of a div
                  </p>
                </article>
                <button className="bg-black rounded-sm p-2 px-6">
                  ------\/
                </button>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};
