import Link from "next/link";

type NavLink = {
  name: string;
  path: string;
};

type Props = {
  nodes: NavLink[];
};

const Footer: React.FC<Props> = ({ nodes }: Props) => {
  const navItems = nodes.filter((node) => node.path !== "/");

  return (
    <footer className="w-full bg-[#091A32]">
      <div className="m-auto flex h-20 max-w-7xl items-center justify-center px-8 xl:px-0">
        <ul className={`items-center text-center md:space-x-6 text-sm md:flex`}>
          <li key="home" className="p-auto text-sm">
            <Link
              title="home"
              href="/"
              className="uppercase font-black text-lg no-underline"
            >
              HOME
            </Link>
          </li>
          {navItems &&
            navItems.map((node) => {
              return (
                <li key={node.name} className="p-auto text-sm">
                  <Link
                    title={node.name}
                    href={node.path}
                    className="uppercase font-black text-lg no-underline"
                  >
                    {node.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
