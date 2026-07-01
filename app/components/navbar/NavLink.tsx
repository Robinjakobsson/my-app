import Link from "next/link";

type NavLinkProps = {
  isExternal: boolean;
  destination: string;
  label: string;
};

const baseClasses =
  "rounded-full px-4 py-2 text-base font-semibold text-neutral-700 transition-colors hover:bg-black/5 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

const NavLink = ({ isExternal, destination, label }: NavLinkProps) => {
  return isExternal ? (
    <a
      className={baseClasses}
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  ) : (
    <Link className={baseClasses} href={destination}>
      {label}
    </Link>
  );
};

export default NavLink;
