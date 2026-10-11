import { presentation } from '../constants'

export default function HomePage() {
  return (
    <section className=' bg-gray-50 h-full p-5 ml-40 '>
        {presentation.map((items,index)=>(
            <div key={index}>
               <p className=' text-gray-500 leading-10 tracking-[8px]'>{items.saluer}</p> 
               <p className=' text-9xl font-extrabold'>{items.name}</p>
               <p className=' text-9xl font-extrabold text-neutral-700'>{items.firstname}</p>
            </div>
        ))}
    </section>
  )
}
