import React from 'react';
import vina from './assets/vina.jpg';


export const Hjem = () => {
    return (
        <div >
            <h2>Vina volleyballklubb</h2>
            <p> Vina Volleyballklubb består av 4 lag i sesongen 2019/2020 som spiller senior volleyball i region Øst. Det er to herrelag (4. divisjon og 5.divisjon) og to damelag (4. divisjon og 5. divisjon). 
            <p>&nbsp;</p>
                Her er bildet av D2:            
                </p>       
                <div className = "sm">
                <img src={vina} height= "100%" style={{height:'auto',width:'100%'}}/>
            </div>     
        </div>
    )
}
