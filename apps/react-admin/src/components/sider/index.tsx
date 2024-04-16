import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/svg/logo.svg";
import { useStore } from "@/store";

const { SubMenu, Item } = Menu;

export default () => {
  const menus = useStore((state) => state.menus);
  const navigate = useNavigate();

  const onMenuClick = ({ key }: { key: string }) => {
    const navKey = `/${key}`;
    navigate(navKey.replace(/\/+/, "/"));
  };
  return (
    <>
      <div className="h-16 bg-white flex items-center border-b-2 border-black">
        <img className="h-12 w-12" src={logo} alt="Logo" />
        <span>项目模版</span>
      </div>
      <Menu mode="inline" onClick={onMenuClick}>
        {menus.map((menu) => {
          if (menu.children?.length) {
            return (
              <SubMenu
                key={menu.path}
                title={menu.name}
                icon={menu.icon}
                popupClassName="sider-nav"
                onTitleClick={onMenuClick}
              >
                {menu.children.map((item) => {
                  const path = `${menu.path ?? ""}/${item.path ?? ""}`;
                  return item.path ? <Item key={path}>{item.name}</Item> : null;
                })}
              </SubMenu>
            );
          }
          return menu.path ? <Item key={menu.path}>{menu.name}</Item> : null;
        })}
      </Menu>
    </>
  );
};
