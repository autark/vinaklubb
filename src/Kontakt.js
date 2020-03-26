import React from 'react';
import logo from './assets/logo.png';

export const Kontakt = () => {
    return (
        <div>
            <h2>Kontakt oss</h2>
            <p>Lagene er åpne for nye spillere som er interessert i volleyball og bli kjent med nye mennesker! Har du spørsmål eller vil prøvespille? Ta kontakt med oss.</p>
            <div className="container-fluid d-flex justify-content-center" >
                <div className="card text-center">
                    <h4>Klubbleder:</h4>
                    <p > Trung +4799860792 </p>
                </div>
                <div className="card text-center">
                    <h4>Nestleder:</h4>
                    <p > D. Phuong +4745604552 </p>
                </div>
                <div className="card text-center">
                    <h4>Coach D2:</h4>
                    <p> Tung +4797539525 </p>
                </div>            
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <img className="center" src={logo} height="200rem" />
        </div>
    )
}
