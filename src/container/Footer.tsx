export const Footer = () => {
  return (
    <footer className="bg-sky-900">
      <div className="border-y-2 border-white flex pt-20 pb-8">
        <div className="flex-1">
          <h1 className="text-3xl ml-16">
            Twin<span>Feed</span> Logo
          </h1>
        </div>
        <div className="flex gap-12 justify-start w-1/2">
          {[
            {
              heading: 'company',
              links: ['who we are', 'what we do', 'contact'],
            },
            {
              heading: 'about',
              links: ['terms & conditions', 'privacy policy'],
            },
          ].map((item) => (
            <div key={item.heading}>
              <h1 className="uppercase font-bold text-2xl">{item.heading}</h1>
              <ul>
                {item.links.map((link) => (
                  <li key={link} className="capitalize mt-4">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-center py-2 capitalize">
        copyright c 2022 TwinFeed
      </p>
    </footer>
  );
};
