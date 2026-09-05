import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gauge,
  Hammer,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Paintbrush,
  PanelsTopLeft,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Countdown } from '@/components/countdown';

const services = [
  { icon: Wrench, number: '01', title: 'Service completo', text: 'Mantenimiento integral para que tu vehículo rinda mejor y por más tiempo.' },
  { icon: Gauge, number: '02', title: 'Service de caja', text: 'Revisión y mantenimiento especializado de cajas manuales y automáticas.' },
  { icon: Hammer, number: '03', title: 'Sacabollos', text: 'Reparamos abolladuras cuidando la pintura y recuperando la línea original.' },
  { icon: Paintbrush, number: '04', title: 'Chapa y pintura', text: 'Reparaciones precisas y terminaciones de alta calidad para tu auto.' },
  { icon: PanelsTopLeft, number: '05', title: 'Polarizado', text: 'Láminas de seguridad y polarizado profesional con una terminación impecable.' },
  { icon: Sparkles, number: '06', title: 'Limpieza de interior', text: 'Limpieza profunda y detallada para recuperar el confort de cada superficie.' },
  { icon: ShieldCheck, number: '07', title: 'Cambio de cristales', text: 'Reemplazo seguro de parabrisas y cristales, con respaldo y garantía.' },
];

const brands = [
  { name: 'Honda', logo: 'https://cdn.simpleicons.org/honda/9b9b9b' },
  { name: 'Toyota', logo: 'https://cdn.simpleicons.org/toyota/9b9b9b' },
  { name: 'Nissan', logo: 'https://cdn.simpleicons.org/nissan/9b9b9b' },
  { name: 'Subaru', logo: 'https://cdn.simpleicons.org/subaru/9b9b9b' },
  { name: 'Suzuki', logo: 'https://cdn.simpleicons.org/suzuki/9b9b9b' },
  { name: 'Mazda', logo: 'https://cdn.simpleicons.org/mazda/9b9b9b' },
  { name: 'Mitsubishi', logo: 'https://cdn.simpleicons.org/mitsubishi/9b9b9b' },
  { name: 'Ford', logo: 'https://cdn.simpleicons.org/ford/9b9b9b' },
  { name: 'BMW', logo: 'https://cdn.simpleicons.org/bmw/9b9b9b' },
  { name: 'Mercedes-Benz', logo: 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="CBR Garage, inicio"><img className="brand-logo" src="/cbr-logo-transparent.png" alt="CBR Garage" /></a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#marcas">Marcas</a><a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Abrimos el 14 de septiembre</p>
          <h1>Tu auto,<br /><em>en buenas manos</em><br />desde el primer día.</h1>
          <p className="hero-lead">Mecánica, diagnóstico y cuidado integral con atención directa. Nuestra agenda ya está abierta para turnos desde la inauguración.</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={`https://wa.me/5491150526325?text=${encodeURIComponent('🚘 Hola CBR! Quiero reservar un turno.\n\nVehículo:\nServicio:\nFecha preferida:')}`}
              target="_blank"
              rel="noreferrer"
            >
              <CalendarDays size={19} /> Reservar turno
            </a>
            <a className="button button-ghost" href="https://www.google.com/maps/search/?api=1&query=Darwin+238+CABA+Argentina" target="_blank" rel="noreferrer">
              <Navigation size={18} /> Cómo llegar
            </a>
          </div>
          <div className="hero-meta">
            <div><small>Dirección</small><strong>Darwin 238, CABA</strong></div>
            <div><small>Horario</small><strong>Lun a vie · 8:00–17:00</strong></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="CBR Garage abre el 14 de septiembre">
          <img className="hero-logo" src="/cbr-logo-transparent.png" alt="CBR Garage" />
          <div className="launch-date" aria-hidden="true">
            <span>14</span>
            <div><strong>SEP</strong><small>2026</small></div>
          </div>
          <p className="launch-note">Agenda abierta para turnos desde la inauguración</p>
          <div className="opening-card"><Countdown /></div>
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
                href={`https://wa.me/5491150526325?text=${encodeURIComponent(
                  `Hola CBR Garage! Necesito ${title.startsWith('Service') ? title.toLowerCase() : `un servicio de ${title.toLowerCase()}`} para mi auto.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Consultar <ArrowRight size={16} />
              </a>
            </article>
          ))}
          <article className="service-card service-card-cta">
            <span>¿No encontrás lo que necesitás?</span><h3>Contanos qué le pasa a tu auto.</h3>
            <a href={`https://wa.me/5491150526325?text=${encodeURIComponent("Hola CBR Garage! Tengo una consulta sobre mi auto.")}`}>Escribir al garage <ArrowRight size={18} /></a>
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

      <section className="brands section" id="marcas" aria-labelledby="marcas-title">
        <div className="brands-heading">
          <p className="eyebrow"><span /> Experiencia multimarca</p>
          <h2 id="marcas-title">Trabajamos con<br /><em>todas las marcas.</em></h2>
          <p>Mecánica general y diagnóstico para vehículos nacionales e importados.</p>
        </div>
        <div className="brand-wall" aria-label="Marcas que atendemos">
          {brands.map(({ name, logo }) => (
            <div className="brand-item" key={name}>
              <img src={logo} alt={`Logo de ${name}`} loading="lazy" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="location section" aria-labelledby="ubicacion-title">
        <div className="location-copy">
          <p className="eyebrow"><span /> Cómo llegar</p>
          <h2 id="ubicacion-title">Encontranos en<br /><em>Darwin 238.</em></h2>
          <p>Estamos en CABA. Abrimos de lunes a viernes, de 8:00 a 17:00.</p>
          <a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Darwin+238+CABA+Argentina" target="_blank" rel="noreferrer">
            <Navigation size={18} /> Cómo llegar
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa de CBR Garage en Darwin 238, CABA"
            src="https://www.google.com/maps?q=Darwin+238,+CABA,+Argentina&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/5491150526325?text=%F0%9F%9A%98%20Hola%20CBR!%20Me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios%20de%20taller%20premium."
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar a CBR Garage por WhatsApp"
      >
        <span className="whatsapp-hint">¿Necesitás ayuda?</span>
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M16.04 3A12.93 12.93 0 0 0 5.1 22.82L3 29l6.38-2.05A12.98 12.98 0 1 0 16.04 3Zm0 2.18a10.8 10.8 0 1 1-5.5 20.1l-.39-.23-3.79 1.22 1.24-3.68-.25-.4A10.78 10.78 0 0 1 16.04 5.18Zm-5.18 4.74c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3s1.29 3.48 1.47 3.72c.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.05.76.86.27 1.65.23 2.27.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79a10.8 10.8 0 0 1-2-2.49c-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.96-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69Z" />
        </svg>
      </a>

      <footer id="contacto">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#inicio" aria-label="CBR Garage, inicio"><img className="brand-logo" src="/cbr-logo-transparent.png" alt="CBR Garage" /></a>
            <p>Todos los servicios para tu auto, en un solo lugar. Atención directa y trabajo de calidad en CABA.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/cbrgarage.ba/" target="_blank" rel="noreferrer" aria-label="CBR Garage en Instagram">
                <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="6" r="1" fill="currentColor"/></svg>
              </a>
              <a href="https://wa.me/5491150526325?text=Hola%20CBR%20Garage" target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp"><MessageCircle size={19} /></a>
              <a href="mailto:Cbrgarage23@gmail.com" aria-label="Enviar email"><Mail size={19} /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Navegación</h3>
            <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#marcas">Marcas</a>
          </div>
          <div className="footer-column footer-services">
            <h3>Servicios</h3>
            <p>Service completo</p><p>Service de caja</p><p>Chapa y pintura</p><p>Sacabollos</p><p>Polarizado</p>
          </div>
          <div className="footer-column footer-contact">
            <h3>Contacto</h3>
            <a href="https://www.google.com/maps/search/?api=1&query=Darwin+238+CABA+Argentina" target="_blank" rel="noreferrer"><MapPin size={18} /><span>Darwin 238, CABA</span></a>
            <a href="tel:+541150526325"><Phone size={18} /><span>11 5419-4819</span></a>
            <a href="mailto:Cbrgarage23@gmail.com"><Mail size={18} /><span>Cbrgarage23@gmail.com</span></a>
            <div><Clock3 size={18} /><span>Lunes a viernes<br />8:00–17:00</span></div>
          </div>
        </div>
        <div className="footer-bottom"><small>© 2026 CBR Garage. Todos los derechos reservados.</small><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  );
}
