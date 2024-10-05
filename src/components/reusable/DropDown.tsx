'use client'
import * as React from "react"

type DataType = {
    value:string;
    label:string;
}

type Props = {
    label:string;
    data:DataType[];
    onChange?: (value: string) => void;
    value:string;
}
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export const DropDown = ({label,data,value,onChange}:Props) => {
  const [open, setOpen] = React.useState(false)
  

  return (
    <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full h-[60px]" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-[1rem] text-[#484A4D]"
        >
          <span className="flex flex-col justify-start">
            <span className="text-xs text-left">
              {value && `${label}`}
            </span>
            <span>
              {value
                ? data.find((framework) => framework.value === value)?.label
                : `${label}`}
            </span>
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={"search here.."} />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {data.map((framework:DataType) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
