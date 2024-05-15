import ContactForm from "@/components/contact/ContactForm";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const Contact = () => {
  return (
    <Layout pageName={"Contact"}>
      <PageBanner pageName={"Contact"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
