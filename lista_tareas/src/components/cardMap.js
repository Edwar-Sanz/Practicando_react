import Card from "./card.js"
import '../styles/card.css';

function CardMap({propDataList, FunBorrarElemento}) { //recibe los datos y la funcion para borrar

    return (
        <>
        {
            propDataList.map( //crea cada elemento de la data crea un componente <Card>
                (item, index)=>{
                    return(                   
                            <Card  
                                key={index}
                                elemento_del_array={item}
                                propFunBorrarElementocard={FunBorrarElemento}
                                propIndice_del_arrayCard={index}
                                
                            />                   
                    )
                }
            )
        }       
        </>
    );
}

export default CardMap;