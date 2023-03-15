import '../styles/template.css';
import { useState } from 'react';

function Template({propFunAdd}) {
    const [Valuetitulo, setValuetitulo] = useState("");
    const [Valuetext, setValuetext] = useState("");
    const valueSubmit = (e)=>{
        propFunAdd(Valuetitulo, Valuetext);
        setValuetitulo("");
        setValuetext("");
        e.preventDefault();       
    };
    return (
        <div className="template">      
            <form onSubmit={valueSubmit} className="templateForm">
                <textarea 
                    type="text" 
                    placeholder="Crear Título."
                    onChange={ (e)=>setValuetitulo(e.target.value)}
                    value={Valuetitulo}
                    className="inputtemplate"
                    maxLength="30"   
                />
                <button type="submit" className="buttontemplate">✅</button>
                <textarea 
                    placeholder="Crear Nota."
                    onChange={ (e)=>setValuetext(e.target.value)}
                    value={Valuetext}
                    className="textareatemplate"
                    maxLength="140"
                />                        
            </form>       
        </div>
    );
}

export default Template;