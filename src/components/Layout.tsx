import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Project", path: "/project" },
    { label: "Timeline", path: "/timeline" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] min-h-screen relative">
        <header className="w-full h-[72px] relative">
          <div className="flex w-full h-[72px] items-center justify-between px-6 py-2.5 bg-basewhite shadow-shadow-nav-shadown">
            <div className="flex items-center">
              <h1 
                className="font-['Rubik_Bubbles',Helvetica] font-normal text-black text-3xl cursor-pointer" 
                onClick={() => navigate("/")}
              >
                PMIT
              </h1>
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-10">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink 
                      className={`font-['Inter',Helvetica] font-bold text-base leading-[25px] cursor-pointer ${
                        location.pathname === item.path 
                          ? "text-purple-600" 
                          : "text-graygray-700"
                      }`}
                      onClick={() => navigate(item.path)}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button 
              className="px-[25px] py-3.5 rounded-[5px] [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)]"
              onClick={() => navigate("/contact")}
            >
              <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-graygray-50 text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)]">
                Contact us
              </span>
            </Button>
          </div>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};