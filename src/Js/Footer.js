import React from "react";

import "../Css/Footer.css"

import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMap } from "react-icons/fa";


export default function Footer() {

    return (
        <footer className="footer">
        <div className="social">
          <a href="https://instagram.com/palacios1665?utm_medium=copy_link">
            <FaInstagram  size="40" color="#fff"/>
          </a>
          <a href="https://www.youtube.com/channel/UCmZBj7PF2XN2xF7JLuuqVQw">
            <FaYoutube  size="40" color="#fff"/>
          </a>
          <a href="https://www.facebook.com/angel.palacios.1447">
            <FaFacebook  size="40" color="#fff"/>
          </a> 
          <a href="https://www.tiktok.com/@pma_2219">
            <FaTiktok  size="40" color="#fff"/>
          </a>  
          <a href="https://twitter.com/AngelPalaciosM5">
            <FaTwitter  size="40" color="#fff"/>
          </a> 
          <a href="#">
            <FaTwitch size="40" color="#fff"/>
          </a> 
          <a href="https://discord.gg/wyYqqx5N">
            <FaDiscord size="40" color="#fff"/>
          </a>  
          <a href="https://api.whatsapp.com/send?phone=+7226857447&text=Hola%21%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Sorteo.">
            <FaWhatsapp size="40" color="#fff"/>
          </a> 
          <a href="https://maps.app.goo.gl/LUSzhHBG3aw6gbsE9">
            <FaMap size="40" color="#fff"/>
          </a>
        </div>
        <p className="copyright">Made with by <FaHeart color="#B51942"/> Speak up Tech</p>
      </footer>
    )
  }

  