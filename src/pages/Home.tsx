import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";



const instanceSettings = {
  duration:2,
  lerp:1,
  smoothWheel:true,
};

export function Home() {
  
  return (
    <div className="relative">
      <main className=" h-screen flex flex-col justify-center text-center place-items-center">
        <div id="welcome">
          <h1 className="text-8xl font-medium text-zinc-900 font-serifada">HELLO WORLD</h1>
          <Link to="/about" className="text-2xl text-zinc-900 underline underline-offset-8">
            Sobre
          </Link>
        </div>
      </main>
      <ReactLenis options={instanceSettings} root className="relative overflow-y-auto">
        <div className="sticky top-0 h-screen w-full bg-zinc-900 p-5 appear ">
          <div className="border border-zinc-200 w-full h-full flex items-center justify-center">
            <h1 className="text-6xl font-sans text-white">SOBRE</h1>
          </div>
        </div>
        <div className="sticky h-screen w-full bg-neutral-600 p-5">
          <div className="border border-zinc-200 w-full h-full flex items-center justify-center">
            <h1 className="text-6xl font-sans text-white">SOBRE</h1>
          </div>
        </div>
      </ReactLenis>
    </div>
  );
}
