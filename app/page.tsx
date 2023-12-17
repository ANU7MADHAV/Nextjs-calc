"use client";
import { SimpleGrid } from "@chakra-ui/react";
import Button from "./components/Button";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [disable, setDisabale] = useState(false);
  const [operators, setOperators] = useState(false);

  const handleClick = (input: string) => {
    setValue(value + input);
    setOperators(false);
  };

  const handleClickResult = () => {
    try {
      const result = eval(value);
      setValue(result);
    } catch (error) {
      return null;
    }
  };
  const handleClickDot = (input: string) => {
    setValue(value + input);
    setDisabale(true);
  };

  const handleClickOperators = (input: string) => {
    setValue(value + input);
    setOperators(true);
  };
  return (
    <main className="flex flex-col bg-green-400/40 justify-center h-screen items-center">
      <section className="bg-black rounded-md w-[250px]">
        <input
          value={value}
          className="bg-green-200/50 mx-5 min-w-[20px] flex justify-end min-h-[25px] mt-4 overflow-hidden rounded-md px-2 text-white"
        />
        <div>
          <div className="text-white mb-2 px-2 mt-2">
            <SimpleGrid columns={4}>
              <Button onClick={() => handleClick("7")}>7</Button>
              <Button onClick={() => handleClick("8")}>8</Button>
              <Button onClick={() => handleClick("9")}>9</Button>
              <Button
                value={operators}
                onClick={() => handleClickOperators("/")}
              >
                /
              </Button>
              <Button onClick={() => handleClick("4")}>4</Button>
              <Button onClick={() => handleClick("5")}>5</Button>
              <Button onClick={() => handleClick("6")}>6</Button>
              <Button
                value={operators}
                onClick={() => handleClickOperators("*")}
              >
                x
              </Button>
              <Button onClick={() => handleClick("1")}>1</Button>
              <Button onClick={() => handleClick("2")}>2</Button>
              <Button onClick={() => handleClick("3")}>3</Button>
              <Button
                value={operators}
                onClick={() => handleClickOperators("-")}
              >
                -
              </Button>
              <Button onClick={() => handleClick("0")}>0</Button>
              <Button value={disable} onClick={() => handleClickDot(".")}>
                .
              </Button>

              <Button
                value={operators}
                onClick={() => handleClickOperators("+")}
              >
                +
              </Button>
              <button
                className=" bg-amber-500 text-white m-1 rounded-md px-4 py-1"
                onClick={handleClickResult}
              >
                =
              </button>
              <button onClick={() => setValue("")}>Clear</button>
            </SimpleGrid>
          </div>
        </div>
      </section>
    </main>
  );
}
