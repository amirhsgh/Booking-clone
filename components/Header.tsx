"use client"
import Link from "next/link";
import { useState } from "react";
export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-[#013B94]">
            <nav 
                className="mx-auto flex max-w-7xl items-center justify-between
                p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <img className="h-12 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Booking.com_Logo_Grey.svg/1280px-Booking.com_Logo_Grey.svg.png" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button" 
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        
                    </button>
                </div>
            </nav>            
        </header>
    )
}
