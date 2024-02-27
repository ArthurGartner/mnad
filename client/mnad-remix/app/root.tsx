import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import FavIcon from "~/assets/coconut_icon.svg";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/styles/tailwind.css";
import customStyleSheet from "~/styles/custom.css";
import Header from "./components/Header";

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: stylesheet }]),
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",
  },
  { rel: "stylesheet", href: customStyleSheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={FavIcon} type="image/x-icon" />
        <link rel="apple-touch-icon" href={FavIcon} type="image/x-icon" />
        <Meta />
        <Links />
      </head>
      <body className="bg-background-light relative overflow-x-hidden min-w-[425px]">
        <div className="w-full mx-auto">
          <Header />
          <div className="2xl:w-[1536px] px-3 md:px-[73px] overflow-hidden mx-auto pt-[35px] lg:pt-[80px]">
            {" "}
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </div>
        </div>
      </body>
    </html>
  );
}
