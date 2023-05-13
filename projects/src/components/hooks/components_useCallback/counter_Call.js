import { useCallback, useMemo, useState } from "react";

const CounterWithCallback = () => {

    //estado inicial del contador
    const [cont, setCont] = useState(0);

    // esta función se crear y llama con cada render
    const doble = () => {return cont * 2;}

    // define la función a memorizar y las dependencias
    const callback = useCallback(doble, [cont]);
    const memo = useMemo(doble, []);

    // callback devuelve la funcion o la puede ejecutar
    console.log(callback); 
    console.log(callback());
    // memo la ejecuta
    console.log(memo);
    // console.log(memo()); esto no se puede

    return <div>
        <button onClick={() => setCont(cont + 1)}>INCREMENTAR</button>
        <p>{cont}</p>
    </div>
}

export default CounterWithCallback;