import { s } from "@/app/styles";
import Link from "next/link";

export const Navigation = () => {
  return (
    <>
      <div
        className={`${s.gridRow} w-full gap-10 bg-white text-black pt-10 pb-20 px-10 md:px-96`}
      >
        <div className={`${s.image} bg-[url('./images/logo_dark.svg')] h-[4.3125rem] w-[21.625rem]`} />
        <div className="flex w-full md:justify-between flex-col md:flex-row gap-32 pt-16 border-t-[1px] border-t-[#cecece]">
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl md:text-base">Office</h3>
            <div className="font-light opacity-50 text-base md:text-sm flex flex-col gap-2">
              <Link href="http://maps.google.com/?q=36 Aigyptou Avenue
                6030 Larnaca, Cyprus" target="_blank">
                36 Aigyptou Avenue<br />
                6030 Larnaca, Cyprus
              </Link>
              <Link href="mailto:office@yurico.cy">office@yurico.cy</Link>
              <Link href="tel:+35724656431">+357 24 656431</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl md:text-base">Menu</h3>
            <div className="font-light opacity-50 text-base md:text-sm flex gap-8">
              <div className="flex flex-col gap-2">
                <Link href="/">Homepage</Link>
                <Link href="about">About Us</Link>
                <Link href="services">Services</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="carrers">Carrers</Link>
                <Link href="contacts">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="font-medium text-2xl md:text-base">Social Media</h3>
            <div className="font-light opacity-50 text-base md:text-sm flex flex-col gap-2">
              <Link
                href="https://www.facebook.com/people/Genteel-Jet/pfbid01UkxW75b7kFGQigdCyeHhRu2EpmcNW5or5e2r4FkM75quBG7Gf2oGaUH2maArnXal/"
                target="_blank"
              >Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link
                href="https://www.linkedin.com/company/genteel-jet/"
                target="_blank"
              >LinkedIn</Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-8">
            <h3 className="font-medium text-2xl md:text-base">
              Subscribe to our newsletter
            </h3>
            <form className="flex flex-col items-start gap-7">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Address Email*"
                  className={s.input}
                />
                <div className={s.inputRhomb} />
              </div>
              <button type="submit" className={s.button2}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between items-center w-full py-5 px-10 md:!px-96 bg-black font-light text-xs"
      >
        <p>
          Created by Salva Studio.{" "}
          <Link href='#' className="text-blue underline">
            2023 © All Rights Reserved
          </Link>
        </p>
        <div
          className={`${s.gridCol} hidden md:grid gap-8 opacity-30`}
        >
          <Link href="#">Legal information</Link>
          <Link href="#">Copyright</Link>
          <Link href="#">General Terms & Conditions</Link>
        </div>
      </div>
    </>
  );
};
