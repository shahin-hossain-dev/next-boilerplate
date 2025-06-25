import { Card } from "antd";

import Image from "next/image";
const productIcon = "/images/icons/pending.png";
const orderIcon = "/images/icons/delivery.png";
const usersIcon = "/images/icons/cancel.png";
const salesIcon = "/images/icons/delivered.png";

const stats = [
  {
    title: "Pending Order",
    count: "10",
    bg: "bg-[#E5F9FF]",
    text: "text-info-500",
    icon: productIcon,
  },
  {
    title: "Order for Delivery",
    count: "10",
    bg: "bg-[#E5F9FF]",
    text: "text-warning-500",
    icon: orderIcon,
  },
  {
    title: "Canceled Order",
    count: "10",
    bg: "bg-[#E5F9FF]",
    text: "text-[#5743BE]",
    icon: usersIcon,
  },
  {
    title: "Delivered Order",
    count: "10",
    bg: "bg-[#E5F9FF]",
    text: "text-[#00EBFF]",
    icon: salesIcon,
  },
];

const OrderGroupStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 md:mt-8 lg:mt-12">
      {stats?.map((stat, idx) => (
        <Card key={idx} className="!shadow">
          <div className="flex !items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`${stat.bg} rounded-full p-2`}>
                <Image
                  src={stat?.icon}
                  width={30}
                  height={30}
                  alt={stat?.title}
                  className="w-[2rem]"
                />
              </div>
              <p className={`${stat?.text} font-semibold text-base !mb-0`}>
                {stat?.title}
              </p>
            </div>

            <p className="font-semibold text-xl md:text-xl !mb-0">
              {stat?.count}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default OrderGroupStats;
