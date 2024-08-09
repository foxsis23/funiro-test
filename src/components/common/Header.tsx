import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Heart, Search, ShoppingCart} from "lucide-react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

const Header = () => (
    <div className="fixed z-10 flex flex-row justify-between px-20 py-10 top-0 w-full items-center">
        <div className="flex flex-row gap-10 items-center">
            <p className="text-2xl font-bold">Funiro.</p>
            <div className="flex flex-row gap-5 items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="bg-transparent">Rooms</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Link href='/'>
                    <p className="text-sm">Inspirations</p>
                </Link>

                <div className="flex flex-row items-center gap-2">
                    <Search className="w-4 h-4 cursor-pointer" />
                    <Input placeholder="Search for minimalist chair"  className='border-0 w-[450px] rounded-[0%]' />
                </div>

            </div>
        </div>
        <div className="flex flex-row gap-8 items-center">
            <Heart className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            </Avatar>
        </div>
    </div>
);

export default Header;