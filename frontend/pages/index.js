import Image from "next/image";
import cowsay from "cowsay-browser";
import React from "react";
import ReactDOM from "react-dom";

export default function Home() {
  const [msg, setMsg] = React.useState("I'm a Moooooo!");
  let myCow = (message) => {
    return (
      <pre>
        {cowsay.say({
          text: message,
        })}
      </pre>
    );
  };
  let api_url = process.env.NEXT_PUBLIC_API_URL;
  async function handleClick() {
    fetch(`${api_url}/cow`)
      .then((res) => res.json())
      .then((data) => {
        console.log();
        setMsg(breakLine(data.msg));
      })
      .catch((err) => {
        console.log(err);
        setMsg("Failed to call backend API");
      });
  }
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
      <br></br>

      <div className="relative flex place-items-center">{myCow(msg)}</div>
      <div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleClick}
        >
          Get new Cowsay
        </button>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">



      </div>
    </main>
  );
}

function breakLine(string = "") {
  let countSpace = 1;
  let arr = string.split(" ");
  let result = "";
  arr.forEach((element) => {
    countSpace++;
    if (countSpace % 15 == 0) {
      countSpace == 1;
      result += `\n${element}`;
    } else {
      result += ` ${element}`;
    }
  });
  return result;
}
