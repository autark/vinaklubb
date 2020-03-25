import React from 'react';
import logo from './assets/resultat.jpg';

export const Resultat = () => {
    return (
        <div>
            <h2>Vina D2 resultater</h2>  
            <p>&nbsp;</p>   
            <img src={logo} height= "100%" style={{height:'auto',width:'100%'}} />   
            <p>&nbsp;</p>       
            <a target = "_blank" href="https://volleyball.no/kamper-og-resultat-senior/#tab-1569233637-1-25" id="thelink">Trykk her for nyeste resultater</a>         
        </div>
    )
}
