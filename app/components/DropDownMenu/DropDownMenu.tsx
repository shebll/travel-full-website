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
      <button test-id={"button"} onClick={clickHandle}>
        <Image src={"/images/menu.svg"} alt="menu" height={30} width={30} />
      </button>
      <nav
        className={`absolute w-full flex flex-col p-6 justify-between ${
          menuToggle ? "left-0" : "left-[100%]"
        } top-[77px] bg-gray-300 h-[calc(100vh-77.4px)] transition-all`}
      >
        <ul className="flex h-full justify-start items-start flex-col gap-6 text-2xl font-medium">
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
        <div className="flex justify-between items-center flex-col gap-2">
          <button className="btn prim flex justify-center gap-1 items-center w-full">
            <Image
              src={"/images/user.svg"}
              alt="user icon"
              width={20}
              height={20}
            />
            Sign In
          </button>
          <button className="btn sec w-full">Login</button>
        </div>
      </nav>
    </nav>
  );
}

export default DropDownMenu;
