import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet, // Importe o Outlet
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Suas funções de links e a estilização podem continuar aqui
export const links: Route.LinksFunction = () => [
  // ... seus links para fontes
];

// O layout principal da sua aplicação
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Calculadora de Idade</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// O componente principal da aplicação que usa o Outlet
export default function App() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        <Outlet /> {/* As rotas serão renderizadas aqui */}
      </div>
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>
          Design inspirado por{" "}
          <a
            href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            Frontend Mentor
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

// Sua função de ErrorBoundary pode continuar como está
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // ... seu código de tratamento de erro
}