import { s } from "@/app/styles"
import { Form } from "./Form"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} bg-[url('./images/bg_contacts.png')] !bg-top pb-60 pt-72 `}>
        <div className="w-full grid grid-cols-2">
            <div className="flex flex-col items-center md:items-start w-full max-w-[40rem] text-center md:text-start">
                <h1 className={`${s.title} mb-6`}>
                    Contact Us
                </h1>
                <p className="mb-[1.125rem] text-xl font-semibold">
                    Aircraft leasing and trading. Aviation consulting services
                </p>
                <p className="font-light text-base max-w-[33.25rem] mb-[4.5rem]">Contact us today to learn more about our services or to schedule a consultation, please fill out the contact form and one of our representatives will get back to you as soon as possible.</p>
                <div className={s.decorLine} />
                <p className="text-base font-medium mt-11 mb-8">Mitilinis 21, Ria Court 69, Flat 101<br /> 6042 Larnaca, Cyprus</p>
                <div className="flex items-center md:items-start gap-14">
                    <a href="tel:+35799582099" className="text-base font-medium">
                        +357 99 58 20 99
                    </a>
                    <a
                        href="mailto:office@yurico.cy"
                        className="text-base font-medium"
                    >
                        office@yurico.cy
                    </a>
                </div>
            </div>
            <div className="hidden md:block mr-[-10rem] w-full justify-self-end">
                <Form />
            </div>
        </div>
    </section>
}