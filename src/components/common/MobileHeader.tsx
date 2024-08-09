import React from 'react';
import Link from "next/link";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

const MobileHeader = (props) => {
    return(
        <div className="md:hidden fixed top-0 z-10 flex items-center flex-row gap-4 p-3">
            <p className="text-xl font-bold">Funiro</p>

            <div className="flex flex-row items-center gap-2">
                <Search className="w-4 h-4 cursor-pointer" />
                <Input placeholder="Search for minimalist chair"  className='border-0 w-[300px] rounded-[0%]' />
            </div>
        </div>
    )
};

export default MobileHeader;