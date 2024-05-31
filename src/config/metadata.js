export const getMetadata = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us | NodePropTech",
        description:
          "Get Started. Why Fractional Investment With NODEPROP TECH. Node PropTech redefines property ownership. With us, you can invest in properties for as little as you desire, opening the door to an […]",
      };
    case "contact":
      return {
        title: "Contact Us | NodePropTech",
        description:
          "Reach out to NodePropTech. We're here to assist you with any inquiries or support you need regarding our property investment and management services.",
      };

    case "product":
      return {
        title: "Products | NodePropTech",
        description:
          "Explore our range of innovative real estate products. NodePropTech offers solutions that integrate cutting-edge technology with property investment.",
      };
    case "blog":
      return {
        title: "Blog | NodePropTech",
        description:
          "Stay updated with the latest trends and insights in real estate technology. NodePropTech's blog features articles, news, and expert opinions on property investment and management.",
      };
    case "home":
      return {
        title: "Home | NodePropTech",
        description:
          "A NEW DAWN IN REAL ESTATE. Immerse yourself in cutting-edge technologies and services that are molding the future of property investment and management.",
      };

    default:
      return {
        title: "NodePropTech",
        description:
          "A NEW DAWN IN REAL ESTATE. Immerse yourself in cutting-edge technologies and services that are molding the future of property investment and management.",
      };
  }
};
