import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"

export function Home(){
  const comp = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {       
        duration:0.2,
        delay:0.2,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.2,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.2
      }).to("#intro-slider",{
        xPercent: "-100",
        duration: 1,
      }).from("#welcome", {
        opacity:0,
        duration:2,
        stagger: 0.5,
      })
    }, comp)

    return () => ctx.revert()
  }, [])
  return(
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="h-screen p-10 bg-zinc-900 absolute text-gray-200 top-0 left-0 z-10 w-full flex flex-col gap-10 track">
        <h1 className="text-9xl" id="title-1">KAYO</h1>
        <h1 className="text-9xl" id="title-2">WEB DEVELOPER</h1>
        <h1 className="text-9xl" id="title-3">UI/UX Designer</h1>
      </div>
      <main className=" h-screen flex flex-col bg-custom-gradient justify-center place-items-center">
        <div id="welcome">
          <h1 className="text-9xl font-bold">Olá</h1>
          <Link to="/about" className="text-2xl">Sobre</Link>
        </div>
      </main>
    </div>
  )
}