import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const Programs = () => {

  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)


  return (
    <div>
        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, nam.</p>
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
          <div className="flex gap-4 flex-col text-sm text-gray-500">
            <p onClick={()=> speciality === 'General physician' ? navigate('/programs') : navigate('/programs/General physician')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >General physician</p>
            <p onClick={()=> speciality === 'Gynecologist' ? navigate('/programs') : navigate('/programs/Gynecologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >Gynecologist</p>
            <p onClick={()=> speciality === 'Dermatologist' ? navigate('/programs') : navigate('/programs/Dermatologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >Dermatologist</p>
            <p onClick={()=> speciality === 'Pediatricians' ? navigate('/programs') : navigate('/programs/Pediatricians')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >Pediatricians</p>
            <p onClick={()=> speciality === 'Neurologist' ? navigate('/programs') : navigate('/programs/Neurologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >Neurologist</p>
            <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/programs') : navigate('/programs/Gastroenterologist')} className={`w-[94vw sm:w-auto pl-3 py-1.5 pr-16 border rouded transition-all cursor-pointer]`} >Gastroenterologist</p>
          </div>
          <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
            {doctors.map((item,index)=>(
                <div onClick={()=>navigate(`/appointments/${item._id}`)} key={index} className="border border-green-400 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                    <img src={item.image} alt="" className='bg-green-50' />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className=' text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className=' text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Programs