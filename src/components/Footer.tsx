import React from 'react';
import {
    FiBox,
    FiCoffee,
    FiHeart,
    FiUser,
    FiShoppingBag,
    FiMonitor
} from 'react-icons/fi';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

const partners = [
    { name: 'TechMart', icon: FiBox },
    { name: 'DailyFood', icon: FiCoffee },
    { name: 'BeautyCare', icon: FiHeart },
    { name: 'FashionHub', icon: FiUser },
    { name: 'MegaStore', icon: FiShoppingBag },
    { name: 'DigitalShop', icon: FiMonitor },
];

export default function Footer() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
                        যারা আমাদের উপর বিশ্বাস রেখেছেন
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <partner.icon className="text-sm" />
                                <span className="font-semibold text-lg">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-13 rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#5A2CFF] to-[#4A1DFF] p-8 md:p-12 shadow-2xl shadow-indigo-200">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">

                        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
                                <HiOutlineRocketLaunch className="text-white text-5xl md:text-6xl" />

                                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2">
                                    আজই শুরু করুন আপনার ই-কমার্স যাত্রা!
                                </h3>
                                <p className="text-white/80 text-sm md:text-base font-medium">
                                    Ecomtara এর সাথে আপনার ব্যবসাকে দিয়ে যান নতুন উচ্চতায়।
                                </p>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <button className="px-8 py-3 bg-white text-[#5A2CFF] font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg">
                                ডেমো দেখুন
                            </button>
                            <button className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all">
                                যোগাযোগ করুন
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}