import '../styles/template.css';
import { useState } from 'react';

function Template({propFunAdd}) { //la funcion que agrega llega por el prop

//---------------estados----------------------------------
    const [Valuetitulo, setValuetitulo] = useState("");
    const [Valuetext, setValuetext] = useState("");

//-----------maneja el evento submit------------------------
    const valuesSubmit = (e)=>{ // recoje el valor de los input
        propFunAdd(Valuetitulo, Valuetext); //se le pasan los valores a la funcion que agrega
        //
        setValuetitulo("");
        setValuetext("");
        e.preventDefault();       
    };
//--------------elementos------------------------
    return (
        <div className="template">      
            <form onSubmit={valuesSubmit} className="templateForm"> 
                <textarea 
                    type="text" 
                    placeholder="Crear Título."
                    onChange={ (e)=>setValuetitulo(e.target.value)} //cuando va escribiendo establece el valor
                    value={Valuetitulo} // para resetear a "" despues de agregar
                    className="inputtemplate"
                    maxLength="30"   
                />
                <button type="submit" className="buttontemplate">✅</button>
                <textarea 
                    placeholder="Crear Nota."
                    onChange={ (e)=>setValuetext(e.target.value)} //cuando va escribiendo establece el valor
                    value={Valuetext} // para resetear a "" despues de agregar
                    className="textareatemplate"
                    maxLength="140"
                />                        
            </form>       
        </div>
    );
}

export default Template;