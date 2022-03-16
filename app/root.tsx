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
      <body  style={{ backgroundColor:"transparent"}}>
        <div style={{ display: "flex" }}>
        <div style={{ width: "50vw"}}>
        <iframe
          src="https://minnit.chat/rickychat?embed&&nickname="
          style={{ border: "none", width: "100%", height: "500px"}}
          allowTransparency={true}
        ></iframe>
        <br />
        </div>
        <div>
          <img style={{ height: "500px", width: "100%" }} src="https://res.cloudinary.com/do02qffq1/image/upload/v1647460280/samples/ezgif.com-gif-maker_1_nibhbq.gif" alt="" />
        </div>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
