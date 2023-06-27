import { s } from "@/app/styles"

export const ServiceItem = ({ service: { name, description, icon, image }, i }) => {
    return <li className={`${s.container} ${s.bgImage} ${image} h-[35rem]`}>
        <div className={`grid grid-flow-row gap-6 w-full ${i % 2 ? 'pl-[50rem]' : 'pl-0'}`}>
            <div className="flex items-center gap-4">
                <div className={`${s.image} !bg-left ${icon} h-8 w-20`} />
                <h3 className="font-light text-3xl">{name}</h3>
            </div>
            <div className={s.decorLine} />
            <p className="text-base max-w-[36.875rem]">{description}</p>
        </div>
    </li>
}