const Footer = () => {
  return (
    <div className="px-8 w-full">
      <footer className="grid grid-cols-4 w-full h-128 top-full text-white bg-white/10 border-t border-white/30 rounded-t-4xl overflow-clip">
        <div className="p-3 bg-black/10 text-xl flex">Some awesome footer</div>
        <div className="p-3 bg-black/70 flex"></div>
        <div className="p-3 bg-black/20 col-span-2 flex"></div>
        <div className="p-3 bg-black/50 col-span-2 row-span-2 flex"></div>
        <div className="p-3 bg-black/60 flex"></div>
        <div className="p-3 bg-black/50 flex"></div>
        <div className="p-3 bg-black/40 col-span-2 flex"></div>
      </footer>
    </div>
  );
};

export default Footer;
