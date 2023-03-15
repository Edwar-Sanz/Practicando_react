import Card from "./card.js"
import '../styles/card.css';

function CardMap({propDataList, FunBorrarElemento, FunEditElement}) {

    return (
        <>
            {
                propDataList.map(
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