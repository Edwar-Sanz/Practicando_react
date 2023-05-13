import '../styles/template.css';
import { useState } from 'react';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
//--------------------------------------

    return (
        <Card sx={{ minWidth: 275}} >
            <CardContent >
            <form onSubmit={valuesSubmit} className="templateForm">
                <Typography gutterBottom variant="h5" component="div">
                <textarea 
                    type="text" 
                    placeholder="Crear Título."
                    onChange={ (e)=>setValuetitulo(e.target.value)} //cuando va escribiendo establece el valor
                    value={Valuetitulo} // para resetear a "" despues de agregar
                    className="inputtemplate"
                    maxLength="30"   
                />
                </Typography>
                <Typography variant="body2">
                <textarea 
                    placeholder="Crear Nota."
                    onChange={ (e)=>setValuetext(e.target.value)} //cuando va escribiendo establece el valor
                    value={Valuetext} // para resetear a "" despues de agregar
                    className="textareatemplate"
                    maxLength="140"
                />
                </Typography>
                <CardActions>                  
                <Button size="small" type="submit" className="buttontemplate">✅Agregar</Button>
                </CardActions>    
                
            </form>   
            </CardContent>      
        </Card>
        
        
    );
}

export default Template;