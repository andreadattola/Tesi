import React, { useState } from 'react'
import './modale.css'
import VeraModale from './VeraModale'
export default function Modale({museo}){
  const [verMod, setVerMod]= useState(false)
  const scopri = () =>{
    alert('stai per scoprire')
    setVerMod(!verMod)
  }
  console.log(museo.nome)
    return ( 
  (museo.nome)?(
    
   
        <div className="container my-5">
        <div className="row modale">
            <div className="col-10 offset-1">
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Tipo</th>
      <th scope="col">Comune</th>
      <th scope="col">provincia</th>
      <th scope="col">Categoria</th>
      <th scope="col">Localita</th>
      <th scope="col">Apertura</th>
      <th scope="col">Indirizzo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="col">{museo.nome}</td>
      <td scope="col">{museo.tipo}</td>
      <td scope="col">{museo.comune}</td>
      <td scope="col">{museo.provincia}</td>
      <td scope="col">{museo.categoria}</td>
      <td scope="col">{museo.localita}</td>
      <td scope="col">{museo.apertura}</td>
      <td scope="col">{museo.indirizzo}</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
<div className="row">
  <div className="col-10 offset-1 text-center">
    <h1 onClick={()=>{scopri()}} className="btn btn-outline-secondary">Scopri di piu</h1>
  </div>
</div>
{verMod && <VeraModale descrizione = {museo}></VeraModale>}
        </div>
    
    ):(<div className="row">
      <div className="col-10 offset-1">
          <h3>Insert Name es: ECOMUSEO DELL'ALABASTRO PUNTO MUSEALE CENTRALE</h3>
      </div>
    </div>)
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