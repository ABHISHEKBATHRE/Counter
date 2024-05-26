import { useState } from "react"

function App() {
  const [count,setcount]=useState(0);
return (
    <>
    <header className="bg-orange-400 text-black h-11 flex items-center justify-center">
     WELCOME TO THE COUNTER 
    </header>
       <div className="bg-black text-white flex justify-center items-center  m-auto" style={{backgroundImage:`url("https://img.freepik.com/free-vector/gradient-numerology-background_23-2150066816.jpg")`, height:'calc(90vh)', backgroundRepeat:'no-repeat',backgroundSize:'100vw '}}>
        <div className="box bg-black text-white w-32 h-11 rounded-2xl flex justify-center items-center">
        {count}
        </div>
       </div>
       <div className="b1 flex justify-between bg-stone-500 absolute bottom-0 w-[100%] h-[50px] rounded-xl">
       <button onClick={()=>setcount(count=>count+1)} className="bg-black text-white rounded-xl p-2">Increase Count</button>
       <button onClick={()=>setcount(count=>count-1)} className="bg-black text-white rounded-xl p-2">Decrease Count</button>
       </div>
    </>
  )
}

export default App
