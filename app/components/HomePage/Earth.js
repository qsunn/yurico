import { s } from "@/app/styles"

export const Earth = () => {
    return <section className={`${s.container} pb-[34.25rem] overflow-hidden bg-gradient-to-b from-[#000] via-[#333] to-[#000]`}>
        <div className="w-full">
            <div className="relative w-full grid grid-flow-row place-items-center gap-8 z-10">
                <h2 className={s.title}>Experience the difference of exceptional aviation services</h2>
                <div className={s.decorLineDivider} />
                <p className={`${s.text} max-w-[52rem]`}>We are dedicated to providing you with a seamless experience, from the moment you contact us to the successful completion of your project. Let us help you take your aviation needs to new heights - choose Yurico for exceptional service that truly makes a difference.</p>
            </div>
            <div className="absolute top-10 left-0 w-[120%] translate-x-[-5.5rem] mix-blend-overlay z-0">
                <video muted loop autoPlay playsInline className="w-full">
                    <source src={"/planet.mp4"} type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
}