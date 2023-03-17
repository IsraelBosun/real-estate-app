import React, { useState, useEffect, useContext } from 'react'

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { Menu } from "@headlessui/react"

import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  
  const [ isOpen, setIsOpen ] = useState(false);

  const open = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    setCountry(country);
  }
  
  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "220000 - 250000",
    },
    {
      value: "250000 - 280000",
    }
  ]

  return (
    <Menu as = "div" className="dropdown relative">
      <Menu.Button onClick={open} className= "dropdown-btn w-full text-left">
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
        </div>  
          {
            isOpen ? (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowUpSLine className='dropdown-icon-secondary'/>
            )
          }
      </Menu.Button>

      <Menu.Items className = "dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item 
            as = "li" 
            key = {index}
            onClick = {() => setPrice(price.value)} 
            className =" cursor-pointer hover:text-violet-700 transition">
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown

// onClick={() => setIsOpen(!isOpen)}
//  onClick = {() => setCountry(country)}