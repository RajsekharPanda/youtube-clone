import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
function ProfileDropdown() {
  return (
    <div className='pr-4'>

      <DropdownMenu>
        <DropdownMenuTrigger className='rounded-full bg-black text-white'>RP</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              window.location.href = 'https://myaccount.google.com/';
            }}
          >Google Account</DropdownMenuItem>
          <DropdownMenuItem className='flex flex-row justify-between'>
            <div>
              Switch Account
            </div>
            <div><IoIosArrowForward /></div>
          </DropdownMenuItem>
          <DropdownMenuItem className='flex flex-row justify-between'>
            <div>Sign Out</div>
            <div><FaArrowRightToBracket /></div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ProfileDropdown
