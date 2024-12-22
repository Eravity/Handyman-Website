"use client";
import Link from "next/link";
// import { usePathname } from "next/navigation";

type NavigationType = {
  href: string;
  label: string;
  section?: string;
};

export default function Navigation() {
  // const pathname = usePathname();

  const navItems: NavigationType[] = [
    {
      href: "/",
      label: "Acasă",
      section: "section1",
    },
    {
      href: "/skills",
      label: "Servicii",
      section: "section2",
    },
    {
      href: "/expertise",
      label: "Despre Noi",
      section: "section3",
    },
    {
      href: "/projects",
      label: "Contact",
      section: "section4",
    },
    {
      href: "/contacts",
      label: "FAQ",
      section: "section5",
    },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section?: string
  ) => {
    event.preventDefault();
    if (section) {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="container flex justify-around mx-auto py-4">
      <h1 className="text-3xl text-[#01A8FC] font-extrabold">MeșterBun</h1>

      <div className="flex items-center gap-6">
        <nav className="flex items-center">
          <ul className="flex gap-10 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a
                    className="font-medium"
                    onClick={(e) => handleScroll(e, item.section)}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="my-auto w-[1px] h-6 bg-neutral-500"></div>
          <h1 className="font-medium">+373 (68) 237 367</h1>
        </div>
      </div>
    </div>
  );
}
