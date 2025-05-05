import { useState } from "preact/hooks";
import { route } from "preact-router";

import Logo from "@/assets/mictiWoa.png";
import Menu from "@/assets/burger.png";
import CloseMenu from "@/assets/burger_x.png";
import "./navbar.css";


const navbarContent: { text: string, path: string }[] = [
    // Example: { text: 'Home', path: '/' },
];

export function Navbar() {
    const [viewOverlay, setViewOverlay] = useState(false);

    const toggleViewOverlay = () => setViewOverlay(!viewOverlay);
    const clickLink = (path: string) => () => { viewOverlay && toggleViewOverlay(); route(path); };
    const ulContent = <ul>{navbarContent.map((nc) => <li onClick={clickLink(nc.path)}>{nc.text}</li>)}</ul>;
    
    return (
        <>
            {/* Navbar principal */}
            <nav id="navbar">
                <div class="brand">
                    <img src={Logo} alt="Logo" />
                    <h1 onClick={clickLink('/')}><em>@Mictia00</em></h1>
                </div>
                {ulContent}
                <img onClick={toggleViewOverlay} src={viewOverlay ? CloseMenu : Menu} alt="Menú" class="toggle-icon" id="toggleIcon" />
                {/* Overlay para el menú en dispositivos móviles */}
                <div className={`overlay ${viewOverlay ? 'active': ''}`}>
                    <div class="brand">
                        <img src={Logo} alt="Logo" />
                        <h1 onClick={clickLink('/')}>@Mictia00</h1>
                    </div>
                    <h2>Streamer ・ Creadora de contenido ・ Ilustradora</h2>
                    {ulContent}
                </div>
            </nav>
        </>
    );
}