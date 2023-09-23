import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
  const title = "Netflix Clone";

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;
