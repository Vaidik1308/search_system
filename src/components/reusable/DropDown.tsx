import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type DataType = {
    value:string;
}

type Props = {
    label:string;
    data:DataType[];
    onChange?: (value: string) => void;
    value:string;
}

// ... existing code ...
export const DropDown = ({label,data,onChange,value}: Props) => {
    
    return (
      <Select value={value} onValueChange={(value:string) => onChange?.(value)}> {/* Add this line */}
        <SelectTrigger className="w-full h-[60px]">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            {data.map((item, i) => (
                <SelectItem key={i} value={item.value}>{item.value}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    )
  }
  // ... existing code ...
