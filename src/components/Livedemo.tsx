import React from 'react';
import Image from 'next/image';
import { IoMdCart } from 'react-icons/io';
import { PiBowlFoodFill } from 'react-icons/pi';
import { FaShopify, FaBagShopping } from 'react-icons/fa6';

const demos = [
    {
        title: 'Electronics Demo',
        link: 'electronics.shopnet.com',
        image: '/electronic.png',
        color: 'bg-blue-600',
        icon: IoMdCart,
    },
    {
        title: 'Food Demo',
        link: 'food.shopnet.com',
        image: '/foods.png',
        color: 'bg-red-500',
        icon: PiBowlFoodFill,
    },
    {
        title: 'Cosmetics Demo',
        link: 'cosmetics.shopnet.com',
        image: '/cosmetics.png',
        color: 'bg-indigo-600',
        icon: FaShopify,
    },
    {
        title: 'Fashion Demo',
        link: 'fashion.shopnet.com',
        image: '/fashion.png',
        color: 'bg-pink-400',
        icon: FaBagShopping,
    },
];

const LiveDemo = () => {
    return (
        <section className="py-20 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        আমাদের লাইভ ডেমো
                    </h2>
                    <p className="text-gray-500 text-lg">
                        বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {demos.map((demo, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`${demo.color} h-8 flex items-center px-4 gap-1.5`}>
                                <div className="w-2 h-2 rounded-full bg-white/40" />
                                <div className="w-2 h-2 rounded-full bg-white/40" />
                                <div className="w-2 h-2 rounded-full bg-white/40" />
                            </div>

                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                                <Image
                                    src={demo.image}
                                    alt={demo.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                </div>
                            </div>

                            <div className="p-6 flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-2xl ${demo.color} bg-opacity-10 flex items-center justify-center text-2xl`}>
                                    <demo.icon className="text-[#5A2CFF]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                        {demo.title}
                                    </h3>
                                    <p className="text-blue-600 text-sm font-medium mt-1">
                                        {demo.link}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveDemo;