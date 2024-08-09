import React from 'react';
import {MapPin, Phone, Send} from "lucide-react";
import {Input} from "@/components/ui/input";

const Footer = (props) => {
    return(
        <div className="mt-auto w-[1440px] mx-auto flex flex-row gap-20 px-[100px] py-10">
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">Funiro.</p>
                <p className="text-sm text-slate-500 max-w-[250px]">Worldwide furniture store since 2020. We sell over
                    1000+ branded products on our website</p>
                <p className="text-sm text-slate-500 flex flex-row gap-2 items-center">
                    <MapPin className="w-4 h-4"/>
                    Sawojajar Malang, Indonesia
                </p>
                <p className="text-sm text-slate-500 flex flex-row gap-2 items-center">
                    <Phone className="w-4 h-4"/>
                    +6289 456 3455
                </p>
                <p className="text-sm text-slate-500">www.funiro.com</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">Menu</p>
                <p className="text-sm text-slate-500 cursor-pointer">Products</p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    Rooms
                </p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    Inspirations
                </p>
                <p className="text-sm text-slate-500 cursor-pointer">About us</p>
                <p className="text-sm text-slate-500 cursor-pointer">Terms & policy</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">Account</p>
                <p className="text-sm text-slate-500 cursor-pointer">My Account</p>
                <p className="text-sm text-slate-500 cursor-pointer">Checkout</p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    My Cart
                </p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    My catalog
                </p>
            </div>
            <div className="flex flex-col gap-4">
            <p className="font-bold text-2xl">Stay Connected</p>
                <p className="text-sm text-slate-500 cursor-pointer">Facebook</p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    Instagram
                </p>
                <p className="text-sm text-slate-500 cursor-pointer flex flex-row gap-2 items-center">
                    Twitter
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">Stay updated</p>
                <div className="flex flex-row gap-1">
                    <Input placeholder="Enter your email" className="bg-slate-100 rounded-[0px] border-0" />
                    <div className="bg-orange-400 flex items-center p-2 cursor-pointer">
                        <Send className="h-6 w-6 text-white" />
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Footer;