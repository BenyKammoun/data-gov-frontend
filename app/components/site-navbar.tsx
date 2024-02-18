import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavBar(){
    return (
        <div className="flex justify-between items-center w-full px-3 py-3">
            <NavLinks />
        </div>
    );
}
