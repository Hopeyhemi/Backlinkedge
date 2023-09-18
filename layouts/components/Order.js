import Link from 'next/link'
import Image from 'next/image'  

export const Order = ({linker,align}) => {
  return (
    <div className={`mt-4 text-${align} text-xl font-bold`}>
        {linker.button.enable && (
            <Link
                href={linker?.button.link}
                className="cta-link inline-flex items-center text-blue-900"
                    >
                      {linker?.button.label}
                      <Image
                        className="ml-1"
                        src="/images/arrow-right.svg"
                        width={18}
                        height={14}
                        alt="arrow"
                      />
                    </Link>
                  )}
    </div>
  )
}
