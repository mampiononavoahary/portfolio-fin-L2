"use client";
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss,SiNextdotjs} from 'react-icons/si'


const about = {
  title: "About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem iusto facere qui voluptate et excepturi sequi atque modi in ducimus numquam, odit nesciunt at inventore perspiciatis, laborum assumenda magni.",
  info:[
    {
      fieldName:"Name",
      fieldValue: "Zovoahary Mampionona"
    },
    {
      fieldName:"Phone",
      fieldValue: "(+261) 38 33 427 54"
    },
    {
      fieldName:"Experience",
      fieldValue: "3 Years"
    },
    {
      fieldName:"Linkedin",
      fieldValue: "Zovoahary Mampionona"
    },
    {
      fieldName:"Nationality",
      fieldValue: "Malagasy"
    },
    {
      fieldName:"Email",
      fieldValue: "hei.zoarisoa@gmail.com"
    },
    {
      fieldName:"Freelance",
      fieldValue: "Available"
    },
    {
      fieldName:"Language",
      fieldValue: "Malagasy, French, English"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem iusto facere qui voluptate et excepturi sequi atque modi in ducimus numquam, odit nesciunt at inventore perspiciatis, laborum assumenda magni.",
  items:[
    {
      company: 'Tech Mada gains car',
      position: 'Full stack Developer',
      duration: '2024 - Present'
    },
    {
      company: 'Web Design Studio',
      position: 'Front-End Developer Intern',
      duration: 'Summer 2021'
    },
    {
      company: 'E-commerce Startup',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021'
    },
    {
      company: 'Mi-Tech Informatics',
      position: 'Teaching Assistant',
      duration: '2019 - 2020'
    },
    {
      company: 'Digital Agency',
      position: 'UI/UX Designer',
      duration: '2018 - 2019'
    },
    {
      company: 'Get Gateway',
      position: 'Monitor',
      duration: '2017 - 2018'
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem iusto facere qui voluptate et excepturi sequi atque modi in ducimus numquam, odit nesciunt at inventore perspiciatis, laborum assumenda magni.",
  items:[
    {
      institution: 'HEI(Haute Ecole DInformatique)',
      position: 'Full stack Developer',
      duration: '2021 - 2025'
    },
    {
      institution: 'Codecademy',
      position: 'Front-End Track',
      duration: '2020'
    },
    {
      institution: 'Cyberini Online Course',
      position: 'Cybersécurité',
      duration: '2019'
    },
    {
      institution: 'Tech Institute',
      position: 'Full stack Developer',
      duration: '2021 - 2025'
    },
    {
      institution: 'Design School',
      position: 'Diplome in Graphic Design',
      duration: '2021 - 2025'
    },
    {
      institution: 'Community College',
      position: 'Associate Degree in Compuer Science',
      duration: '2021 - 2025'
    },
  ]
}

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem iusto facere qui voluptate et excepturi sequi atque modi in ducimus numquam, odit nesciunt at inventore perspiciatis, laborum assumenda magni.",
  skillList: [
    {
      icon: <FaHtml5/>,
      name:"Html 5"
    }
  ]
}
const Resume = () => {
  return (
    <div>
      resume page
    </div>
  )
}

export default Resume
