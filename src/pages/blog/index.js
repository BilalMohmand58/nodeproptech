import BlogCard from "@/components/blog/BlogCard";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
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
const Blog = ({ posts }) => {
  const page = "blog";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Layout pageName={"Blog"}>
        <PageBanner
          pageName={"Blog"}
          pagetext={"Set Sail Towards Your Property Success Today "}
          pagetext2={" Join us to get started."}
        />
        <div className="neoh_fn_blog_page">
          <BlogCard posts={posts} />
        </div>
      </Layout>
    </>
  );
};
export default Blog;
