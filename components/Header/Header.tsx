"use client";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import useScrollingUp from "../scrollingHock/useScrollingUp";
import useNearTopOfScreen from "../scrollingHock/useNearTopOfScreen";

function Header() {
  const scrollingUp = useScrollingUp();
  const isNearTop = useNearTopOfScreen();
  return (
    <header
      className={`fixed transition-all left-0 w-full z-50        
      ${scrollingUp ? "top-[1%]" : "top-[-10%]"} `}
    >
      <div
        className={`px-8 max-w-[99%] rounded-3xl transition-all bg-gray-50 container mx-auto flex justify-between items-center py-2 ${
          isNearTop ? "" : "bg-gray-800  mx-auto glassy "
        } `}
      >
        <Link href="/" className="">
          <h1 className="text-4xl font-bold py-2 ">TRAVEL X</h1>
        </Link>
        <div className="flex justify-center items-center gap-6 lg:gap-16">
          <nav className="hidden lg:block">
            <ul className="flex justify-between items-center flex-row gap-4 text-lg font-medium">
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  How Hilink Work?
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/Services"} className="link">
                  Services
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/About"} className="link">
                  About
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/Pricing"} className="link">
                  Pricing
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/ContactUs"} className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex justify-between items-center flex-row gap-2">
            <button className="btn prim flex justify-center gap-1 items-center">
              <Image
                src={"/images/user.svg"}
                alt="user icon"
                width={20}
                height={20}
              />
              Sign In
            </button>
            <button className="btn sec">Login</button>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
