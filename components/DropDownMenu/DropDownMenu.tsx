"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
function DropDownMenu() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  useEffect(() => {
    if (menuToggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuToggle]);
  const clickHandle = () => {
    setMenuToggle((prev): boolean => {
      return !prev;
    });
  };
  return (
    <nav className="block lg:hidden">
      {menuToggle && (
        <div
          onClick={clickHandle}
          className="absolute inset-0 -z-10 h-screen trams bg-gray-500/50 top-[-10px] "
        ></div>
      )}
      <button test-id={"button"} onClick={clickHandle}>
        <Image src={"/images/menu.svg"} alt="menu" height={30} width={30} />
      </button>
      <nav
        className={`absolute w-[99%] flex flex-col p-6 justify-between gap-20 bg-gray-200 rounded-2xl  ${
          menuToggle ? "left-[50%] translate-x-[-50%]" : "left-[120%]"
        } top-[77px] transition-all duration-500 ease-in-out`}
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
