import React from 'react'; 
import ReactDom from 'react-dom'


export default function VeraModale({descrizione}) {
    const modaleDiv = document.getElementById('modale')

    return ReactDom.createPortal(
            ( 
                
                    <div className="container " style = {{display: 'block'}}>
                        <div className="row">
                            <div className="col-10 offset-1">
                                <p>{descrizione.nome}</p>
                                <p>{descrizione.tipo}</p>
                                <p>{descrizione.indirizzo}</p>
                                <p>{descrizione.provincia}</p>
                                <p>{descrizione.COMUNE}</p>
                                <img src='https://picsum.photos/id/1/200/300'></img>
                            </div>
                        </div>
                    </div>
                
            ),modaleDiv
        )
    
}


/* 

		obj = {
			nome : itm.MUSEO,
			tipo : itm.TIPOLOGIA,
			comune: itm.COMUNE,
			provincia: itm.PROV,
			categoria : itm.CATEGORIA_PREVALENTE,
			localita : itm.LOCALITA ,
			apertura : itm.APERTURA_SEDE,
			indirizzo : itm.INDIRIZZO_SEDE
		
		};	

*/