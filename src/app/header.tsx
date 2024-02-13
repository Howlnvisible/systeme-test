"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerLinks } from "./config";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-cent bg-dark-main border-transparent rounded px-6 py-6 w-full">
      <div className="flex gap-4 text-white">
        {headerLinks.map((item: any, i: any) => (
          <Link
            href={item.link}
            className={pathname === item.link ? "underline" : ""}
            key={`headerLinks-${i}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
