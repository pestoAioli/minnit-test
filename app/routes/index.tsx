import type { LinksFunction } from "remix";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
      <div style={{ objectFit: "contain", width: "100%"}}>
      <a href="https://dddance.party/#bo733"><img src="https://fontmeme.com/permalink/220316/c66c9e057ea88e7832672e6a3e2656d4.png" alt="hot-sauce-nct-dream-font" style={{border: "0"}}/></a>
      </div>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none"}} > 
        <li >
          <a
            target="_blank"
            href="https://autumn-river-9476.fly.dev"
            rel="noreferrer"
          >
            curbs
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/pestoAioli"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/ricky-rivera-075153224/" rel="noreferrer">
            linked in
          </a>
        </li>
      </ul>
    </div>
  );
}
