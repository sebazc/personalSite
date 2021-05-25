import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Section from "../components/section";

const About = () => {
  return (
    <div>
      <Head>
        <title>sebazc | About</title>
      </Head>

      <Layout>
        <Section>
            <h2>About</h2>
            <p>Hi there. I am Sebastian Azcarate and this is my personal website.</p>

            <p>This website is made using Node JS, React JS, Next JS and Bootstrap.</p>
        </Section>
      </Layout>
    </div>
  );
};

export default About;
