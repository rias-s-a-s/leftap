import Main from "./Main";
import "./globals.css";

export const metadata = {
  title: "Leftap",
  description:
    "¡Bienvenido a nuestra página web de aprendizaje financiero! Aquí encontrarás contenido educativo actualizado y fácil de entender sobre finanzas personales, inversión, presupuesto y ahorro. Nuestra plataforma se adapta a tus necesidades, ya sea que estés comenzando desde cero o buscando expandir tus conocimientos existentes. Navega por nuestra intuitiva página web y comienza tu camino hacia la independencia financiera hoy mismo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
