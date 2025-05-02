
import { route } from "preact-router";

import SpaceCat from "@/assets/spacecat.png";
import "./404.css";


export function NotFound404() {
    return (
        <main id="notfound404">
            <div class="stars-1"></div>
            <div class="stars-2"></div>
            <div class="container">
                <img src={SpaceCat} alt="Space Cat" class="cat-img" />
                <h1 class="title">404</h1>
                <p class="subtitle">¡Ups! Parece que te has perdido en el espacio.</p>
                <button onClick={()=> route("/")} class="btn-home">Volver al inicio</button>
            </div>
        </main>
    );
}