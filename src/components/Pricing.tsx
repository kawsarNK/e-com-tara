import React from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

const pricingPlans = [
    {
        title: 'মাসিক প্ল্যান',
        price: '২,৯৯৯',
        duration: '/ মাস',
        features: ['১,০০০ অর্ডার/মাস', 'সকল ফিচার', 'সকল থিম এক্সেস', '২৪/৭ সাপোর্ট'],
        buttonText: 'এখন শুরু করুন',
        color: 'bg-[#5A2CFF]',
        textColor: 'text-[#5A2CFF]',
        badge: null,
    },
    {
        title: '৬ মাসের প্ল্যান',
        price: '১৪,৯৯৯',
        duration: '/ ৬ মাস',
        features: ['৭,০০০ অর্ডার/মাস', 'সকল ফিচার', 'সকল থিম এক্সেস', 'অগ্রাধিকার সাপোর্ট'],
        buttonText: 'এখন শুরু করুন',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        badge: 'জনপ্রিয়',
    },
    {
        title: 'বার্ষিক প্ল্যান',
        price: '২৬,৯৯৯',
        duration: '/ বছর',
        features: ['১৫,০০০ অর্ডার/মাস', 'সকল ফিচার', 'সকল থিম এক্সেস', 'অগ্রাধিকার সাপোর্ট', 'বছরে ২ মাস ফ্রি'],
        buttonText: 'এখন শুরু করুন',
        color: 'bg-green-600',
        textColor: 'text-green-600',
        badge: 'সাশ্রয়ী',
    },
];

export default function Pricing() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        SaaS মূল্য পরিকল্পনা
                    </h2>
                    <p className="text-gray-500">আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">


                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50"
                            >
                                {plan.badge && (
                                    <span className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-bold text-white ${plan.color}`}>
                                        {plan.badge}
                                    </span>
                                )}
                                <h3 className={`text-lg font-bold mb-6 ${plan.textColor}`}>{plan.title}</h3>
                                <div className="flex items-baseline mb-8">
                                    <span className={`text-3xl font-black ${plan.textColor}`}>৳{plan.price}</span>
                                    <span className="text-gray-400 text-sm ml-1">{plan.duration}</span>
                                </div>
                                <ul className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <FiCheck className={plan.textColor} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90 ${plan.color}`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>


                    <div className="lg:col-span-4 flex flex-col p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-indigo-700 mb-2">লাইফটাইম প্ল্যান</h3>
                            <p className="text-sm text-gray-500 mb-8">আপনার নিজের সার্ভারে হোস্টিং</p>

                            <div className="flex gap-6 mb-10">
                                <ul className="flex-1 space-y-4">
                                    {[
                                        'কোন অর্ডার লিমিট নেই',
                                        'আপনার নিজের ডোমেইন',
                                        'আপনার নিজের সার্ভার',
                                        'এককালীন পেমেন্ট',
                                        'সম্পূর্ণ সোর্স কোড',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <FiCheck className="text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>


                                <div className="hidden sm:block w-32 h-32 relative">
                                    <Image
                                        src="/server.png"
                                        alt="Server"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <button className="w-full py-4 rounded-xl font-bold text-white bg-indigo-600 shadow-lg shadow-indigo-100">
                                বিস্তারিত জানতে যোগাযোগ করুন
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}