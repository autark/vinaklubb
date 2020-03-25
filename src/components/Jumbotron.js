import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import nett from './../assets/vb1.jpg';
import logo from './../assets/logo3.jpg';

const Styles = styled.div`
.jumbo{
    background: url(${nett}) fixed center no-repeat;
    height: 300px;  
    width:auto;    
    background-size: cover;  
    background-color: black!important;
   
}

.overlay{
    backround-color:#000;
    opacity: 0.6;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1
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
`;


export const Jumbotron =() => (
 <Styles>
     {/* <div className = "bg-img">    </div>  */}
     <Jumbo fluid className ="jumbo" >
         {/* <div className ="overlay" ></div>         */}
     </Jumbo>
 </Styles>
)
