import Services from '@layouts/Services'
import React from 'react'
import { getListPage } from "../lib/contentParser";
const services = ({frontmatter}) => {
    const {feature } = frontmatter;
  return (
    <div>
        <Services feature={feature}/>
    </div>
  )
}
export const getStaticProps = async () => {
    const homePage = await getListPage("content/_index.md");
    const { frontmatter } = homePage;
    return {
      props: {
        frontmatter,
      },
    };
  };
export default services;