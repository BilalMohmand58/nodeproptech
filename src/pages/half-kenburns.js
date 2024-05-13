import Layout from "@/layout/Layout";
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import HalfKenburnsHero from "@components/HalfKenburnsHero";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";

const HalfKenburns = () => {
  return (
    <Layout pageName={"Home Half Kenburns"}>
      <HalfKenburnsHero />
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
      <BlogComponent />
    </Layout>
  );
};
export default HalfKenburns;
