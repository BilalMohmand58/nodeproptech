import BlogCard from "@/components/blog/BlogCard";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import { createClient } from "contentful";
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
  return (
    <Layout pageName={"Blog"}>
      <PageBanner pageName={"Blog"} />
      <div className="neoh_fn_blog_page">
        <BlogCard posts={posts} />
      </div>
    </Layout>
  );
};
export default Blog;
