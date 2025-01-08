import FeatureComponent from "@/components/FeatureComponent";
import ProductServices from "@/components/ProductServices";
import WhyOwnership from "@/components/WhyOwnership";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
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
        {/* <KendurnsHero /> */}
        {/* !Hero Header */}
        <PageBanner
          pageName={"Product"}
          pagetext={
            " Discover our cutting-edge DLT and Web3 technology services, revolutionizing real estate with transparency, security, and innovation."
          }
          // pagetext2={
          //   "Fill out the form below, and our team will contact you immediately"
          // }
        />
        {/* About Section */}
        {/* <AboutComponent /> */}
        {/* !About Section */}

        <Drops />
 {/* Featue Section */}
 <WhyOwnership/>
 <FeatureComponent />
        {/* !Featue Section */}
        {/* Services Section */}
        {/* <ProductServices /> */}
        {/* !Services Section */}
        {/* Investor Section */}
        {/* <WhyChooseUsComponent /> */}
        {/* !Investor Section */}
        {/* Blog Section */}
      </Layout>
    </>
  );
};
export default Product;
