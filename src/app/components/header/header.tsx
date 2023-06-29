import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i´m Feri! 👋</h1>
        <h2>Web Developer</h2>
      </div>
      <Image
        src="/mee.jpg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
      />
    </div>
  );
}
