"use client"

import { Menu, X } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"
import { LanguageSwitcher } from "./ui/language-switcher"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { label: t("nav.home"), path: "/Sic_Bo/home" },
    { label: t("nav.aboutUs"), path: "/Sic_Bo/about" },
    { label: t("nav.project"), path: "/Sic_Bo/project" },
    { label: t("nav.timeline"), path: "/Sic_Bo/timeline" },
  ]

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] min-h-screen relative flex flex-col">
        {/* Navigation Bar */}
        <header className="w-full h-auto relative">
          <div className="flex w-full flex-row h-auto md:h-[72px] items-center justify-between px-4 md:px-6 py-4 md:py-2.5 bg-basewhite shadow-shadow-nav-shadown">
            <div className="flex items-center">
              <Link to="/">
                <h1 className="font-['Rubik_Bubbles',Helvetica] font-normal text-black text-2xl md:text-3xl">PMIT</h1>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-500 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex flex-row items-center gap-10">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link to={item.path}>
                      <NavigationMenuLink
                        className={`font-['Inter',Helvetica] font-bold text-base leading-[25px] ${
                          location.pathname === item.path ? "text-purple-500" : "text-graygray-700"
                        }`}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Actions */}
            <div className="hidden md:flex gap-4 items-center">
              <LanguageSwitcher />
              <Link to="/contact">
                <Button className="px-[25px] py-3.5 rounded-[5px] w-full md:w-auto [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)]">
                  <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-graygray-50 text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)]">
                    {t("nav.contactUs")}
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute w-full bg-white z-50 shadow-lg transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-4 py-5 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`font-['Inter',Helvetica] font-bold text-base py-2 ${
                      location.pathname === item.path ? "text-purple-500" : "text-graygray-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <LanguageSwitcher />
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full px-[25px] py-3.5 rounded-[5px] [background:linear-gradient(225deg,rgba(102,117,247,1)_0%,rgba(87,0,123,1)_100%)]">
                    <span className="font-button-text-btn-lg font-[number:var(--button-text-btn-lg-font-weight)] text-graygray-50 text-[length:var(--button-text-btn-lg-font-size)] tracking-[var(--button-text-btn-lg-letter-spacing)] leading-[var(--button-text-btn-lg-line-height)] whitespace-nowrap [font-style:var(--button-text-btn-lg-font-style)]">
                      {t("nav.contactUs")}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 md:px-[148px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="font-['Rubik_Bubbles',Helvetica] text-2xl">PMIT</h3>
              <p className="text-gray-400 text-sm">{t("footer.companyDesc")}</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t("footer.services")}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.webDev")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.mobileDev")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.cloudSolutions")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t("footer.devOps")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">{t("footer.contactUs")}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t("footer.email")}</li>
                <li>{t("footer.phone")}</li>
                <li>{t("footer.address")}</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400 text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

