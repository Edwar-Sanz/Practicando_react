import { useState } from 'react';
import { useEffect } from 'react';

//---------------------------useEffect--------------------------------------------
export const Effect = () => {

    const [users, setUsers] = useState([]); // estado inicial una lista vacía
  
    //esto se ejecuta despues del renderizado
    useEffect(() => {
      // se lanza la peticion a la api después del render
      fetch('https://reqres.in/api/users')
        .then(data => data.json())
        .then(json => setUsers(json.data));
    },
    // en el array se ponen las variables que al cambiar 
    //hace que se ejecute el useEffect
    []); 
  
    return <div>
        <h2>useEffect</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.first_name} {user.last_name}</li>
            ))}
        </ul>
    </div>
  }
