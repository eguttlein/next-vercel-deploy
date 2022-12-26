import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";

interface Props {
  href: string,
  text: string
}

export const Navlink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  const style: CSSProperties = {
    color: "red",
  };
  return (
    <Link legacyBehavior href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default Navlink
