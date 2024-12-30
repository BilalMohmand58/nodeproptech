import WhyChooseus from "@/components/WhyChooseus";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import ServicesComponent from "@components/ServicesComponent";


import { createClient } from "contentful";
import Head from "next/head";
import Hero from "@/components/Hero";

export async function getStaticProps() {
  const client = createClient({
    space: "jyd9wciqks30",
    accessToken: "alGDad9j_RkxN6Gmh_jMPk935OdL9rXbgjRMbGT6axU",
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      posts: res?.items,
    },
    revalidate: 1,
  };
}

const Index = ({ posts }) => {
  const page = "home";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout pageName={"Home Static"}>
        {/* Hero Header */}
       <Hero/>
        {/* !Hero Header */}
        {/* About Section */}
        <AboutComponent />
        {/* !About Section */}
        {/* Services Section */}
        <ServicesComponent />
        {/* !Services Section */}

        <Drops />
        <WhyChooseus />
        {/* Investor Section */}
        {/* <WhyChooseUsComponent /> */}
        {/* !Investor Section */}
        {/* Blog Section */}
        <BlogComponent posts={posts} />
      </Layout>
    </>
  );
};
export default Index;
