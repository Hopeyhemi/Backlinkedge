import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";
import { Order } from "@layouts/components/Order";
import { About } from "@layouts/components/About";
import { Services } from "@layouts/components/Services";

const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      <section className="section pb-[50px] text-yellow-100">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-12   lg:grid ">
              <div >
              <h1 className=" hover:cursor-pointer font-primary text-blue-800 text-6xl font-bold">{banner.title}</h1>
              <p className="hover:cursor-pointer my-4 text-2xl	text-black">{markdownify(banner.content)}</p>
              <Order linker={banner} align="center"/>
              
              </div>
             
              {/* <div >
              {banner.button.enable && (
                <Link
                  className="btn btn-primary "
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto "
                src={banner.image}
                width={1240}
                sizes="(max-width: 1368px) 100vw"
                height={390}
                alt="banner image"
                priority
              />
              </div> */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <Services feature={feature} />
      
      <section className="section text-center mt-12 ">
      <span className=" hover:cursor-pointer font-primary text-center bg-orange-500 p-6 rounded-3xl text-blue-800 text-6xl font-bold">Why choose us?</span>
      </section>

      {/* services */}
      {services.map((service, index) => {
        const isOdd = index % 2 > 0;
        return (
          <section
            key={`service-${index}`}
            className={`section ${isOdd && "bg-blue-500 text-white"}`}
          >
            <div className="container">
              <div className="items-center gap-8 md:grid md:grid-cols-2">
                {/* Carousel */}
                <div className={`service-carousel ${!isOdd && "md:order-2"}`}>
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={
                      service.images.length > 1 ? { clickable: true } : false
                    }
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    init={service?.images > 1 ? false : true}
                  >
                    {/* Slides */}
                    {service?.images.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <Image src={slide} alt="" width={600} height={500} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div
                  className={`service-content mt-5 md:mt-0 ${
                    !isOdd && "md:order-1 text-black"
                  }`}
                >
                  <h2 className={`font-bold leading-[40px] text-white" ${isOdd? "text-white" : "text-orange-500"}`}>{service?.title}</h2>
                  <p className="mt-4 mb-2 text-xl ">{service?.content}</p>
                  <p className="mt-4 mb-2 text-xl ">{service?.content2}</p>
                  <Order linker={service} align="left" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* About us */}
      <About about={workflow} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
