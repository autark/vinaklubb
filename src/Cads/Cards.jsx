import React, { Component } from 'react'
import { Card } from "./CardUI";
import coach from './../assets/coach4.jpg';
import jennie from './../assets/Jennie.JPG';
import hiing from './../assets/Hiing.JPG';
import hami from './../assets/Hami.JPG';
import ht from './../assets/HTrang3.jpg';
import maithy from './../assets/maithy1.jpeg';
import hien from './../assets/Hien.JPG';
import linda from './../assets/linda2.jpg';
import dp from './../assets/DP.JPG';
import mt from './../assets/MT.JPG';
import gl from './../assets/GL.JPG';
import mary from './../assets/Mary.JPG';
import son from './../assets/Son.JPG';

const Cards = () => {

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row row-spacer">

                <div className="col-md-4 ">
                    <p>&nbsp;</p>
                    <Card imgsrc={coach} description="Coach" navn="Navn: Tung Thanh Doan" born="Født: 1990" posisjon="&nbsp; " />
                    <p>&nbsp;</p>
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={jennie} description="#1" navn="Navn: Jennie Vu " born="Født: 1993 " posisjon="Posisjon: Legger" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={hami} description="#2" navn="Navn: Ha-Mi Truong " born="Født: 1998 " posisjon="Posisjon: Midt/Kant" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={linda} description="#3" navn="Navn: Linda Minh Le" born="Født: 1997" posisjon="Posisjon: Kant/Dia" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={maithy} description="#4" navn="Navn: Mai Thy Duy Vo" born="Født: 1983" posisjon="Posisjon: Midt" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>

                    <Card imgsrc={hien} description="#5" navn="Navn: Hien Anh Nguyen" born="Født: 1994" posisjon="Posisjon: Midt/Kant" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={mary} description="#6" navn="Navn: Mary Linh Nguyen " born="Født: 1993" posisjon="Posisjon: Midt/Kant/Legger" />
                    <p>&nbsp;</p>
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={mt} description="#7" navn="Navn: Minh Thy Tran " born="Født: 1984" posisjon="Posisjon: Kant" />
                </div>
                <div className="col-md-4">
                    <p>&nbsp;</p>
                    <Card imgsrc={ht} description="#8" navn="Navn: Hong Trang Thi Nguyen " born="Født: 1981" posisjon="Posisjon: Midt/Kant" />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={dp} description="#9" navn="Navn: Dong Phuong Thi Lam " born="Født: 1978" posisjon="Posisjon: Kant/Dia/Libero" />
                    <p>&nbsp;</p>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={gl} description="#10" navn="Navn: Gia Linh Han " born="Født: 2002" posisjon="Posisjon: Midt/Kant" />
                    <p>&nbsp;</p>
                </div>

                <div className="col-md-4">
                    <Card imgsrc={son} description="#11" navn="Navn: Son Ta " born="Født: 1993" posisjon="Posisjon: Libero" />
                </div>

                <div className="col-md-4">
                    <Card imgsrc={hiing} description="#12" navn="Navn: Hien Thi Thanh Le" born="Født: 1997" posisjon="Posisjon: Legger" />
                    <p>&nbsp;</p>
                </div>

            </div>
        </div>
    );
}

export default Cards;