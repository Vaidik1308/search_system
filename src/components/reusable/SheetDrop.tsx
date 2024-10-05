"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ReactNode } from "react";



type Props = {
    side:"top"| "right"| "bottom"| "left";
    children:ReactNode;
    openButton:ReactNode | string;
    className?:string;
}

export const  SheetDrop = ({side,children,openButton,className}:Props) => {
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center w-full" asChild>
            { typeof openButton === 'string' ? (  // Fixed: Added quotes around 'string'
                <Button variant="outline">
                    {openButton}
                </Button>
            ) : (
                openButton  // Fixed: Removed curly braces around openButton
            ) }
        </SheetTrigger>
        <SheetContent className={`${className} border-none`} side={side}>
            {children}
        </SheetContent>
    </Sheet>
  )
}
