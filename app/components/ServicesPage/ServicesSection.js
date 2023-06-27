import { s } from "@/app/styles";
import { ServiceItem } from "./ServiceItem";

export const ServicesSection = () => {

    const services = [
        {
            name: "ACMI",
            description: "We provide a full range of tailored ACMI leasing services, including long-term, wet and damp leasing. We have a 24-hour global support, including central AOG and parts support, systems operation and dispatch, central crew scheduling, IT support, and sales and operation support worldwide.",
            icon: "bg-[url('./images/service_icon_1.svg')]",
            image: "bg-[url('./images/service_1.png')]"
        }, {
            name: "Aviation IT Solutions",
            description: "We provide customized products, individually designed for your company and adjustable to highly diverse requirements. We work with airport operators and airlines to deliver smart software, innovative IT solutions and other process management products for airports, ground handling, fuelling and MRO.",
            icon: "bg-[url('./images/service_icon_2.svg')]",
            image: "bg-[url('./images/service_2.png')]"
        }, {
            name: "MRO: Aircraft And Helicopters",
            description: "Yurico offers comprehensive maintenance, repair and overhaul services ranging from line maintenance to depot-level heavy maintenance, major repairs, and 24/7 aircraft&helicopter on ground services. Competencies also include consultancy and sales support activity together with project management.",
            icon: "bg-[url('./images/service_icon_3.svg')]",
            image: "bg-[url('./images/service_3.png')]"
        }, {
            name: "Business Aviation And Vip Airline",
            description: "From helicopters to corporate jets and VIP aircraft, we will organize your route to any airport in the world at a convenient time for you. We provide personal, independent advice to help you secure the best aircraft of the most suitable airports in order to help you plan the most successful trip.",
            icon: "bg-[url('./images/service_icon_4.svg')]",
            image: "bg-[url('./images/service_4.png')]"
        }, {
            name: "Flight Ops And Dispatchers",
            description: "Yurico delivers highly qualified and expert flight operation and dispatcher services to airlines, aircraft owners, operators to ensure the safety and quality of the flights. With our in-depth knowledge of flight planning, flight support and dispatch experience, or team of licensed flight OPS.",
            icon: "bg-[url('./images/service_icon_5.svg')]",
            image: "bg-[url('./images/service_5.png')]"
        }, {
            name: "Aircraft Leasing And Trading",
            description: "We provide full range of trading services, including technical inspection, storage, preparation and verification of documents, maintenance, transportation and transfer to the buyer. We will conduct the transaction on your behalf, transparently, safely and quickly.",
            icon: "bg-[url('./images/service_icon_6.svg')]",
            image: "bg-[url('./images/service_6.png')]"
        }, {
            name: "Aviation Consulting Services",
            description: "Yurico offers a wide range of consulting services to support our clients in solving business and operational challenges. Our experienced professionals created successful solutions to make your business safe, competitive and modern.",
            icon: "bg-[url('./images/service_icon_7.svg')]",
            image: "bg-[url('./images/service_7.png')]"
        }, {
            name: "Cargo Aviation",
            description: "Yurico works to drive efficiency in all areas of cargo operations and offers dynamic and innovative solutions for every aspect of the supply chain. Our experienced team will work closely with you to find the best solution and provide you a wide range of freight handling services.",
            icon: "bg-[url('./images/service_icon_8.svg')]",
            image: "bg-[url('./images/service_8.png')]"
        }, {
            name: "Aviation Training",
            description: "Yurico has access to the large database of aviation flight crew, engineers, technicians and executives, and can provide quality training, resourcing, recruitment and related services.",
            icon: "bg-[url('./images/service_icon_9.svg')]",
            image: "bg-[url('./images/service_9.png')]"
        }, {
            name: "Charter Broker",
            description: "Our company can offer you services of the best charter brokers to help you source everything and deal with all the detail, find the most suitable aircraft at the best price and ensure the smooth running of the charter from first point of contact to landing, and even onward transfer and accommodation.",
            icon: "bg-[url('./images/service_icon_10.svg')]",
            image: "bg-[url('./images/service_10.png')]"
        }, {
            name: "Ground Handling, Fuelling & Transport",
            description: "Yurico is a provider of ground handling, cargo and full-freight handling, aircraft fuelling. With our long-standing experience we aim to offer reliable ground services for safe and timely air travel.",
            icon: "bg-[url('./images/service_icon_11.svg')]",
            image: "bg-[url('./images/service_11.png')]"
        },
    ];

    return <section className={`bg-[url('./images/bg_services_clouds.png')] bg-contain py-[5.5rem]`}>
        <ul className="grid grid-flow-row gap-32">
            {services.map((s, i) => <ServiceItem key={s.image} service={s} i={i} />)}
        </ul>
    </section>
}