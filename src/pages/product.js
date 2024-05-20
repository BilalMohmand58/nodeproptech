import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import KendurnsHero from "@components/KendurnsHero";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";

import Head from "next/head";

const Product = () => {
  const page = "product";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout pageName={"Home Kenburns"}>
        <KendurnsHero />
        {/* !Hero Header */}
        {/* About Section */}
        <AboutComponent />
        {/* !About Section */}
        {/* Services Section */}
        <ServicesComponent />
        {/* !Services Section */}
        <Drops />
        {/* Investor Section */}
        <WhyChooseUsComponent />
        {/* !Investor Section */}
        {/* Blog Section */}
      </Layout>
    </>
  );
};
export default Product;
