import { s } from "@/app/styles"
import Link from "next/link"

export const About = () => {
    return <section className={`${s.container} !px-[28.75rem] bg-no-repeat bg-top bg-cover bg-[url('./images/bg_home_about.png')] pb-[54rem] pt-8`}>
        <div className="w-full grid grid-flow-row place-items-start">
            <h2 className={`${s.title} mb-12`}>About</h2>
            <div className={`${s.decorLine} mb-8`} />
            <p className="text-base max-w-[51.5rem] mb-16">
                We aim to be the most competitive and the most productive market leaders in the segments where we operate. It is our goal to ensure projects are managed in a professional and efficient way in order to increase productivity and effectiveness. We focuson delivering our services on time and tailored to your exact needs.
                <br /><br />
                Our core competencies are being continuously developed and improved, we are determined to consistently deliver unequalled service to our customers.
            </p>
            <Link href="#" className={s.button}>Sample text</Link>
            <div className="bg-no-repeat bg-center bg-contain w-[36.75rem] h-[7.375rem] bg-[url('./images/logo.svg')] absolute bottom-[20rem] justify-self-center" />
        </div>
    </section>
}