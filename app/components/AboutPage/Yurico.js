import { s } from "@/app/styles"

export const Yurico = () => {
    return <section className={`${s.container} ${s.bgImage} !bg-bottom bg-[url('./images/bg_about_clouds_plane.png')] pt-24 pb-[35.25rem]`}>
        <div className="grid grid-flow-row place-items-center gap-8">
            <h2 className={s.title}>Yurico International Holdings LTD</h2>
            <div className={s.decorLineDivider} />
            <p className={`${s.text} max-w-[52rem]`}>
                Yurico is an aviation consultancy company that offers innovative and fully integrated solutions for the aviation industry. Through our dedicated office in Cyprus we provide our services globally. We are available whenever and wherever you need us and ready to help you streamline your processes and operate in a more sustainable, cost-effective and personalized manner.
                <br /><br />
                Typical projects include strategy and business plan development, operational performance improvement, restructure, transaction and sale support. Clients include airlines, manufacturers, MRO and aftermarket service providers, lessors, and the broader financial and investment community.
            </p>
        </div>
    </section>
}