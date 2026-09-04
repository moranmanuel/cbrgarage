import type { Metadata } from 'next';
import { Archivo, Oswald } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ variable: '--font-body', subsets: ['latin'] });
const oswald = Oswald({ variable: '--font-display', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CBR Garage | Servicios integrales para tu auto',
  description: 'Service completo, caja, sacabollos, chapa y pintura, polarizado, limpieza interior y cambio de cristales.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${archivo.variable} ${oswald.variable}`}>{children}</body></html>;
}
