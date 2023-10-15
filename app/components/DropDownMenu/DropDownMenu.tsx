"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function DropDownMenu() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const clickHandle = () => {
    setMenuToggle((prev): boolean => {
      return !prev;
    });
  };
  return (
    <nav className="block lg:hidden">
      <button onClick={clickHandle}>
        <Image src={"/images/menu.svg"} alt="menu" height={30} width={30} />
      </button>
      <nav
        className={`absolute w-full ${
          menuToggle ? "left-0" : "left-[100%]"
        } top-[77px] bg-gray-300 h-[calc(100vh-77.4px)] transition-all`}
      >
        <ul className="flex h-full justify-center items-center flex-col gap-4 text-2xl font-medium">
          <li className="overflow-hidden">
            <Link href={"/HowHilinkWork?"} className="link">
              How Hilink Work?
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link href={"/HowHilinkWork?"} className="link">
              Services
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link href={"/HowHilinkWork?"} className="link">
              How Hilink Work?
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link href={"/HowHilinkWork?"} className="link">
              Pricing
            </Link>
          </li>
          <li className="overflow-hidden">
            <Link href={"/HowHilinkWork?"} className="link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default DropDownMenu;
