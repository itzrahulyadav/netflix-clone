import Image from "next/image";
import {useRouter} from 'next/router'
function Cover() {

  const router = useRouter();

  return (
    <div className = 'relative w-full h-screen bg-black' >
       <Image src = '/poster.jpg' width = {1920} height = {1000} className = "opacity-80" />
       <div className=" flex flex-col absolute w-full h-screen top-0 left-0 bg-gradient-to-l from-black">
        <header className="flex justify-between items-center px-8 mt-1 mb-10 h-20">
          <Image src = '/netflix2.png' width= {200} height = {200}  className="object-contain" />
          <div>
            <button className="bg-red-600 px-2 text-white font-semibold rounded">Login</button>
            <button className="bg-black border-2 ml-2 rounded px-2">Signup</button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center flex-4 opacity-100 ">
          <h1 className="font-sans font-bold text-white sm:font-extrabold sm:text-4xl tracking-widest">Unlimited movies,Tv shows and more.</h1>
          <p>Just click on the button to get started</p>
          <div className="flex items-center flex-col sm:flex-row justify-center">
          <input className="bg-white px-2 py-1 mb-3 mt-5 sm:w-400 sm:h-50 text-black object-contain" placeholder="Email address" />
          <button className="bg-red-600 px-2 py-1 sm:ml-5 font-semibold sm:h-50 tracking-widest text-white" 
              onClick={() => router.push('/')}
          >Get started</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Cover