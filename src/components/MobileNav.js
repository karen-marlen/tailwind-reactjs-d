import React from 'react'
import Image from '../images/travel.svg';

function MobileNav() {
    return (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md-hidden">
            <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-label="main-menu">
                    <div className="px-5 pt-4 flex items-center justify-between">
                    </div>
                </div>
                <Image />
            </div>
        </div>
    )
}

export default MobileNav
