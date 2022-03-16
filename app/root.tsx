import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Ricky World" };
};

export default function App() {
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body  style={{ backgroundColor:"transparent" }}>
        <iframe
          src="https://minnit.chat/rickychat?embed&&nickname="
          style={{ border: "none", width: "100%", height: "500px"}}
          allowTransparency={true}
        ></iframe>
        <br />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
