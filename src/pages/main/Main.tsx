import clsx from "clsx";
import Container from "../../shared/Container";
import Header from "../../widgets/Header";
import Footer from "../../widgets/Footer";
import ImageContainer from "../../shared/ImageContainer";

const Main = () => {
  return (
    <div className={clsx("flex flex-col place-items-center w-full text-white", "transition duration-300")}>
      <Header />

      <div className="flex flex-col p-4 gap-16 max-w-6xl h-750">
        <h1 className="font-bitcount w-full text-6xl text-center my-16">Welcome to my some awesome website!</h1>

        <div className="flex w-full h-136 gap-8 place-items-center place-content-center my-32">
          <ImageContainer
            src="/assets/images/image1.png"
            className="max-w-90 group"
            decorations={
              <div>
                <div className="absolute -bottom-32 group-hover:bottom-10 left-10 size-32 bg-[#f3114a]/30 shadow-md transform duration-300 group-hover:rotate-45" />
                <div className="absolute -bottom-32 group-hover:bottom-5 left-5 size-32 bg-[#ce4217]/40 shadow-md transform duration-300 group-hover:rotate-12" />
                <div className="absolute -bottom-32 group-hover:bottom-0 size-32 bg-[#f39111]/50 shadow-md transform duration-300" />

                <div className="absolute w-0 h-8 bg-[#df610c]/70 group-hover:w-full transform duration-300" />
                <div className="absolute mt-5 w-0 h-8 bg-[#dcdf0c]/60 group-hover:w-[80%] transform duration-300" />
                <div className="absolute mt-3 w-0 h-8 bg-[#a0df0c]/50 group-hover:w-[60%] transform duration-300" />
              </div>
            }
          />
          <div>
            <h2 className="font-bitcount text-4xl w-64">Meet IceStorm :)</h2>
            <h3 className="text-xl ml-5">P.S. I just need to place something here, so...</h3>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <h2 className="text-4xl font-bitcount">Let me to tell about me a bit</h2>
          <div className="flex gap-8">
            <Container image={<p className="text-[200px] absolute -bottom-30 -left-20">✌️</p>}>
              Hello, I&apos;m Albert and I was born in Karelia, Russia
              <br />
              and some text
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam, neque in voluptatem quas sunt
              quisquam ipsam facere, nulla ratione aliquid nostrum ducimus praesentium assumenda commodi beatae
              expedita! Quae, excepturi.
            </Container>
            <ImageContainer src="/assets/images/image2.png" className="min-h-136 min-w-90" />
          </div>
          <Container>Some hobbies</Container>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <h2 className="text-4xl font-bitcount text-right">My projects</h2>
          <div>
            <Container className="">Something something</Container>
          </div>
        </div>

        <div className="flex flex-col gap-8 my-16">
          <h2 className="text-4xl font-bitcount text-center">My links :o</h2>
          <div className="grid gap-4 grid-cols-2 text-xl font-bold">
            <Container className="col-span-2 text-center">Discord</Container>
            <Container className="text-center">Telegram</Container>
            <Container className="text-center">Steam</Container>
            <Container className="text-center">Github</Container>
            <Container className="text-center">Email: some-email@mail.com</Container>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
