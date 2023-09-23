import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
  const title = "Netflix Clone";

  return (
    <Head>
      <title>{title}</title>
      <link
        rel='shortcut icon'
        href='/public/favicon.ico'
        type='image/x-icon'
      />
    </Head>
  );
};

export default CustomHead;
