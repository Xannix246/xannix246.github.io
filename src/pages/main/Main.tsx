import clsx from "clsx";
import Container from "../../shared/Container";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";

const Main = () => {
  return (
    <div className={clsx("flex flex-col place-items-center w-full text-white", "transition duration-300")}>
      <Header />

      <div className="flex flex-col p-4 gap-16 max-w-6xl h-[3000px]">
        <h1 className="font-bitcount w-full text-6xl text-center my-16">Welcome to my some awesome website!</h1>

        <div className="flex flex-col gap-8">
          <Container>hello world!</Container>
          <div className="grid gap-4 grid-cols-2 font-roboto text-2xl">
            <Container>hello world!</Container>
            <Container>hello world!</Container>
            <Container className="col-span-2">hello world!</Container>
            <Container>hello world!</Container>
            <Container>hello world!</Container>
            <Container>hello world!</Container>
            <Container>hello world!</Container>
            <Container className="col-span-2">hello world!</Container>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
