import Link from "next/link";
import { useRouter } from "next/router";

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
      <div className="m-auto flex h-auto md:h-20 py-8 md:py-0 max-w-7xl items-center justify-center px-8 xl:px-0">
        <ul className={`items-center text-center md:space-x-6 text-sm md:flex`}>
          <li key="home" className="my-4 md:my-0 text-sm">
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
                <li key={node.name} className="my-2 text-sm">
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
    </footer>
  );
};

export default Footer;
