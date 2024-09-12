import { useState } from "react";
import { Button } from "@nextui-org/react";
import { RefreshCcw } from "lucide-react";

export default function App() {
  return (
    <div>
      <Add />
    </div>
  );
}

function Add() {
  const [score2, setScore2] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white px-2 text-7xl flex justify-center items-center rounded-xl">
        {score2}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Button
            radius="full"
            onClick={() => setScore2(score2 - 1)}
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-5xl px-7 py-2"
          >
            -1
          </Button>
          <Button
            radius="full"
            onClick={() => setScore2(score2 + 1)}
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-5xl px-6
            py-2"
          >
            +1
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            radius="full"
            onClick={() => setScore2(score2 - 10)}
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-5xl px-4 py-2"
          >
            -10
          </Button>
          <Button
            radius="full"
            onClick={() => setScore2(score2 + 10)}
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-5xl px-2 py-2"
          >
            +10
          </Button>
        </div>
        <div className="flex justify-center">
          <Button
            radius="full"
            className="font-semibold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg text-xl px-2 py-2"
            startContent={<RefreshCcw />}
            onClick={() => window.location.reload()} // Refresh page
          >
            Refresh
          </Button>
        </div>
      </div>
    </div>
  );
}
