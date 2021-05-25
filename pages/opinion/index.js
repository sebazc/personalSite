import React from "react";
import Layout from "../../components/layout";
import Head from 'next/head';

const Opinion = () => {
  return (
    <div>
      <Head>
        <title>sebazc | Opinion</title>
      </Head>
      <Layout>
        <h2 className="text-center">This is the Opinion page</h2>
      </Layout>
    </div>
  );
};

export default Opinion;
