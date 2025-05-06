import picture from "@/assets/mictia00.webp";
import "./home.css";


export function Home() {
    return (
        <main id="home">
            <section className="logo-section">
                <div className="logo-container">
                    <img src={picture} alt="Logo mictia00" />
                </div>
                <h1>@Mictia00</h1>
                <h2>Streamer ・ Creadora de contenido ・ Ilustradora</h2>
            </section>

            <section className="schedule">
                <div className="divider">═─────── ✦ ───────═</div>
                <ul>
                    <li><a href="https://www.twitch.tv/mictia00" target="_blank" className="platform" data-schedule="4PM - 8PM Perú">TWITCH</a></li>
                    <li><a href="https://kick.com/mictia00" target="_blank" className="platform" data-schedule="8PM - 12PM Perú">KICK</a></li>
                    <li><a href="https://www.instagram.com/abriguerra" target="_blank">INSTAGRAM</a></li>
                    <li><a href="https://twitter.com/Mictia00" target="_blank">X</a></li>
                    <li><a href="https://discord.com/invite/cosmicat" target="_blank">DISCORD SERVER</a></li>
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
                    <li><a href="https://www.tiktok.com/@mictiagenerica?lang=es" target="_blank">GENERICO</a></li>
                    <li><a href="https://www.tiktok.com/@mictia00?lang=es" target="_blank">GAMEPLAYS</a></li>
                    <li><a href="https://www.tiktok.com/@dantekuroneko?lang=es" target="_blank">DANTE</a></li>
                </ul>
                <div className="divider">✦</div>
                <div className="platform-title">COMUNIDAD</div>
                <ul>
                    <li><a href="https://www.reddit.com/r/CosmiCats/" target="_blank">REDDIT</a></li>
                    <li><a href="https://x.com/i/communities/1671186509355970561" target="_blank">X</a></li>
                    <li><a href="https://www.facebook.com/MictiaFB" target="_blank">FACEBOOK</a></li>
                </ul>
                <div className="divider">✦</div>
                <div className="platform-title">OTROS</div>
                <ul>
                    <li><a href="https://open.spotify.com/playlist/121NBEMce228qZggWZ6iYn?si=14bb942cfaf74f01" target="_blank">SPOTIFY 🎵 | MICTIANOS </a></li>
                    <li><a href="https://www.streamloots.com/mictia00" target="_blank" className="platform" data-schedule="Twitch & Kick">STREAMLOOTS</a></li>
                    <li><a href="https://streamelements.com/mictia00/" target="_blank">STREAM ELEMENTS</a></li>
                    <li><a href="https://www.instagram.com/mizucatgallery/" target="_blank" data-schedule="Ex gatito de Mictia" className="platform">INSTAGRAM MIZU</a></li>
                    <li><a href="https://www.instagram.com/micti_/" target="_blank" data-schedule="Cuenta secundaria" className="platform">INSTAGRAM MICTI_</a></li>
                </ul>
                <div className="divider">═─────── ✦ ───────═</div>
            </section>

            <section className="contact">
                <h1>Contáctame</h1>
                <ul>
                    <li>
                        <a title="Email" href="mailto:mictia@arigatou.es" target="_blank" rel="noopener noreferrer">
                            <div className="email-card">
                                <span className="icon">✉️</span>
                                <span className="text">mictia@arigatou.es</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a title="Email" href="mailto:mictia@webedia-group.com" target="_blank" rel="noopener noreferrer">
                            <div className="email-card">
                                <span className="icon">✉️</span>
                                <span className="text">mictia@webedia-group.com</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
