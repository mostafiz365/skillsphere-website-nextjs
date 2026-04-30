"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyNavLink = ({href, children}) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`${pathname == href && 'border-b-2 border-white pb-1.5'}`}>
            {children}
        </Link>
    );
};

export default MyNavLink;