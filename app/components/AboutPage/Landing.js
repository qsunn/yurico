import { s } from "@/app/styles"
import Link from "next/link"

export const Landing = () => {
    return <section className={`${s.container} ${s.bgImage} bg-[url('./images/bg_about_landing.png')] py-[14rem]`}>
        <div className="grid grid-flow-row place-items-start w-full">
            <h1 className={`${s.title} mb-8`}>About us</h1>
            <div className={`${s.decorLine} mb-12`} />
            <p className="mb-4 text-xl font-semibold">Aircraft leasing and trading. Aviation consulting services</p>
            <p className="mb-24 text-base font-medium">Unlocking the full potential of aviation through expert consulting.</p>
            <Link href='#' className={s.button}>Sample text</Link>
        </div>
    </section>
}