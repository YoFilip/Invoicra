import { Star } from 'lucide-react';

export default function Hero() {
    return (
        <section className="py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-4">
                    Effortless Invoice
                    <br />
                    Management System
                </h1>

                <p className="text-base md:text-lg xl:text-xl text-[#333333] mb-6">
                    Discover Invoicra — the simple way to create, send, and manage your invoices online.
                </p>

                <a
                    href="#"
                    className="group inline-flex items-center bg-accent text-white font-medium px-6 py-3 rounded-md border-2 border-accent hover:bg-white hover:text-accent hover:border-accent transition"
                >
                    <Star className="w-4 h-4 mr-2 text-white transition-colors group-hover:text-accent" />
                    Get Started
                    <span className="ml-2 text-sm bg-accent text-white rounded px-2 py-0.5">
                        Free
                    </span>
                </a>
            </div>
            <div className="mt-20">
                <div className="w-[60%] h-[60vh] bg-gray-100 m-auto rounded-2xl"></div>
            </div>
        </section>
    );
}