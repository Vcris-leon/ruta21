
import { useState } from "react";
function Card(){
  
  const [email, setEmail] = useState("");
 

    return (<div className="card" style={{width: '500px',}}>
  
    
 

<div>
            <label className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none" placeholder="usuario@correo.com"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password 
            </label>
            <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none" placeholder="usuario@correo.com"/>
          </div>
          <a href="#" className="btn btn-primary">Ingresar</a>
          </div>


    );
 
}

export default Card;