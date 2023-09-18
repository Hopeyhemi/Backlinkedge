
import { markdownify } from "@lib/utils/textConverter";

function Services({ data }) {
    const { frontmatter } = data;
    const { title, faqs } = frontmatter;
  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}


export default Services;
