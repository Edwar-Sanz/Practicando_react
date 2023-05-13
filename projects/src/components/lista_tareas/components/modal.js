import '../styles/modal.css';
import { useState, useEffect} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ModalCard({elem, Open, isClose, handleEdit}) {
  //console.log(element.value);
  const [element, setElement] = useState({});
  const [Valuetitulo, setValuetitulo] = useState(null);
  const [Valuetext, setValuetext] = useState(null);

  useEffect(
    ()=>{
      setElement(elem);
      setValuetitulo(element.title);
      setValuetext(element.msj);

    }
    ,[elem,element.title, element.msj ]
  );
  //debugger

  const FunSaveEdit = ()=>{
    const nuevoElemento = {
        title: Valuetitulo,
        msj: Valuetext
    };
    handleEdit(nuevoElemento);
    isClose()
};
  //debugger

    if (Open === true){
        return(
            <Modal
            open={Open}
            onClose={isClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal">
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">    
                <textarea 
                    className="modal_title" 
                    value={Valuetitulo}
                    onChange={(e)=>setValuetitulo(e.target.value)}>                  
                </textarea>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>  
                <textarea 
                    className="modal_msj"  
                    value={Valuetext}
                    onChange={(e)=>setValuetext(e.target.value)}> 
                </textarea>
                </Typography>     
                <Button onClick={() => FunSaveEdit()}>✅Guardar</Button>
                </Box>
            </Modal>
        );
    }
  }

export default ModalCard;