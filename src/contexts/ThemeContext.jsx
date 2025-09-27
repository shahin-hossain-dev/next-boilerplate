import { ConfigProvider } from "antd";
import React from "react";

const ThemeContextProvider = ({ children }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {},
          components: {
            Layout: {
              siderBg: "#2F3349",
            },
            Menu: {
              darkSubMenuItemBg: "#2F3349",
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
};

export default ThemeContextProvider;
