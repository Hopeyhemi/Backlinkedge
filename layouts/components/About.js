import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
export const About = ({about}) => {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={about?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2>{about?.title}</h2>
            <p className="mt-6">{markdownify(about?.content)}</p>
            {about.button.enable && (
              <Link
                className="btn btn-primary mt-4"
                href={about.button.link}
                rel={about.button.rel}
              >
                {about.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
