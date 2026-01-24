const Footer = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <footer className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full h-128 top-full text-white">
        <div className="p-3 bg-black/30 text-xl col-span-2 row-span-2 flex font-bitcount justify-center">
          Some awesome footer
        </div>
        <div className="p-3 flex"></div>
        <div className="p-3 flex"></div>
        <div className="p-3 bg-black/80 flex"></div>
        <div className="p-3 bg-black/50 col-span-2 row-span-2 flex"></div>
        <div className="p-3 bg-black/60 flex"></div>
        <div className="p-3 bg-black/50 flex"></div>
        <div className="p-3 bg-black/40 col-span-2 flex"></div>
        <div className="p-3 flex"></div>
        <div className="p-3 bg-black/20 flex"></div>
        <div className="p-3 bg-black/60 flex"></div>
      </footer>
    </div>
  );
};

export default Footer;
