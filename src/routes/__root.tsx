import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-silver">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-red px-6 py-3 text-sm font-semibold text-primary-foreground shadow-red"
        >
          Back home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gloss Stone Auto Beauty — Premium Mobile Detailing" },
      { name: "description", content: "Gloss Stone Auto Beauty delivers signature-quality mobile auto detailing. Hand washes, interior details, ceramic coatings and more." },
      { name: "author", content: "Gloss Stone Auto Beauty" },
      { property: "og:title", content: "Gloss Stone Auto Beauty — Premium Mobile Detailing" },
      { property: "og:description", content: "Gloss Stone Auto Beauty delivers signature-quality mobile auto detailing. Hand washes, interior details, ceramic coatings and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gloss Stone Auto Beauty — Premium Mobile Detailing" },
      { name: "twitter:description", content: "Gloss Stone Auto Beauty delivers signature-quality mobile auto detailing. Hand washes, interior details, ceramic coatings and more." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/40b99207-fae3-4352-8b30-fb6a10f14119/id-preview-be871837--6cb2f2ec-bb38-44a0-80b8-da55e61aa0fc.lovable.app-1777301199529.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/40b99207-fae3-4352-8b30-fb6a10f14119/id-preview-be871837--6cb2f2ec-bb38-44a0-80b8-da55e61aa0fc.lovable.app-1777301199529.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Great+Vibes&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
