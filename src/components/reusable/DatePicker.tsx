"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
    label:string;
}

export const DatePicker = ({label}:Props) => {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger className="h-full w-full" asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start md:h-full h-[60px] items-center text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span className="flex flex-col justify-start">
            <span className="text-xs text-left">
              {date && `${label}`}
            </span>
            <span>
              {date ? <span className="text-[1rem] mt-0.5">{format(date, "PPP")}</span> : <span className="mt-0.5 text-[1rem]">{label}</span>}
            </span>
          </span>
          
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
