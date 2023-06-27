import { s } from "@/app/styles"

export const CarrersSection = () => {
    return <section className={`${s.container} ${s.bgImage} !bg-top bg-[url('./images/bg_carrers_carrers.png')] pb-36`}>
        <div className="w-full grid grid-flow-row place-items-center gap-8">
            <h2 className={s.title}>Join our team, reach new heights</h2>
            <div className={s.decorLineDivider} />
            <p className={`${s.text} max-w-[52rem]`}>Welcome to Yurico Careers page! We are a dynamic and fast-growing aviation company with a passion for delivering exceptional service to our customers. Our team is made up of dedicated professionals who work together to create a culture of excellence, innovation, and collaboration.</p>
            <div className={`${s.image} bg-[url('./images/decor_line_w.svg')] h-[13.25rem] w-full absolute top-[10rem]`} />
            <div className="w-full grid grid-flow-row place-items-center mt-[15rem]">
                <div className="flex items-center justify-start gap-20 w-full">
                    <div className={`${s.image} bg-[url('./images/img_carrers_1.png')] h-[31.625rem] w-[35.375rem]`} />
                    <div className="grid grid-flow-row place-items-start gap-9">
                        <div className={s.decorLine} />
                        <p className="max-w-[31.25rem]">At Yurico, we are committed to creating an environment where our employees can thrive and grow. We believe that our success is driven by the talented individuals who work with us, and we are always looking for new team members who share our vision and values.</p>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-20 w-full mt-[-4.5rem]">
                    <div className="grid grid-flow-row place-items-start gap-9">
                        <div className={s.decorLine} />
                        <p className="max-w-[31.25rem]">As a member of Yurico  team, you will have the opportunity to work on a variety of exciting projects and initiatives that help shape the future of the aviation industry.</p>
                    </div>
                    <div className={`${s.image} bg-[url('./images/img_carrers_2.png')] h-[31.625rem] w-[35.375rem]`} />
                </div>
            </div>
        </div>
    </section>
}