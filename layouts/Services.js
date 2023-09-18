// import Link from "next/link";
// import Cta from "./components/Cta";
// import { getListPage } from "@lib/contentParser";
// import ServicesList from "@layouts/components/Services";

// function Services({ frontmatter }) {
//   const {feature } = frontmatter;
//   return (
//     <div>
//         <ServicesList feature={feature}/>
//     </div>
//   )
// }
// export const getStaticProps = async () => {
//     const homePage = await getListPage("content/_index.md");
//     const { frontmatter } = homePage;
//     return {
//       props: {
//         frontmatter,
//       },
//     };
//   };

// export default Services;
