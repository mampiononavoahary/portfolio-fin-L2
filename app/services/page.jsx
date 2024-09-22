"use client"

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link'

const services = [ 
  {
    num:"01",
    title: "Web Developement",
    description: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis ut blanditiis",
    href: "",
  },
   {
    num:"02",
    title: "UI/UX Design",
    description: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis ut blanditiis",
    href: "",
  },
   {
    num:"03",
    title: "Logo Design",
    description: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis ut blanditiis",
    href: "",
  },
   {
    num:"04",
    title: "SEQ",
    description: 
     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Debitis ut blanditiis",
    href: "",
  },
]

import { motion } from 'framer-motion'

const Services = () => {
  return( <section>
     <div className="container mx-auto">services page</div>
  </section>
  );
}

export default Services
