import DetailBlog from "@/components/blog/DetailBlog";
import { createClient } from "contentful";
import Layout from "@/layout/Layout";

const client = createClient({
  space: "jyd9wciqks30",
  accessToken: "alGDad9j_RkxN6Gmh_jMPk935OdL9rXbgjRMbGT6axU",
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items?.map((item) => {
    return {
      params: { slug: item?.fields?.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params?.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
};

const BlogSingle = ({ blog }) => {
  return (
    <Layout pageName={"Blog Single"}>
      <DetailBlog blog={blog} />
    </Layout>
  );
};
export default BlogSingle;
