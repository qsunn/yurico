import { s } from "@/app/styles"
import Link from "next/link"

export const Landing = () => {
    return <section className="px-[18.75rem] w-full relative grid place-items-center text-white bg-cover bg-center bg-no-repeat bg-[url('./images/bg_home_landing.png')] pt-[23rem] pb-[17rem]">
        <div className="w-full grid grid-flow-row place-items-start">
            <h1 className="mb-12 text-6xl font-light">Global <span className="font-medium">Multi-Service</span><br />Aviation Holding</h1>
            <div className={`${s.decorLine} mb-12`} />
            <p className="mb-3 text-xl font-semibold">Aircraft leasing and trading. Aviation consulting services</p>
            <p className="mb-24 text-base font-medium">Unlocking the full potential of aviation through expert consulting.</p>
            <Link href='#' className={s.button}>Sample text</Link>
        </div>
    </section>
}