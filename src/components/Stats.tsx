import { FiShoppingBag, FiPackage, FiShield, FiHeadphones } from 'react-icons/fi';

export default function Stats() {
    const stats = [
        {
            number: '50+',
            label: 'সফল স্টোর',
            icon: FiShoppingBag,
            bgColor: 'bg-[#5A2CFF]/10',
            iconColor: 'text-[#5A2CFF]',
        },
        {
            number: '10+',
            label: 'প্রোডাক্ট ডেমো',
            icon: FiPackage,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600',
        },
        {
            number: '100%',
            label: 'সিকিউর সিস্টেম',
            icon: FiShield,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-500',
        },
        {
            number: '24/7',
            label: 'এক্সপার্ট সাপোর্ট',
            icon: FiHeadphones,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-500',
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm bg-white">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-4 justify-start lg:justify-center">
                                
                                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bgColor} ${stat.iconColor}`}>
                                    <stat.icon className="w-7 h-7" />
                                </div>

                                
                                <div className="flex flex-col">
                                    <span className="text-2xl md:text-3xl font-bold text-[#5A2CFF]">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm font-medium text-gray-500">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}