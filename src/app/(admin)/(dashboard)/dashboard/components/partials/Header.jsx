import { Avatar, Button, Input, Layout, theme } from "antd";
const { Header: AntHeader } = Layout;
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

const LinkItem = ({ title, icon: Icon }) => {
  return (
    <>
      {title && (
        <span className="flex gap-2 lg:gap-3 items-center">
          <Icon />
          <span>{title}</span>
        </span>
      )}
    </>
  );
};

const items = [
  {
    label: (
      <Link href="/my-profile" rel="noopener noreferrer">
        <span className="flex gap-2 items-center">
          <LinkItem title={"My Profile"} icon={FaRegUser} />
        </span>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link href="setting" rel="noopener noreferrer">
        <LinkItem title={"Setting"} icon={TbSettings} />
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Button type="primary" className="!w-full">
        <LinkItem title={"Logout"} icon={MdLogout} />
      </Button>
    ),
    key: "3",
  },
];

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntHeader
      style={{ padding: 0, margin: 10, background: colorBgContainer }}
      className="!shadow !rounded-lg"
    >
      <div className="px-4">
        <div className="flex gap-2 items-center justify-between">
          <Input
            prefix={<BiSearch />}
            placeholder="Search Anything"
            variant="borderless"
          />
          <div className="">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
