import "../styles/tailwind.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex max-w-5xl m-auto"}>
      {/* header */}
      <Content>{children}</Content>
      {/* footer */}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
