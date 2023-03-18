import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "./icon";
import { CldImage } from "next-cloudinary";

type NavLink = {
  name: string;
  path: string;
};

type Props = {
  nodes: NavLink[];
};

const Footer: React.FC<Props> = ({ nodes }: Props) => {
  const router = useRouter();

  const navItems = nodes.filter((node) => node.path !== "/");

  return (
    <footer className="w-full bg-[#091A32]">
      <div className="flex flex-col lg:flex-row justify-between max-w-[1400px] mx-auto items-center">
        <div className="flex h-auto md:h-36 py-8 md:py-0 justify-start px-8 xl:px-0">
          <ul
            className={`items-center text-center md:space-x-6 text-sm md:flex`}
          >
            <li key="home" className="my-3 md:my-0 text-sm">
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
                  <li key={node.name} className="my-3 text-sm">
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
        </div>
        <ul className="flex flex-col lg:flex-row lg:mr-8">
          <li className="inline-flex mb-4 lg:mr-8 lg:mb-0 justify-center">
            <Icon icon="twitter" url="https://twitter.com/timbenniks" />
            <Icon icon="youtube" url="https://youtube.com/timbenniks" />
            <Icon icon="github" url="https://github.com/timbenniks" />
            <Icon icon="linkedin" url="https://linkedin.com/in/timbenniks" />
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/timbenniks"
              target="_blank"
              rel="noopener noreferrer"
              title="Buy Tim Benniks a Coffee"
            >
              <CldImage
                width={545}
                height={153}
                src="bmac_s0znef.png"
                alt="Buy me a coffee"
                loading="lazy"
                sizes="(max-width: 500px) 140px, 300px"
                className="w-52 mb-12 lg:mb-0"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
