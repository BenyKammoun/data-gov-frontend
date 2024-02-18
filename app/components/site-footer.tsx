import { FooterLogoSkeleton } from "./skeletons";
import Link from "next/link";

const links = [
    { name: 'תנאי שימוש', href: '/' },
    { name: 'קישור', href: '/' },
    { name: 'קישור', href: '/' }
    
]

export default function Footer() {
    return (
        <div className="flex justify-between items-center w-full p-3">
            <div className="flex">
                <FooterLogoSkeleton />
                {
                    links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex px-5 items-center justify-center font-medium hover:font-bold focus:font-bold"
                            >
                                <p>{link.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}