import mictiWoa from "@/assets/mictiWoa.png";
import "./home.css";


export function Home() {
    return (
        <main id="home">
            <section className="construction">Sitio en Construcción</section>

            <section className="logo-section">
                <img src={mictiWoa} alt="Logo mictia00" />
                <h1>@Mictia00</h1>
                <h2>Streamer ・ Creadora de contenido ・ Ilustradora</h2>
            </section>

            <section className="schedule">
                <div className="divider">═─────── ✦ ───────═</div>
                <ul>
                    <li><a href="https://www.twitch.tv/mictia00" target="_blank" className="platform" data-schedule="4PM - 8PM Perú">Twitch</a>
                    </li>
                    <li><a href="https://kick.com/mictia00" target="_blank" className="platform" data-schedule="8PM - 12PM Perú">Kick</a></li>
                    <li><a href="https://www.instagram.com/abriguerra" target="_blank">Instagram</a></li>
                    <li><a href="https://twitter.com/Mictia00" target="_blank">X</a></li>
                    <li><a href="https://discord.com/invite/cosmicat" target="_blank">Discord Server</a></li>
                </ul>
                <div className="divider">✦</div>
                <div className="platform-title">YOUTUBE</div>
                <ul>
                    <li><a href="https://www.youtube.com/@MictiaClips" target="_blank">Mictia+ 𝄀 CANAL DE CLIPS</a></li>
                    <li><a href="https://www.youtube.com/@MictiaTV" target="_blank">Mictia TV🔴 𝄀 REACCIONES</a></li>
                    <li><a href="https://www.youtube.com/@MictiaGAME" target="_blank">Mictia GAME 🕹️ 𝄀 GAMEPLAYS</a></li>
                    <li><a href="https://www.youtube.com/@VodsDeMictia00" target="_blank">Mictia VODS</a></li>
                </ul>
                <div className="divider">✦</div>
                <div className="platform-title">TIKTOK</div>
                <ul>
                    <li><a href="https://www.tiktok.com/@mictia00?lang=es" target="_blank">TIKTOK GAMEPLAYS</a></li>
                    <li><a href="https://www.tiktok.com/@mictiagenerica?lang=es" target="_blank">TIKTOK GENERICO</a></li>
                </ul>
                <div className="divider">═─────── ✦ ───────═</div>
            </section>

            <section className="contact">
                <a title="Email" href="mailto:mictia@arigatou.es" target="_blank">
                    <h2>✉️ mictia@arigatou.es</h2>
                </a>
            </section>
        </main>
    );
}
