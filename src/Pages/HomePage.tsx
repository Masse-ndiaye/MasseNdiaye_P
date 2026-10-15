import { HiOutlineArrowNarrowRight, HiOutlineDownload } from 'react-icons/hi'
import MyComponent from '../composants/Typed'
import { clik, presentation} from '../constants'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className=' bg-gray-50 h-full p-5 ml-40 '>
        {presentation.map((items,index)=>(
            <div key={index}>
               <p className=' text-gray-500 leading-10 tracking-[8px]'>{items.saluer}</p> 
               <p className=' text-9xl font-extrabold'>{items.name}</p>
               <p className=' text-9xl font-extrabold text-neutral-600'>{items.firstname}</p>
            </div>
        ))}
        <div className='mt-20  border-l border-neutral-300 text-5xl '>
        <MyComponent />
     </div>
     <div className='text-slate-600 text-xl mt-16'>
        <p> Je conçois et développe des applications moderne</p>
        <p>alliant performance, design et accessibilité.</p>
     </div>
     <div className="flex m-5 space-x-10  items-center">
        <div className=' space-y-5'>
       <p className='bg-blue-800 rounded-lg py-1 px-2 text-center text-white'>Adonis</p>
       <p className='bg-green-500 rounded-lg py-1 px-2 text-center text-gray-600'>React</p>
       <p className='bg-blue-400 rounded-lg py-1 px-2 text-center '>TypeScript</p>
       <p className='bg-green-500 rounded-lg py-1 px-2 text-center text-gray-600'>Docker</p>
     </div>
     <div className=' space-y-5'>
       <p  className='bg-blue-400 rounded-lg py-1 px-2 text-center '>Laravel</p>
       <p  className='bg-black rounded-lg py-1 px-2 text-center text-white'>Next.JS</p>
       <p className='bg-green-500 rounded-lg py-1 px-2 text-center text-gray-600'>Python</p>
       <p className='bg-yellow-500 rounded-lg py-1 px-2 text-center text-red-500'>G . Actions</p>
     </div>
     <div className=' space-y-5'>
       <p className='bg-blue-800 rounded-lg py-1 px-2 text-center text-white'>Nest JS</p>
       <p className='bg-pink-500 text-white rounded-lg py-1 px-4 text-center'>React Native</p>
       <p  className='bg-blue-800 rounded-lg py-1 px-2 text-center text-white'>GO</p>
       <p className='bg-blue-400 rounded-lg py-1 px-2 text-center'>AWS</p>
    </div>
     </div>
     <div className='flex space-x-6 mt-15'>
   <Link to={""} className=' flex gap-5 items-center text-2xl  bg-neutral-800 text-white p-5 rounded-xl'>Voir Projets 
    <HiOutlineArrowNarrowRight />
   </Link>
   <Link to={""}
    className=' flex gap-2 items-center text-2xl  bg-gray-200 border-2 border-gray-300  p-3 rounded-xl'> 
    <HiOutlineDownload />
Télécharger CV
</Link>
     </div>
    </section>
  )
}
