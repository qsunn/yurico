import { s } from "@/app/styles"

export const WorkWithUs = () => {
    return <section className={`${s.container} bg-[url('./images/decor_gradient.png')] bg-bottom bg-contain bg-no-repeat mt-48 mb-20`}>
        <div className="grid place-items-center gap-10">
            <h2 className={s.title}>Want to Work With Us?</h2>
            <p className={`${s.text} max-w-[65.75rem] mb-3`}>Our training and consulting teams are formed of highly qualified professionals from all aviation sectors. If you are passionate about helping clients and interested in working with a diverse team of industry experts, submit your resume for consideration.</p>
            <div className="bg-[url('./images/rhomb_plane.png')] bg-contain bg-center bg-no-repeat w-[45.75rem] h-[45.75rem]" />
        </div>
    </section>
}