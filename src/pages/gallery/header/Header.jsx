import NavBar from "../../../components/navBar/NavBar";
import "./Header.css";

import React from 'react'

export default function Header() {
  return (
    <div className="gallery-header">
        <NavBar />
        <div className="gallery-header-bg">
          <div className="gallery-header-text">
                    Step into a realm where canvases breathe life, colors converse, and each stroke tells a story – welcome to an art gallery that transcends the ordinary, where my creations beckon you to explore the extraordinary.
          </div>
        </div>
    </div>
  )
}
