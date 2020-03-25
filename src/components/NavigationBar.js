import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo3.jpg';

const Styles = styled.div`
.navBar{
    background-color: #888 !important; 
    display:float;
     
}
.navbar-brand, .navbar-nav .nav-link{
    color:white; 
    font-size: 13px; 
    background-color: black;  
    width:auto; 
  

&:hover{
    color:grey;
    }    
}
.bg-img {
    /* The image used */
    background-image: url(${logo});
  
    min-height: 110px;
  
    /* Center and scale the image nicely */
    backround-attachement:fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:black;
  
    /* Needed to position the navbar */
    position: relative;
  }
  .custom-toggler.navbar-toggler { 
    border-color: lightgreen; 
} 
/* Setting the stroke to green using rgb values (0, 128, 0) */ 
  
.navbar-toggler-icon { 
    background-image: url( 
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABkCAMAAACCTv/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////5ubmueBsSwAAAAJ0Uk5T/wDltzBKAAAAPklEQVR42uzYQQ0AAAgDseHfNC4IyVoD912WAACUm3uampqampqamq+aAAD+IVtTU1NTU1NT0z8EAFBsBRgAX+kR+Qam138AAAAASUVORK5CYII="); 
} 
  
    `;

export const NavigationBar = () => (

    <Styles>
        <div className="bg-img">
            <Navbar expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav">       
                <span className="navbar-toggler-icon"></span>            
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item><Nav.Link href="/">Hjem</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/D1">D1</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/D2">D2</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/H1">H1</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/H2">H2</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Kamp">Kamper/Rankinger</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Resultat">Resultater</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Bilder">Bilder</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Video">Video</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/Kontakt">Kontakt oss</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </Styles>

)



