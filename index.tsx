import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Globe2,
  Instagram,
  Languages,
  Menu,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const instagramUrl = "https://www.instagram.com/professor_alejandro/";
const whatsappUrl =
  "https://wa.me/5549999482947?text=Ol%C3%A1%2C%20Alejandro!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20espanhol.";
const emailUrl = "mailto:alejandroluisarribas@yahoo.com";
const instagramHandle = "@professor_alejandro";

const spanishWorld = [
  ["🇦🇷", "Argentina"],
  ["🇧🇴", "Bolívia"],
  ["🇨🇱", "Chile"],
  ["🇨🇴", "Colômbia"],
  ["🇨🇷", "Costa Rica"],
  ["🇨🇺", "Cuba"],
  ["🇪🇨", "Equador"],
  ["🇸🇻", "El Salvador"],
  ["🇪🇸", "Espanha"],
  ["🇬🇶", "Guiné Equatorial"],
  ["🇬🇹", "Guatemala"],
  ["🇭🇳", "Honduras"],
  ["🇲🇽", "México"],
  ["🇳🇮", "Nicarágua"],
  ["🇵🇦", "Panamá"],
  ["🇵🇾", "Paraguai"],
  ["🇵🇪", "Peru"],
  ["🇵🇷", "Porto Rico"],
  ["🇩🇴", "Rep. Dominicana"],
  ["🇺🇾", "Uruguai"],
  ["🇻🇪", "Venezuela"],
] as const;

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = String(form.get("name") || "").trim();
    const subject = String(form.get("subject") || "").trim();
    const message = String(form.get("message") || "").trim();

    const composedMessage = [
      "Olá, Alejandro!",
      "",
      name ? `Meu nome é ${name}.` : "",
      subject ? `Assunto: ${subject}.` : "",
      message ? `Mensagem: ${message}` : "",
      "",
      "Enviado pelo site.",
    ]
      .filter(Boolean)
      .join("\n");

    let didCopy = false;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(composedMessage);
        didCopy = true;
      }
    } catch {
      // Some browsers block clipboard access.
    }

    setCopied(didCopy);
    setSubmitted(true);
    formElement.reset();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand-flag" aria-hidden="true">
            <span>☼</span>
          </span>
          <span className="brand-copy">
            <strong>Alejandro Arribas</strong>
            <span>Profesor de Español</span>
          </span>
        </a>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          <button type="button" onClick={() => scrollTo("sobre")}>Sobre</button>
          <button type="button" onClick={() => scrollTo("espanhol")}>O espanhol</button>
          <button type="button" onClick={() => scrollTo("mundo")}>Mundo hispânico</button>
          <button type="button" onClick={() => scrollTo("contato")}>Contato</button>
        </nav>

        <div className="header-actions">
          <a className="header-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a className="header-cta" href={instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={17} />
            Instagram
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="inicio" className="hero section-pad">
        <div className="hero-flag-stripe" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              <span>¡Hola! Soy Alejandro Arribas</span>
            </div>

            <h1>
              Espanhol sem
              <span>complicar.</span>
            </h1>

            <p className="hero-lede">
              Aprender espanhol vai muito além da gramática. É aprender a se comunicar,
              compreender novas culturas e viver o idioma em situações reais — com a
              experiência de um professor <strong>nativo argentino</strong>, licenciado
              em Letras e com <strong>mais de 20 anos de experiência</strong> no ensino da língua.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero aprender espanhol
                <MessageCircle size={18} />
              </a>
              <button className="button button-ghost" type="button" onClick={() => scrollTo("espanhol")}>
                Descobrir o idioma
                <ArrowDown size={18} />
              </button>
            </div>

            <div className="hero-note">
              <span className="argentina-chip">ARG</span>
              <span>Do espanhol rioplatense à comunicação do dia a dia.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Identidade visual inspirada na Argentina">
            <div className="art-sky" />
            <div className="art-sun">☼</div>
            <div className="art-card">
              <div className="art-card-top">
                <span>ESPAÑOL</span>
                <span>01</span>
              </div>
              <div className="art-card-main">
                <Languages size={38} strokeWidth={1.5} />
                <span>HABLAR</span>
              </div>
              <div className="art-phrase">
                <strong>¿Cómo estás?</strong>
                <span>¿Vamos?</span>
              </div>
              <div className="art-card-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="art-stamp">
              <span>ARGENTINA</span>
              <strong>AA</strong>
            </div>
          </div>
        </div>

        <button
          className="scroll-cue"
          type="button"
          onClick={() => scrollTo("sobre")}
          aria-label="Ir para a seção Sobre"
        >
          <span>Explorar</span>
          <ArrowDown size={18} />
        </button>
      </section>

      <section id="sobre" className="editorial section-pad">
        <div className="section-index">01</div>
        <div className="editorial-inner">
          <div className="section-kicker">La experiencia hace la diferencia</div>
          <div className="editorial-grid">
            <div>
              <h2>
                Aprender com quem
                <span>viveu o idioma desde o começo.</span>
              </h2>
            </div>

            <div className="editorial-text">
              <p>
                Quando você aprende com um <strong>professor nativo argentino</strong>, a língua
                deixa de ser apenas conteúdo e passa a ser experiência: sons, expressões,
                ritmo e contexto.
              </p>
              <p>
                Com licenciatura em Letras e <strong>mais de 20 anos de experiência</strong> no
                ensino do espanhol, Alejandro propõe um aprendizado que aproxima o aluno da
                comunicação real.
              </p>

              <div className="authority-line">
                <span className="authority-number">20+</span>
                <div>
                  <strong>Anos de experiência</strong>
                  <span>no ensino da língua espanhola</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="espanhol" className="learn section-pad">
        <div className="section-index">02</div>
        <div className="learn-inner">
          <div className="section-kicker">Más que gramática</div>

          <div className="learn-heading">
            <h2>
              Um idioma para
              <span>viver mais.</span>
            </h2>
            <p>
              Você não precisa saber tudo antes de começar a falar. O espanhol pode ser
              aprendido de forma prática, contextualizada e próxima da vida real.
            </p>
          </div>

          <div className="learn-grid">
            <article className="learn-card">
              <span className="learn-symbol">01</span>
              <Globe2 size={23} />
              <h3>Viajar com mais autonomia</h3>
              <p>
                Entender, perguntar, pedir, conversar e aproveitar melhor experiências em
                destinos de língua espanhola.
              </p>
            </article>

            <article className="learn-card featured">
              <span className="learn-symbol">02</span>
              <MessageCircle size={23} />
              <h3>Conversação desde cedo</h3>
              <p>
                Pratique situações reais e desenvolva confiança para usar o idioma fora da
                sala de aula.
              </p>
            </article>

            <article className="learn-card">
              <span className="learn-symbol">03</span>
              <Sparkles size={23} />
              <h3>Conhecer novas culturas</h3>
              <p>
                Música, gastronomia, cidades, expressões e diferentes formas de falar fazem
                parte do mundo hispânico.
              </p>
            </article>
          </div>

          <div className="phrase-band">
            <span>Una lengua.</span>
            <strong>Muchos mundos.</strong>
            <span className="phrase-accent">Una nueva forma de conectar.</span>
          </div>
        </div>
      </section>

      <section id="mundo" className="world section-pad">
        <div className="section-index section-index-light">03</div>
        <div className="world-inner">
          <div className="section-kicker section-kicker-light">El mundo hispánico</div>

          <div className="world-heading">
            <div>
              <h2>
                Uma língua,
                <span>muitos lugares.</span>
              </h2>
              <p>
                O espanhol atravessa fronteiras, sotaques e culturas. O Instituto Cervantes
                registra o espanhol como língua oficial em 20 países e destaca a presença
                global do idioma.
              </p>
            </div>

            <div className="world-counter">
              <strong>20</strong>
              <span>países com espanhol como língua oficial</span>
            </div>
          </div>

          <div className="country-grid">
            {spanishWorld.map(([flag, country]) => (
              <div className="country-pill" key={country}>
                <span>{flag}</span>
                <strong>{country}</strong>
              </div>
            ))}
          </div>

          <div className="argentina-feature">
            <div className="argentina-sun" aria-hidden="true">☼</div>
            <div>
              <span>EL ESPAÑOL DE ARGENTINA</span>
              <strong>Vos, che, dale.</strong>
              <p>
                Aprenda também a riqueza do espanhol argentino: expressões, ritmo e formas
                de falar que ajudam você a entender o idioma como ele é vivido no cotidiano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contact section-pad">
        <div className="section-index">04</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <div className="section-kicker">Empecemos</div>
            <h2>
              Seu espanhol
              <span>começa aqui.</span>
            </h2>
            <p>
              Quer entender como funcionam as aulas? Envie uma mensagem ou fale diretamente
              pelo WhatsApp.
            </p>

            <div className="contact-links">
              <a className="contact-meta" href={whatsappUrl} target="_blank" rel="noreferrer">
                <div className="meta-icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span>WhatsApp</span>
                  <strong>(49) 99948-2947</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>

              <a className="contact-meta" href={emailUrl}>
                <div className="meta-icon">
                  <Send size={19} />
                </div>
                <div>
                  <span>E-mail</span>
                  <strong>alejandroluisarribas@yahoo.com</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>

              <a className="contact-meta" href={instagramUrl} target="_blank" rel="noreferrer">
                <div className="meta-icon">
                  <Instagram size={20} />
                </div>
                <div>
                  <span>Instagram</span>
                  <strong>{instagramHandle}</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>¿Hablamos?</span>
              <strong>Vamos começar a conversa.</strong>
            </div>

            <label>
              <span>Seu nome</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Como podemos te chamar?"
              />
            </label>

            <label>
              <span>O que você busca?</span>
              <select name="subject" defaultValue="Quero aprender espanhol">
                <option>Quero aprender espanhol</option>
                <option>Quero desenvolver conversação</option>
                <option>Quero saber sobre as turmas</option>
                <option>Outro assunto</option>
              </select>
            </label>

            <label>
              <span>Mensagem</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Conte rapidamente o que você gostaria de aprender."
                required
              />
            </label>

            <button className="button button-primary form-button" type="submit">
              <Send size={18} />
              Falar com Alejandro
              <ArrowUpRight size={17} />
            </button>

            {submitted && (
              <div className="success-note" role="status">
                {copied ? <Check size={17} /> : <MessageCircle size={17} />}
                {copied
                  ? "Mensagem preparada e copiada. O WhatsApp foi aberto para você continuar."
                  : "Mensagem preparada. O WhatsApp foi aberto para você continuar."}
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-flag small" aria-hidden="true">
            <span>☼</span>
          </span>
          <div>
            <strong>Alejandro Arribas</strong>
            <span>Profesor de Español · Argentina</span>
          </div>
        </div>

        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={emailUrl} aria-label="E-mail">
            <Send size={17} />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Alejandro Arribas</p>
      </footer>
    </main>
  );
}
