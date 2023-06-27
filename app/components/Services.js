import { s } from "../styles"
import { Service } from "./Service"

const services = [
    {
        name: 'Cargo Aviation',
        image: 'bg-[url("./images/icon_service_1.svg")]',
    }, {
        name: 'Charter broker',
        image: 'bg-[url("./images/icon_service_2.svg")]',
    }, {
        name: 'Aviation  IT Solution',
        image: 'bg-[url("./images/icon_service_3.svg")]',
    }, {
        name: 'ACMI',
        image: 'bg-[url("./images/icon_service_4.svg")]',
    }, {
        name: 'Aircraft leasing & Trading',
        image: 'bg-[url("./images/icon_service_5.svg")]',
    }, {
        name: 'Ground handling fuelling & transport',
        image: 'bg-[url("./images/icon_service_6.svg")]',
    }, {
        name: 'Flight ops & dispatchers',
        image: 'bg-[url("./images/icon_service_7.svg")]',
    }, {
        name: 'Business aviation and VIP Airline',
        image: 'bg-[url("./images/icon_service_8.svg")]',
    }, {
        name: 'MRO - aircraft & helicopters',
        image: 'bg-[url("./images/icon_service_9.svg")]',
    }, {
        name: 'Aviation training & personnel resourcing',
        image: 'bg-[url("./images/icon_service_10.svg")]',
    },
]
export const Services = () => {
    return <div className="w-full grid grid-flow-row place-items-start gap-8">
        <h2 className="font-light text-5xl">Services We Provide</h2>
        <div className={s.decorLine} />
        <p className="text-base max-w-[52rem] mb-24">We offer a diverse range of aviation services to meet your specific needs and we strive to exceed your expectations with exceptional service and customized solutions. </p>
        <ul className="w-full grid grid-cols-3 gap-x-32 gap-y-10">
            {services.map(s => <Service key={s.name} s={s} />)}
        </ul>
    </div>
}