import ProductServices from "@/components/ProductServices";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import KendurnsHero from "@components/KendurnsHero";
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
      <Layout pageName={"Product"}>
        <KendurnsHero />
        {/* !Hero Header */}
        {/* About Section */}
        <AboutComponent />
        {/* !About Section */}
        {/* Services Section */}
        <ProductServices />
        {/* !Services Section */}
        <Drops />
        {/* Investor Section */}
        {/* <WhyChooseUsComponent /> */}
        {/* !Investor Section */}
        {/* Blog Section */}
      </Layout>
    </>
  );
};
export default Product;
