import { Link } from "react-router-dom"

export function About(){
  return(
    <div className="h-screen grid place-items-center">
      <div>
        <h1 className="text-gray-950 text-9xl">About</h1>
        <div className="flex gap-2 text-center">
          <Link to="/contact" className="text-2xl text-gray-950">Contact</Link>
          <Link to="/" className="text-2xl text-gray-950">Home</Link>
        </div>
      </div>
    </div>
  )
}