import React, { useState, useEffect, useContext } from 'react'

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri"
import { Menu } from "@headlessui/react"

import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  console.log(properties)
  
  const [ isOpen, setIsOpen ] = useState(false);

  const open = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    setCountry(country);
  }
  

  return (
    <Menu as = "div" className="dropdown relative">
      <Menu.Button onClick={open} className= "dropdown-btn w-full text-left">
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your place</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Item 
            as = "li" 
            key = {index}
            onClick = {() => setProperty(property)} 
            className =" cursor-pointer hover:text-violet-700 transition">
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown

// onClick={() => setIsOpen(!isOpen)}
//  onClick = {() => setCountry(country)}