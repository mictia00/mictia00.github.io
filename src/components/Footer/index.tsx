import "./footer.css";


export function Footer() {
    return (
        <footer id="footer">
            <p className="p-1">
                Este sitio <strong>no es oficial</strong> y está en <em>construcción</em> <span>✨</span>
            </p>
            <p className="p-2">
                ¿Te gustaría contribuir? Visita el repositorio en
                {' '}
                <a href="https://github.com/mictia00/mictia00.github.io" target="_blank">GitHub</a>
                {' '}
                y forma parte del desarrollo <span>💖</span>
            </p>
        </footer>
    );
}