import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"


export function Home(){
  const comp = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {       
        duration:0.5,
        delay:0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5
      }).to("#intro-slider",{
        xPercent: "-100",
        duration: 1.3,
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
      <div id="intro-slider" className="h-screen p-10 bg-zinc-100 absolute text-gray-950 top-0 left-0 z-10 w-full flex flex-col gap-10 track">
        <h1 className="text-9xl" id="title-1">ARCVS</h1>
        <h1 className="text-9xl" id="title-2">TECH</h1>
        <h1 className="text-9xl" id="title-3">DEV</h1>
      </div>
      <div className=" h-screen flex flex-col bg-custom-gradient justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold">Olá</h1>
      </div>
    </div>
  )
}