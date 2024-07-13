import { Link } from 'react-router-dom';

export function Contact(){
  return(
    <div>
      <h1 className='text-2xl text-gray-950'>Contact Hhehe</h1>
      <Link to="/about" className='text-gray-950'>Sobre</Link>
    </div>
  )
}