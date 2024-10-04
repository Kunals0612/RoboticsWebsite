'use client'
import React,{useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Team",
    "Robocon",
    "Achievements",
    "Gallary",
    "Contact Us"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <a href="/"><p className="font-bold text-inherit text-blue-500">PICT ROBOTICS</p></a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/Team">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color = "primary" href="/Robocon">
            Robocon
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Achievements">
            Achievements
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Gallary">
            Gallary
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/Contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
