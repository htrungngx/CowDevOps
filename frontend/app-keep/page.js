import Image from "next/image";
import cowsay from "cowsay-browser";
import React from 'react';
import ReactDOM from 'react-dom';

export default function Home() {
  const [msg, setMsg] = React.useState();
  let myCow = (message = "test") => {
    return <pre>{cowsay.say({ text: message })}</pre>;
  };

  async function handleClick() {
    setMsg(msg + 1);
  }

  // console.log(output);
  // console.log(cow.say());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            rel="noopener noreferrer"
          >
            Cowsay{" Frontend"}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 ">
        {myCow("test")}
        <button onClick={handleClick}>Likes ({likes})</button>
      </div>

    </main>
  );
}
