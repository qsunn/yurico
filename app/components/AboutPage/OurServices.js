import { s } from "@/app/styles"
import { Services } from "../Services"

export const OurServices = () => {
    return <section className={`${s.container} ${s.bgImage} bg-[url('./images/bg_about_clouds.png')] pt-9 pb-36`}>
        <div className="grid grid-flow-row gap-28 place-items-center">
            <p className={`${s.text} max-w-[75.375rem]`}>
                We aim to be the most competitive and the most productive market leaders in the segments where we operate. It is our goal to ensure projects are managed in a professional and efficient way in order to increase productivity and effectiveness. We focuson delivering our services on time and tailored to your exact needs. Our core competencies are being continuously developed and improved, we are determined to consistently deliver unequalled service to our customers.
            </p>
            <div className="flex items-start gap-20">
                <div className="flex flex-col items-start gap-12">
                    <div className="flex items-center justify-center gap-16">
                        <div className={`${s.image} bg-[url('./images/icon_plane.svg')] w-[10.5rem] h-[5.25rem]`} />
                        <h2 className={`${s.title} max-w-[30rem]`}>Your Trusted Aviation Consulting Partner</h2>
                    </div>
                    <p className={`${s.text} text-start max-w-[35.75rem]`}>
                        We provide exceptional aviation services that exceed our clients expectations. With years of experience in the aviation industry, we understand the importance of safety, efficiency, and customer satisfaction.<br />
                        Our team of highly skilled professionals is committed to delivering the highest quality of service, no matter the size or complexity of the project.
                    </p>
                </div>
                <div className={`${s.image} bg-[url('./images/img_partner.png')] w-[56.875rem] h-[21.625rem] mr-[-3.5rem] md:mr-[-20.25rem]`} />
            </div>
            <Services />
        </div>
    </section>
}