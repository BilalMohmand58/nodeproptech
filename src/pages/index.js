import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import { createClient } from "contentful";
import Head from "next/head";

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
        <div className="neoh_fn_hero">
          {/* Overlay (of hero header) */}
          <div className="bg_overlay">
            {/* Overlay Color */}
            <div className="bg_color" />
            {/* !Overlay Color */}
            {/* Overlay Image */}
            <div className="bg_image" data-bg-img="img/hero/1.jpeg" />
            {/* !Overlay Image */}
          </div>
          {/* Overlay (of hero header) */}
          <div className="hero_content">
            <div className="container">
              <div className="content">
                <h2 className="fn_title" title="Neoh">
                  Node
                </h2>
                <h3 className="fn_title2">Prop Tech</h3>

                <p className="fn_desc fn_animated_text">
                  Immerse yourself in cutting-edge technologies and services
                  that are molding the future of property investment and
                  management.
                </p>
              </div>
            </div>
            <a
              href="#about"
              className="neoh_fn_down magic-hover magic-hover__square"
            >
              <span className="text">Scroll Down</span>
              <span className="icon">
                <img src="svg/right-arr.svg" alt="" className="fn__svg" />
              </span>
            </a>
          </div>
        </div>
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
        <BlogComponent posts={posts} />
      </Layout>
    </>
  );
};
export default Index;
