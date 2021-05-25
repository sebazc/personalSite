import React from "react";
import Layout from "../../components/layout";
import Head from 'next/head';

const Art = () => {
  return (
    <div>
      <Head>
        <title>sebazc | Art</title>
      </Head>
      <Layout>
        <h2 className="text-center">This is the Art page</h2>
      </Layout>
    </div>
  );
};

export default Art;
