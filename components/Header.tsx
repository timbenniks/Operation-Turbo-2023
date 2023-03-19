import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

type NavLink = {
  name: string;
  path: string;
};

type Props = {
  nodes: NavLink[];
};

const Header: React.FC<Props> = ({ nodes }: Props) => {
  const router = useRouter();

  const navItems = nodes.filter((node) => node.path !== "/");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-[#091A32] bg-opacity-70 z-20">
      <div className="mx-auto relative flex h-20 max-w-7xl items-center justify-start px-8 xl:px-0">
        <button
          className="relative h-12 w-12 bg-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 transform">
            <span
              className={`absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        <ul
          className={`items-center md:space-x-6 text-sm md:flex  ${
            open
              ? "absolute top-20 left-0 flex w-full flex-col bg-black p-4"
              : "hidden"
          }`}
        >
          <li key="home" className={open ? "py-4 text-xl" : "p-auto text-sm"}>
            <Link
              title="home"
              href="/"
              className={`uppercase font-black text-lg ${
                router.asPath === "/" ? "underline" : "no-underline"
              }`}
            >
              HOME
            </Link>
          </li>
          {navItems &&
            navItems.map((node) => {
              return (
                <li
                  key={node.name}
                  className={open ? "py-4 text-xl" : "p-auto text-sm"}
                >
                  {node.path === "/presskit" ? (
                    <a
                      title={node.name}
                      href={node.path}
                      className="uppercase font-black text-lg no-underline"
                    >
                      {node.name}
                    </a>
                  ) : (
                    <Link
                      title={node.name}
                      href={node.path}
                      className={`uppercase font-black text-lg ${
                        router.asPath === node.path
                          ? "underline"
                          : "no-underline"
                      }`}
                    >
                      {node.name}
                    </Link>
                  )}
                </li>
              );
            })}
        </ul>
        <Image
          src="/logo.png"
          alt="Tim Benniks"
          className="absolute right-8 top-2"
          width={100}
          height={100}
          loading="eager"
        />
      </div>
    </header>
  );
};

export default Header;
