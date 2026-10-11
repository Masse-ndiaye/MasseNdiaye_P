import { Link } from 'react-router-dom'
import { identification, menu } from '../constants'
import { IoSunnySharp } from 'react-icons/io5'

export default function Navbar() {
  return (
    <section className=''>
    <nav className=' flex justify-between items-center space-x-5 sticky top-0 w-full p-5'>
      <div className=''>
        {identification.map((items,index)=>(
            <div key={index} className='flex gap-5'>
            <Link to={"/"} className='text-xl rounded-2xl font-semibold p-1 text-white bg-black'>
            {items.abrev}
            </Link>
            <h1 className='text-2xl text-black font-bold'>{items.portant}</h1>
            </div>
        ))}
      </div>

      <div className='flex text-gray-500 bg-gray-100 p-3 shadow-[0_0_20px_rgba(0,0,0,0.2)]
      rounded-2xl space-x-5  text-xl font-semibold
      '>
        {menu.map((items,index)=>(
            <p key={index} className='hover:bg-white rounded-2xl p-1'>
                <Link to={items.lien} className=''>{items.nom}</Link>
            </p>
        ))}
      </div>
        {/* cette PARTIR à faire la traduction et sombre */}
      <div className='flex gap-7'>
        <button>Lang</button>
        <button><IoSunnySharp /></button>
      </div>
    </nav>
    </section>
  )
}
