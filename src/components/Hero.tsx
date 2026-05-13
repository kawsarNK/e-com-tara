
"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FiSettings, FiCode, FiHeadphones, FiRefreshCw } from 'react-icons/fi';

export default function Hero() {
    const router = useRouter();

    const handleDemoClick = () => {
        router.push('/Livedemo')
    };

    const handlePricingClick = () => {
        router.push('/Pricing')
    };

    return (
        <section className="relative bg-[#F9FAFF] overflow-hidden py-16 md:py-24">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
                            <HiOutlineRocketLaunch className="text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-700">
                                আপনার নিজস্ব ব্র্যান্ড, আপনার নিজস্ব ই-কমার্স
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.2]">
                            আপনার ই-কমার্স ব্যবসার <br />
                            জন্য সম্পূর্ণ <span className="text-[#5A2CFF]">SaaS সমাধান</span>
                        </h1>

                        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Ecomtara একটি শক্তিশালী ও সহজেই ব্যবহারযোগ্য ই-কমার্স SaaS প্ল্যাটফর্ম।
                            ওয়েবসাইট, ইনভেন্টরি, CRM, কুরিয়ার অটোমেশনসহ সবকিছু এক জায়গায় —
                            আপনার ব্যবসাকে দিন নতুন উচ্চতা।
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button
                                onClick={handleDemoClick}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-lg shadow-indigo-200 hover:scale-105 transition-all bg-[#5A2CFF]"
                            >
                                ডেমো দেখুন
                                <BsArrowRight className="text-xl" />
                            </button>
                            <button
                                onClick={handlePricingClick}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-indigo-100 text-indigo-600 bg-white hover:bg-indigo-50 transition-all"
                            >
                                মূল্য পরিকল্পনা দেখুন
                            </button>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-gray-500">
                            {[
                                { icon: FiSettings, text: 'সহজ সেটআপ' },
                                { icon: FiCode, text: 'কোন কোডিং নয়' },
                                { icon: FiHeadphones, text: '২৪/৭ সাপোর্ট' },
                                { icon: FiRefreshCw, text: 'নিয়মিত আপডেট' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2.5">
                                    <item.icon className="text-xl text-indigo-500" />
                                    <span className="text-sm font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
                        <div className="relative w-full max-w-[640px] aspect-[4/3]">
                            <div className="absolute top-0 right-0 w-[90%] md:w-[85%] aspect-video bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10">
                                <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="relative w-full h-[calc(100%-2rem)]">
                                    <Image
                                        src="/electronic.png"
                                        alt="Desktop E-commerce Product Page"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 md:-left-12 w-[35%] md:w-[30%] aspect-[1/2] bg-black rounded-[36px] shadow-2xl border-[12px] border-black overflow-hidden z-20">
                                <div className="relative w-full h-full bg-white rounded-[24px] overflow-hidden">
                                    <Image
                                        src="/food.png"
                                        alt="Mobile Restaurant App View"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#5A2CFF] rounded-full opacity-10 blur-3xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full opacity-10 blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}