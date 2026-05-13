import React from 'react';
import {
    FiShoppingCart,
    FiBox,
    FiUsers,
    FiTruck,
    FiShield,
    FiLayout
} from 'react-icons/fi';

const features = [
    {
        title: 'ই-কমার্স ওয়েবসাইট',
        description: 'প্রফেশনাল ও মডার্ন ডিজাইনের ই-কমার্স ওয়েবসাইট',
        icon: FiShoppingCart,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        title: 'ইনভেন্টরি ম্যানেজমেন্ট',
        description: 'স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন',
        icon: FiBox,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
    },
    {
        title: 'CRM সিস্টেম',
        description: 'কাস্টমার অর্ডার ও যোগাযোগ ব্যবস্থাপনা',
        icon: FiUsers,
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
    },
    {
        title: 'কুরিয়ার অটোমেশন',
        description: 'অটোমেটিক শিপিং ও ট্র্যাকিং ব্যবস্থা',
        icon: FiTruck,
        color: 'text-green-600',
        bgColor: 'bg-green-50',
    },
    {
        title: 'ফ্রড চেকিং',
        description: 'অর্ডারের ফ্রড ডিটেকশন ও ঝুঁকি নিয়ন্ত্রণ',
        icon: FiShield,
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        title: 'ল্যান্ডিং পেইজ',
        description: 'প্রচারের জন্য কনভার্টিং ল্যান্ডিং পেইজ',
        icon: FiLayout,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        সবকিছু এক প্ল্যাটফর্মে
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        আপনার ই-কমার্স ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার
                    </p>
                </div>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                        >
                        
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${feature.bgColor}`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>

                            
                            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                {feature.title}
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}