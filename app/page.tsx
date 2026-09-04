import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Gauge,
  Hammer,
  Mail,
  MapPin,
  Paintbrush,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

const services = [
  { icon: Wrench, number: '01', title: 'Service completo', text: 'Mantenimiento integral para que tu vehículo rinda mejor y por más tiempo.' },
  { icon: Gauge, number: '02', title: 'Service de caja', text: 'Revisión y mantenimiento especializado de cajas manuales y automáticas.' },
  { icon: Hammer, number: '03', title: 'Sacabollos', text: 'Reparamos abolladuras cuidando la pintura y recuperando la línea original.' },
  { icon: Paintbrush, number: '04', title: 'Chapa y pintura', text: 'Reparaciones precisas y terminaciones de alta calidad para tu auto.' },
  { icon: PanelsTopLeft, number: '05', title: 'Polarizado', text: 'Láminas de seguridad y polarizado profesional con una terminación impecable.' },
  { icon: Sparkles, number: '06', title: 'Limpieza de interior', text: 'Limpieza profunda y detallada para recuperar el confort de cada superficie.' },
  { icon: ShieldCheck, number: '07', title: 'Cambio de cristales', text: 'Reemplazo seguro de parabrisas y cristales, con respaldo y garantía.' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="CBR Garage, inicio"><img className="brand-logo" src="/cbr-logo.png" alt="CBR Garage" /></a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="tel:+541154194819">
          Llamar <Phone size={17} />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Próxima apertura</p>
          <h1>Todo para tu auto.<br /><em>En un solo lugar.</em></h1>
          <p className="hero-lead">Mecánica, estética y cuidado integral con atención directa, trabajo claro y el detalle que tu vehículo merece.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicios">Ver servicios <ArrowRight size={19} /></a>
            <a className="button button-ghost" href="mailto:Cbrgarage23@gmail.com?subject=Quiero%20consultar%20por%20un%20servicio">Enviar una consulta</a>
          </div>
          <div className="hero-facts">
            <div><strong>7</strong><span>servicios integrales</span></div>
            <div><strong>1</strong><span>sede, atención directa</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Interior de CBR Garage">
          <img src="/cbr-services.png" alt="Interior de CBR Garage y presentación de sus servicios" />
          <div className="opening-card"><span className="pulse" /><div><small>Muy pronto</small><strong>Abrimos en una semana</strong></div></div>
        </div>
      </section>

      <section className="services section" id="servicios">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Lo que hacemos</p><h2>Tu auto, atendido<br />de punta a punta.</h2></div>
          <p>No necesitás recorrer distintos talleres. Reunimos los servicios esenciales para resolver más, mejor y en un mismo lugar.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-top"><Icon size={27} strokeWidth={1.7} /><span>{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <a
                href={`https://wa.me/5491154194819?text=${encodeURIComponent(`Hola CBR Garage, quisiera consultar por ${title}.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar <ArrowRight size={16} />
              </a>
            </article>
          ))}
          <article className="service-card service-card-cta">
            <span>¿No encontrás lo que necesitás?</span><h3>Contanos qué le pasa a tu auto.</h3>
            <a href="mailto:Cbrgarage23@gmail.com?subject=Consulta%20general">Escribir al garage <ArrowRight size={18} /></a>
          </article>
        </div>
      </section>

      <section className="about section" id="nosotros">
        <div className="about-label">CBR / 001</div>
        <div className="about-copy"><p className="eyebrow"><span /> Nuestra forma de trabajar</p><h2>Un garage nuevo.<br /><em>Una manera más clara.</em></h2></div>
        <div className="about-details">
          <p>CBR Garage nace para simplificar el cuidado del auto: diagnóstico claro, comunicación directa y soluciones integrales en una única sede.</p>
          <ul>
            <li><CheckCircle2 size={18} /> Presupuestos claros antes de empezar</li>
            <li><CheckCircle2 size={18} /> Atención directa con el garage</li>
            <li><CheckCircle2 size={18} /> Trabajo cuidado y seguimiento</li>
          </ul>
        </div>
      </section>

      <section className="contact section" id="contacto">
        <div>
          <p className="eyebrow light"><span /> Contacto</p><h2>¿Tu auto necesita<br />una puesta a punto?</h2>
          <p className="contact-lead">Escribinos por email. Contanos el modelo de tu auto y qué servicio necesitás para poder orientarte mejor.</p>
          <div className="contact-actions">
            <a className="button button-light" href="tel:+541154194819"><Phone size={19} /> 11 5419-4819</a>
            <a className="button button-outline-light" href="mailto:Cbrgarage23@gmail.com?subject=Consulta%20desde%20la%20web%20de%20CBR%20Garage"><Mail size={19} /> Enviar email</a>
          </div>
        </div>
        <aside className="contact-card">
          <div><MapPin size={20} /><span><small>Una única sede</small>Darwin 238</span></div>
          <div><Clock3 size={20} /><span><small>Horarios</small>Lunes a viernes · 8:00–17:00</span></div>
          <div><Phone size={20} /><span><small>Teléfono</small><a href="tel:+541154194819">11 5419-4819</a></span></div>
          <div><Mail size={20} /><span><small>Consultas</small>Respuesta directa por email</span></div>
        </aside>
      </section>

      <footer>
        <a className="brand" href="#inicio" aria-label="CBR Garage, inicio"><img className="brand-logo" src="/cbr-logo.png" alt="CBR Garage" /></a>
        <p>Todos los servicios para tu auto, en un solo lugar.</p>
        <div><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
        <small>© 2026 CBR Garage. Todos los derechos reservados.</small>
      </footer>
    </main>
  );
}
