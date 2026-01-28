import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./HomePage.css";
import ODataIntro from "@/assets/ODataIntro.png";
import ODataRequest from "@/assets/ODataRequest.png";

export default function Homepage() {
 


  return (
    <div className="container">
      <header className="header">
        PRN232 - Group 8
      </header>

      <main className="content">
        <h1 className="chapter-title">
          Chapter 4: Introduction to ODATA and Request Data with ODATA
        </h1>

        {/* Diagram 1 */}
        <section className="diagram-container">
          <div className="image-placeholder">
             <img src={ODataIntro} alt="OData Intro" /> 
          </div>
          <p className="caption">Diagram 1: OData Introduction</p>
        </section>

        {/* Diagram 2 */}
        <section className="diagram-container">
          <div className="image-placeholder">
            <img src={ODataRequest} alt="OData Request"  /> 
          </div>
          <p className="caption">Diagram 2: Data Request with ODATA</p>
        </section>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
