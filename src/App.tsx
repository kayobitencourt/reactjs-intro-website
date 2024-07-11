import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"

export function App(){
  const comp = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration:1.3,
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
      }).from(["#welcome", "#welcome-samuel"], {
        opacity:0,
        duration:2,
        stagger: 0.5,
      })
    }, comp)

    return () => ctx.revert()
  }, [])
  return(
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="h-screen p-10 bg-gray-50 absolute text-gray-950 top-0 left-0 z-10 w-full flex flex-col gap-10 track">
        <h1 className="text-8xl" id="title-1">PAKEN</h1>
        <h1 className="text-8xl" id="title-2">FEITO</h1>
        <h1 className="text-8xl" id="title-3">PRA VOCE</h1>
      </div>
      <div className="h-screen flex flex-col bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold">Olá</h1>
        <h2 id="welcome-samuel" className="text-9xl font-bold">Samuel!!</h2>
      </div>
    </div>
  )
}