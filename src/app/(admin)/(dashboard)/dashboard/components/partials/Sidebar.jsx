"use client";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { MdEditAttributes } from "react-icons/md";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { MdAddShoppingCart } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { BsCartCheck } from "react-icons/bs";
import { RiCoupon3Line } from "react-icons/ri";

import { FaRegHeart, FaGift, FaBlogger, FaUserCog } from "react-icons/fa";
import { MdPhotoLibrary, MdRateReview } from "react-icons/md";
import { BiSlideshow } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const router = useRouter();

  const handleNavigateRoutes = (e) => {
    const ROUTES = {
      dashboard: "/dashboard",
      products: "/dashboard/products/product",
      attributeOption: "/dashboard/products/attribute-option",
      attribute: "/dashboard/products/attribute",
      category: "/dashboard/products/category",

      orders: "/dashboard/orders/order",
      wishlist: "/dashboard/orders/wishlist",
      cart: "/dashboard/orders/cart",
      coupon: "/dashboard/orders/coupon",
      giftCard: "/dashboard/orders/gift-card",

      blog: "/dashboard/blog",
      gallery: "/dashboard/gallery",
      review: "/dashboard/review",
      slider: "/dashboard/slider",
      user: "/dashboard/user",
      accountSetting: "/dashboard/account-setting",
      globalSetting: "/dashboard/global-setting",
    };

    const routes = {
      1: ROUTES.dashboard,
      2: ROUTES.products,
      3: ROUTES.attributeOption,
      4: ROUTES.attribute,
      5: ROUTES.category,
      6: ROUTES.orders,
      7: ROUTES.wishlist,
      8: ROUTES.cart,
      9: ROUTES.coupon,
      10: ROUTES.giftCard,
      11: ROUTES.blog,
      12: ROUTES.gallery,
      13: ROUTES.review,
      14: ROUTES.slider,
      15: ROUTES.user,
      16: ROUTES.accountSetting,
      17: ROUTES.globalSetting,
    };

    router.push(routes[e.key] || "/");
  };

  const items = [
    getItem(
      "Dashboard",
      "1",
      <RiDashboardHorizontalFill className="text-icon" />
    ),
    getItem("Products", "sub1", <AiFillProduct className="text-icon" />, [
      getItem("Product", "2", <MdAddShoppingCart className="text-icon" />),
      getItem("Category", "5", <MdOutlineCategory className="text-icon" />),
      getItem("Attribute", "4", <MdEditAttributes className="text-icon" />),
      getItem("Attribute Option", "3", <LuDot className="-ml-4 text-icon" />),
    ]),
    getItem("Orders", "sub2", <HiShoppingCart className="text-icon" />, [
      getItem("Order", "6", <FaCartPlus className="text-icon" />),
      getItem("Wishlist", "7", <FaRegHeart className="text-icon" />),
      getItem("Cart", "8", <BsCartCheck className="text-icon" />),
      getItem("Coupon", "9", <RiCoupon3Line className="text-icon" />),
      getItem("Gift Card", "10", <FaGift className="text-icon" />),
    ]),
    getItem("Blog", "11", <FaBlogger className="text-icon " />),
    getItem("Gallery", "12", <MdPhotoLibrary className="text-icon" />),
    getItem("Review", "13", <MdRateReview className="text-icon" />),
    getItem("Slider", "14", <BiSlideshow className="text-icon" />),
    getItem("User", "15", <CgUserList className="text-icon" />),
    getItem("Account Setting", "16", <FaUserCog className="text-icon" />),
    getItem("Global Setting", "17", <FiSettings className="text-icon" />),
  ];
  return (
    <Sider
      breakpoint="lg"
      style={{ minHeight: "100vh" }}
      className="!absolute lg:!static !z-50"
      theme="light"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div>
        <h2 className="demo-logo-vertical text-dark font-bold text-lg md:text-xl lg:text-2xl px-2 py-2 text-center">
          Dash Logo
        </h2>
      </div>
      <Menu
        onClick={handleNavigateRoutes}
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        className="font-bold !text-[.887rem]"
      />
    </Sider>
  );
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default Sidebar;
