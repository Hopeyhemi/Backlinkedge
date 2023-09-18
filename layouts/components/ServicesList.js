import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Order } from "@layouts/components/Order";

export const ServicesList = ({feature}) => {
  return (
    <div>
         <section className="section bg-blue-500">
        <div className="container">
          <div className="text-center">
            <h2 className="text-yellow-500">{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={300}
                    height={200}
                    alt=""
                  />
                )}
                <div className="mt-4 pl-4 text-left">
                  {markdownify(item.name, "h3", "h5")}
                  <ul className="pl-6 list-disc">
                    <li className="mt-4 font-bold text-xl text-left">{item.content}</li>
                    <li className="mt-2 font-bold text-xl text-left">{item.content2}</li>
                    <li className="mt-2 font-bold text-xl text-left">{item.content3}</li>
                  </ul>
                  <Order linker={item} align="center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
