import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="error-page">
      <div>
        <h1>404</h1>
        <p>Página não encontrada.</p>
        <Link to="/">Voltar para o início</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error);
  }, [error]);

  return (
    <div className="error-page">
      <div>
        <h1>Ops.</h1>
        <p>Ocorreu um problema ao carregar a página.</p>
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Juhal Academy | Espanhol com professora nativa argentina" },
      {
        name: "description",
        content:
          "Aprenda espanhol com uma professora nativa argentina. Aulas para diferentes idades e preparação para SIELE e CELU.",
      },
      { name: "author", content: "Juhal Academy" },
      { name: "theme-color", content: "#182241" },
      { property: "og:title", content: "Juhal Academy | Espanhol" },
      {
        property: "og:description",
        content:
          "Aprenda espanhol com uma professora nativa argentina e prepare-se para SIELE e CELU.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  ),
  component: () => {
    const { queryClient } = Route.useRouteContext();
    return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    );
  },
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
