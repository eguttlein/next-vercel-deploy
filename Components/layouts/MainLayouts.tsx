import Head from "next/head";
import React, { PropsWithChildren } from "react";
import styles from "./MainLayouts.module.css";

type Props = {};

export const MainLayouts: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Contenido de prueba" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
