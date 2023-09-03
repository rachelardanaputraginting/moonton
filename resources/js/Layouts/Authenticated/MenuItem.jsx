import { Link } from "@inertiajs/react";

export default function MenuItem({ link, text, icon, method, isActive }) {
    return (
        <Link href={link ? route(link) : null} className={`side-link ${isActive && 'active'}`} method={method} >
            {icon}
            {text}
        </Link>
    )
}
