import Link from "next/link";
// import clsx from 'clsx';
import { LogoSkeleton } from "./skeletons";

const links = [
    { name: 'ראשי', href: '/' },
    { name: 'מאגרי מידע', href: '/datasets' },
    { name: 'אודות', href: '/about' },
]

export default function NavLinks() {
    return (
        <>
            <div className="flex">
                <LogoSkeleton />
                {
                    links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex px-5 items-center justify-center font-medium hover:bg-sky-100 hover:text-blue-600 hover:rounded-full focus:text-blue-600"
                            >
                                <p>{link.name}</p>
                            </Link>
                        );
                    })
                }
            </div>
            <Link
                className="px-4"
                href="/contact-us">
                <button
                    className="p-1 pr-3 pl-3 text-base text-white bg-blue-700 rounded-full hover:ring"
                >
                    צור קשר
                </button>
            </Link>
        </>
    );
}