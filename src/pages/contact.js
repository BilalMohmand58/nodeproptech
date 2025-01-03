import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import InfoContact from "@/components/contact/InfoContact";
import { getMetadata } from "@/config/metadata";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Head from "next/head";

const Contact = () => {
  const page = "contact";
  const { title, description } = getMetadata(page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout pageName={"Contact"}>
        <PageBanner
          pageName={"Contact"}
          pagetext={
            "Let’s transform your real estate journey together!"
          }
          pagetext2={
            "Fill out the form below, and our team will reach out to you promptly."
          }
        />

        {/* 
        <section id="about">
          <div className="container">
            <div className="neoh_fn_about_item">
              <div>
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Node PropTech</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>{" "}
                <ContactInfo />
              </div>
              <div className="content_item">
                <ContactForm />
              </div>
            </div>
          </div>
        </section> */}
       
        <ContactForm />
        <InfoContact />
      </Layout>
    </>
  );
};
export default Contact;
