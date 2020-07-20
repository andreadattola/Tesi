import React, { useState, useContext, useEffect } from 'react';
import * as utils from './Utility';
import MyContext from '../MyContext'
import Modale from './Modale'

const URL = 'http://servizi.toscana.it/RT/mappe/MuseiAllxOD.json'
export default function Home() {
	const [objMuseo, setObjMuseo] = useState({})
	//const contesto = useContext(MyContext)
	const [dati, setDati] = useState([])

	useEffect(() => {
		const inserDate =[]
		const getDati = async () => {
			const dati$ = await fetch(URL).then(res => res.json()).then((res) => {
				res.MuseiAllxOD.SelMusei.map((ele,i)=>{
					if (ele.PROV == 'PI')
					inserDate.push(ele)
					
				});
				
			})
			setDati(inserDate);
	
		}
		getDati()
	}, [])

const ricerca = (e) =>{
	var obj = {};
	dati.map((itm)=>{
	if(e.currentTarget.value == itm.MUSEO ){
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
		
	}
})
setObjMuseo(obj)
console.log(objMuseo)	
}
console.log(dati)
	return (
		<>
			<div className="row">
				<div className="col-8 offset-2">
					<h1>Home</h1>
					<div className="input-group-append">
						<input onKeyUp={ricerca} type="text" className="form-control"></input>		
					</div>
				</div>
			</div>
			<Modale museo = {objMuseo}></Modale>

		</>
	)
}