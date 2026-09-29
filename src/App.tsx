import { useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowUpRight, Check, Globe2, Instagram, Languages,
  Menu, MessageCircle, Send, Sparkles, X,
} from "lucide-react";

const instagramAcademy = "https://www.instagram.com/juhal.academy/";
const instagramTeacher = "https://www.instagram.com/espanhol.argentina/";
const whatsappUrl = "https://wa.me/message/PEOPTGUMLEV3N1";

const spanishWorld = [
  ["ar","Argentina"],["bo","Bolívia"],["cl","Chile"],["co","Colômbia"],
  ["cr","Costa Rica"],["cu","Cuba"],["ec","Equador"],["es","Espanha"],
  ["gt","Guatemala"],["mx","México"],["pa","Panamá"],["py","Paraguai"],
  ["pe","Peru"],["uy","Uruguai"],["ve","Venezuela"],
] as const;

const argentinaHeroImage =
  "https://upload.wikimedia.org/wikipedia/commons/b/b7/Argentinian_Flag%2C_Casa_Rosada%2C_Buenos_Aires.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const goal = String(form.get("goal") || "").trim();
    const level = String(form.get("level") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = [
      "Olá! Vim pelo site da Juhal Academy.",
      "",
      name ? `Nome: ${name}` : "",
      goal ? `Objetivo: ${goal}` : "",
      level ? `Nível atual: ${level}` : "",
      message ? `Mensagem: ${message}` : "",
    ].filter(Boolean).join("\n");

    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <img className="brand-mark" src="/argentina-flag.svg" alt="Argentina" />
          <span className="brand-copy"><strong>JUHAL ACADEMY</strong><span>INGLÊS • ESPANHOL</span></span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <button type="button" onClick={() => scrollTo("sobre")}>A experiência</button>
          <button type="button" onClick={() => scrollTo("aulas")}>Aulas</button>
          <button type="button" onClick={() => scrollTo("mundo")}>O idioma</button>
          <button type="button" onClick={() => scrollTo("contato")}>Contato</button>
        </nav>

        <div className="header-actions">
          <a className="header-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp</a>
          <a className="header-cta" href={instagramAcademy} target="_blank" rel="noreferrer"><Instagram size={17}/> @juhal.academy <ArrowUpRight size={16}/></a>
        </div>

        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <section id="inicio" className="hero section-pad">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"/> Professora nativa argentina 🇦🇷</div>
            <h1>Aprenda espanhol.<span>Fale com confiança.</span></h1>
            <p className="hero-lede">Aulas de espanhol com uma professora nativa argentina para quem quer aprender de verdade, desenvolver conversação e avançar com mais segurança.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Quero aprender espanhol <MessageCircle size={18}/></a>
              <button className="button button-ghost" type="button" onClick={() => scrollTo("aulas")}>Conhecer as aulas <ArrowDown size={18}/></button>
            </div>
            <div className="hero-note"><span className="argentina-chip"><img src="/argentina-flag.svg" alt="" /></span><span>+1.800 alunos já aprenderam com a Juhal.</span></div>
          </div>

          <div className="hero-art">
            <img
              className="hero-photo"
              src={argentinaHeroImage}
              alt="Bandeira da Argentina hasteada em Buenos Aires"
              loading="eager"
            />
            <div className="hero-photo-overlay" />
            <div className="hero-photo-caption">
              <span>ARGENTINA</span>
              <strong>El español que conecta.</strong>
              <small>Foto: CivArmy / Wikimedia Commons · CC BY-SA 4.0</small>
            </div>
          </div>
        </div>
        <button className="scroll-cue" type="button" onClick={() => scrollTo("sobre")}><span>Explorar</span><ArrowDown size={18}/></button>
      </section>

      <section className="stats-band">
        <div><strong>+1.800</strong><span>alunos</span></div>
        <div><strong>🇦🇷</strong><span>professora nativa</span></div>
        <div><strong>SIELE</strong><span>preparação</span></div>
        <div><strong>CELU</strong><span>preparação</span></div>
      </section>

      <section id="sobre" className="editorial section-pad">
        <div className="section-index">01</div>
        <div className="editorial-inner">
          <div className="section-kicker">A experiência Juhal</div>
          <div className="editorial-grid">
            <div><h2>Mais que estudar espanhol.<span>É começar a viver o idioma.</span></h2></div>
            <div className="editorial-text">
              <p>Aprender com uma professora <strong>nativa argentina</strong> aproxima você da pronúncia, do ritmo e das expressões que fazem parte da comunicação real.</p>
              <p>A Juhal Academy ajuda você a transformar o espanhol em uma habilidade prática, para conversar, compreender e se comunicar com mais naturalidade.</p>
              <div className="authority-line"><span className="authority-number">+1.800</span><div><strong>alunos já aprenderam</strong><span>com a Juhal Academy</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="aulas" className="learn section-pad">
        <div className="section-index">02</div>
        <div className="learn-inner">
          <div className="section-kicker">Aprender com propósito</div>
          <div className="learn-heading"><h2>Um idioma para <span>viver mais.</span></h2><p>Escolha o objetivo que mais combina com o momento em que você está.</p></div>
          <div className="learn-grid">
            <article className="learn-card"><span className="learn-symbol">01</span><Globe2 size={23}/><h3>Espanhol do zero</h3><p>Comece do básico e desenvolva uma base sólida para compreender e se comunicar.</p></article>
            <article className="learn-card featured"><span className="learn-symbol">02</span><MessageCircle size={23}/><h3>Conversação</h3><p>Pratique situações reais e ganhe mais confiança para usar o idioma.</p></article>
            <article className="learn-card"><span className="learn-symbol">03</span><Sparkles size={23}/><h3>SIELE & CELU</h3><p>Organize seus estudos e prepare-se para exames de proficiência em espanhol.</p></article>
          </div>
          <div className="phrase-band"><span>Una lengua.</span><strong>Muchos mundos.</strong><span className="phrase-accent">Una nueva forma de conectar.</span></div>
        </div>
      </section>

      <section id="mundo" className="world section-pad">
        <div className="section-index section-index-light">03</div>
        <div className="world-inner">
          <div className="section-kicker section-kicker-light">El mundo hispánico</div>
          <div className="world-heading">
            <div><h2>Uma língua, <span>muitos lugares.</span></h2><p>Conheça um pouco do mundo hispânico e das diferentes culturas conectadas pelo espanhol.</p></div>
            <div className="world-counter"><strong>🇦🇷</strong><span>Argentina como ponto de partida</span></div>
          </div>
          <div className="country-grid">
            {spanishWorld.map(([code,country]) => (
              <div className="country-pill" key={country}>
                <span className="country-flag">
                  <img
                    src={`https://flagcdn.com/w80/${code}.png`}
                    alt={`Bandeira da ${country}`}
                    loading="lazy"
                  />
                </span>
                <strong>{country}</strong>
              </div>
            ))}
          </div>
          <div className="argentina-feature"><div className="argentina-sun">☼</div><div><span>EL ESPAÑOL DE ARGENTINA</span><strong>Vos, che, dale.</strong><p>Aprenda também o ritmo, as expressões e as particularidades do espanhol argentino.</p></div></div>
        </div>
      </section>

      <section id="contato" className="contact section-pad">
        <div className="section-index">04</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="section-kicker">Inscrições abertas</div>
            <h2>Seu espanhol <span>começa aqui.</span></h2>
            <p>Preencha a triagem e envie as respostas diretamente para o WhatsApp.</p>
            <div className="contact-links">
              <a className="contact-meta" href={whatsappUrl} target="_blank" rel="noreferrer"><div className="meta-icon"><MessageCircle size={20}/></div><div><span>WhatsApp</span><strong>Falar com a professora</strong></div><ArrowUpRight size={17}/></a>
              <a className="contact-meta" href={instagramTeacher} target="_blank" rel="noreferrer"><div className="meta-icon"><Instagram size={20}/></div><div><span>Professora</span><strong>@espanhol.argentina</strong></div><ArrowUpRight size={17}/></a>
              <a className="contact-meta" href={instagramAcademy} target="_blank" rel="noreferrer"><div className="meta-icon"><Languages size={19}/></div><div><span>Academy</span><strong>@juhal.academy</strong></div><ArrowUpRight size={17}/></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>¿Hablamos?</span><strong>Quero começar.</strong></div>
            <label><span>Seu nome</span><input name="name" required placeholder="Como podemos te chamar?"/></label>
            <label><span>O que você busca?</span><select name="goal" defaultValue=""><option value="" disabled>Selecione</option><option>Espanhol do zero</option><option>Conversação</option><option>Aulas para criança ou adolescente</option><option>Preparação para SIELE</option><option>Preparação para CELU</option><option>Outro objetivo</option></select></label>
            <label><span>Seu nível atual</span><select name="level" defaultValue=""><option value="" disabled>Selecione</option><option>Iniciante</option><option>Básico</option><option>Intermediário</option><option>Avançado</option><option>Não sei informar</option></select></label>
            <label><span>Mensagem</span><textarea name="message" rows={5} placeholder="Conte rapidamente o que você gostaria de aprender."/></label>
            <button className="button button-primary form-button" type="submit"><Send size={18}/> Enviar pelo WhatsApp <ArrowUpRight size={17}/></button>
            {submitted && <div className="success-note" role="status"><Check size={17}/> Mensagem preparada e enviada ao WhatsApp.</div>}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand"><img className="brand-mark small" src="/argentina-flag.svg" alt="Argentina" /><div><strong>JUHAL ACADEMY</strong><span>INGLÊS • ESPANHOL</span></div></div>
        <div className="footer-links"><a href={instagramAcademy} target="_blank" rel="noreferrer"><Instagram size={18}/></a><a href={instagramTeacher} target="_blank" rel="noreferrer"><MessageCircle size={18}/></a><a href={whatsappUrl} target="_blank" rel="noreferrer"><Send size={17}/></a></div>
        <p>© {new Date().getFullYear()} Juhal Academy</p>
      </footer>
    </main>
  );
}
