import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  isExternal: boolean;
  destination: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

const baseClasses =
  "rounded-full px-4 py-2 text-base font-semibold text-neutral-700 transition-colors hover:bg-black/5 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";

const NavLink = ({
  isExternal,
  destination,
  label,
  className,
  onClick,
}: NavLinkProps) => {
  return isExternal ? (
    <a
      className={cn(baseClasses, className)}
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {label}
    </a>
  ) : (
    <Link className={cn(baseClasses, className)} href={destination} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavLink;
