import { FiCpu, FiFacebook, FiGithub, FiGitlab, FiInstagram, FiLinkedin, FiMail, FiThumbsUp, FiTwitter, FiYoutube } from 'react-icons/fi'
import {LiaHtml5, LiaLaptopCodeSolid, LiaMedalSolid, LiaUserCogSolid} from 'react-icons/lia'
import { BsEmojiSmile } from "react-icons/bs";

import { LuNetwork } from "react-icons/lu";

import { MdOutlineSettingsInputAntenna } from "react-icons/md";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { TbCube } from "react-icons/tb";

import partner1 from './assets/images/client/amazon.svg'
import partner2 from './assets/images/client/google.svg'
import partner3 from './assets/images/client/lenovo.svg'
import partner4 from './assets/images/client/paypal.svg'
import partner5 from './assets/images/client/shopify.svg'
import partner6 from './assets/images/client/spotify.svg'

import course1 from './assets/images/course/1.jpg'
import course2 from './assets/images/course/2.jpg'
import course3 from './assets/images/course/3.jpg'
import course4 from './assets/images/course/4.jpg'
import course5 from './assets/images/course/5.jpg'
import course6 from './assets/images/course/6.jpg'
import course7 from './assets/images/course/7.jpg'
import course8 from './assets/images/course/8.jpg'
import course9 from './assets/images/course/9.jpg'


import team1 from './assets/images/team/1.jpg'
import team2 from './assets/images/team/2.jpg'
import team3 from './assets/images/team/3.jpg'
import team4 from './assets/images/team/4.jpg'
import team5 from './assets/images/team/5.jpg'
import team6 from './assets/images/team/6.jpg'
import team7 from './assets/images/team/7.jpg'
import team8 from './assets/images/team/8.jpg'

import video1 from './assets/images/course/video/1.mp4'
import video2 from './assets/images/course/video/2.mp4'
import video3 from './assets/images/course/video/3.mp4'
import video4 from './assets/images/course/video/4.mp4'
import video5 from './assets/images/course/video/5.mp4'
import video6 from './assets/images/course/video/6.mp4'
import video7 from './assets/images/course/video/7.mp4'
import video8 from './assets/images/course/video/8.mp4'
import video9 from './assets/images/course/video/9.mp4'



export const partnerData = [
    partner1,partner2,partner3,partner4,partner5,partner6
]

export const featureData = [
    {
        icon:FiThumbsUp,
        title:'elaxing & Learning',
        desc:`The phrasal sequence of the is now so that many campaign and benefit`
    },
    {
        icon:LiaMedalSolid,
        title:'Certificate',
        desc:`The phrasal sequence of the is now so that many campaign and benefit`
    },
    {
        icon:LiaLaptopCodeSolid,
        title:'Private Mentoring',
        desc:`The phrasal sequence of the is now so that many campaign and benefit`
    },
    {
        icon:BsEmojiSmile,
        title:'Creative Thinking',
        desc:`The phrasal sequence of the is now so that many campaign and benefit`
    },
]

export const coursesData = [
    // {
    //     id:1,
    //     image:course1,
    //     tag1:'Free',
    //     tag2:'Event',
    //     amount:0,
    //     lessons:10,
    //     students:49,
    //     title:'Preparación para el estudio',
    //     desc:'The phrasal sequence of the is now so many campaign',
    //     user:team1,
    //     name:'Calvin Carlo'
    // },
    {
        id:1,
        image:course1,
        tag1:'Desarrollo Web',
        tag2:'Curso',
        amount:65,
        lessons:4,
        students:49,
        quizzes: 5,
        knowledge: 'Principiante',
        title:'Fundamentos de Programación (Intensivo)',
        desc:'Domina las bases de la programación en 1 mes con clases personalizadas y prácticas. Este curso es intensivo de 1 mes',
        user:team1,
        name:'Fabian Gonzalez',
        descripcion: '<b>asdasd</b>sadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsad<br/>asasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasas<br/>dasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadas',
        linkinscribe: 'https://api.whatsapp.com/send/?phone=5492374032946'
    },
    {
        id:2,
        image:course2,
        tag1:'Desarrollo Web',
        tag2:'Curso',
        amount:65,
        lessons:4,
        students:34,
        quizzes: 5,
        knowledge: 'Principiante',
        title:'Fundamentos de Programación',
        desc:'Domina las bases de la programación en 4 meses con clases personalizadas y prácticas. Este curso dura 4 meses',
        user:team1,
        name:'Fabian Gonzalez',
        descripcion: '<b>asdasd</b>sadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsad<br/>asasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasas<br/>dasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadasasdasdsadas',
       
       linkinscribe: 'https://api.whatsapp.com/send/?phone=5492374032946'
    }
]

export const teamData = [
    {
        image:team1,
        name:'Fabian Gonzalez',
        position:'Ingeniero de Software',
        social:[FiFacebook, FiInstagram, FiLinkedin]
    }
]

export const blogData = [
    {
        id:1,
        image:course1,
        tag:'Degree',
        date:'13th Sep 25',
        title:'The Future of Remote Work: Trending Now'
    },
    {
        id:2,
        image:course2,
        tag:'University',
        date:'29th Nov 25',
        title:'The Psychology of Learning: How Cognitive'
    },
    {
        id:3,
        image:course3,
        tag:'Developer',
        date:'29th Dec 25',
        title:'Crafting Compelling Presentations: Design'
    },
    {
        id:4,
        image:course4,
        tag:'HTML5',
        date:'13th March 25',
        title:'Demystifying Data Science: A Beginner'
    },
    {
        id:5,
        image:course5,
        tag:'Institution',
        date:'5th May 25',
        title:'The Art of Effective Online Collaboration'
    },
    {
        id:6,
        image:course6,
        tag:'Graduation',
        date:'19th June 25',
        title:'Student Success Stories: From Learning'
    },
    {
        id:7,
        image:course7,
        tag:'Certification',
        date:'20th June 25',
        title:'Instructor Spotlight: Meet the Faces Behind'
    },
    {
        id:8,
        image:course8,
        tag:'Frontend',
        date:'31st Aug 25',
        title:'Navigating the Job Market: Career Tips'
    },
    {
        id:9,
        image:course9,
        tag:'Mobile',
        date:'1st Sep 25',
        title:'Building a Growth Mindset: Strategies'
    },
]

export const footerSocial = [

    {
        link:'https://www.facebook.com/poligontek',
        icon:FiFacebook
    },
    {
        link:'https://www.instagram.com/poligontek',
        icon:FiInstagram
    },
    {
        link:'mailto:contacto@poligontek.com',
        icon:FiMail
    }
]

export const footerLink1 = [
    'Course','Mission & Vision','Join a Career','Zoom Meeting','Pricing Plan'
]
export const footerLink2 = [
    'Contact Us','Technology','Instructors','Pricing','Services'
]

export const categories = [
    {
        icon:LiaLaptopCodeSolid,
        title:'Art & Design'
    },
    {
        icon:MdOutlineSettingsInputAntenna,
        title:'Web Development'
    },
    {
        icon:LuNetwork,
        title:'Digital Marketing'
    },
    {
        icon:LiaHtml5,
        title:'HTML CSS'
    },
    {
        icon:TbCube,
        title:'Leadership'
    },
    {
        icon:FiCpu,
        title:'Data Science'
    },
    {
        icon:IoMdCheckmarkCircleOutline,
        title:'ChatGPT'
    },
    {
        icon:LiaUserCogSolid,
        title:'Deep Learning'
    },
]

export const counterData = [
    {
     value:1548,
     symbol:'+',
     title:'Courses'   
    },
    {
     value:12,
     symbol:'+',
     title:'Countries'   
    },
    {
     value:500,
     symbol:'K',
     title:'Students'   
    },
    {
     value:80,
     symbol:'+',
     title:'Instructors'   
    },
]

export const clientData = [
    {
        image: team1,
        name: 'Bruno Sentinelli',
        position: 'Estudiante',
        desc: `"Desde la primera clase noté el enfoque práctico y orientado a resultados. La mejor inversión en mi educación."`,
        rate: ['mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star']
    },
    {
        image: team2,
        name: 'Lucas Esteves',
        position: 'Estudiante',
        desc: `"El contenido es claro y preciso, cada tema tiene su aplicación práctica, lo que hace que realmente aprendas."`,
        rate: ['mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star']
    },
    {
        image: team3,
        name: 'Malena Dimitri',
        position: 'Estudiante',
        desc: `"Nunca había aprendido de forma tan dinámica. Los proyectos y ejercicios ayudan a reforzar cada concepto."`,
        rate: ['mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star']
    },
    {
        image: team4,
        name: 'Mateo Disciascio',
        position: 'Estudiante',
        desc: `"La metodología es perfecta para quienes quieren aprender desde cero sin sentirse abrumados."`,
        rate: ['mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star']
    },
    {
        image: team8,
        name: 'Matias Morel',
        position: 'Estudiante',
        desc: `"Nunca pensé que podía aprender a programar tan rápido. Todo está organizado de forma clara y cada módulo suma para avanzar con confianza."`,
        rate: ['mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star','mdi mdi-star']
    }
   
];


export const faqData = [
    {
        id:1,
        title:'How does it work ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:2,
        title:'Do I need a designer to use PoligonTek ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:3,
        title:'What do I need to do to start selling ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
    {
        id:4,
        title:'What happens when I receive an order ?',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
    },
]

export const youtubeList = [
    {
        id:1,
        video:'https://www.youtube.com/embed/yba7hPeTSjk?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:0,
        lessons:10,
        students:49,
        title:'The Ultimate Course Bundle',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team1,
        name:'Calvin Carlo'
    },
    {
        id:2,
        video:'https://www.youtube.com/embed/cWIxnvW4YJs?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:19,
        lessons:10,
        students:49,
        title:'Fundamentos de Programación (Intensivo)',
        desc:`Domina las bases de la programación en 1 mes con clases personalizadas y prácticas.`,
        user:team2,
        name:'Calvin Carlo'
    },
    {
        id:3,
        video:'https://www.youtube.com/embed/S_CGed6E610?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Spoken English Popular Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team3,
        name:'Calvin Carlo'
    },
    {
        id:4,
        video:'https://www.youtube.com/embed/SGrnFOdEiTM?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:15,
        lessons:10,
        students:49,
        title:'Back-end Development Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team4,
        name:'Calvin Carlo'
    },
    {
        id:5,
        video:'https://www.youtube.com/embed/xVVyXI7Opv4?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:24,
        lessons:10,
        students:49,
        title:'Front-end Development Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team5,
        name:'Calvin Carlo'
    },
    {
        id:6,
        video:'https://www.youtube.com/embed/sL8QHyzWtuI?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Full stack Project in Nextjs Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team6,
        name:'Calvin Carlo'
    },
    {
        id:7,
        video:'https://www.youtube.com/embed/qzR62JJCMBQ?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:15,
        lessons:10,
        students:49,
        title:'Why Is Education So Famous?',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team7,
        name:'Calvin Carlo'
    },
    {
        id:8,
        video:'https://www.youtube.com/embed/arj7oStGLkU?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:24,
        lessons:10,
        students:49,
        title:'Difficult Things About Education.',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team8,
        name:'Calvin Carlo'
    },
    {
        id:9,
        video:'https://www.youtube.com/embed/U6FvJ6jMGHU?feature=oembed',
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Online Courses from PoligonTek',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team1,
        name:'Calvin Carlo'
    },
]
export const videoList = [
    {
        id:1,
        video:video1,
        tag1:'Free',
        tag2:'Event',
        amount:0,
        lessons:10,
        students:49,
        title:'The Ultimate Course Bundle',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team1,
        name:'Calvin Carlo'
    },
    {
        id:2,
        video:video2,
        tag1:'Free',
        tag2:'Event',
        amount:19,
        lessons:10,
        students:49,
        title:'Fundamentos de Programación (Intensivo)',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team2,
        name:'Calvin Carlo'
    },
    {
        id:3,
        video:video3,
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Spoken English Popular Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team3,
        name:'Calvin Carlo'
    },
    {
        id:4,
        video:video4,
        tag1:'Free',
        tag2:'Event',
        amount:15,
        lessons:10,
        students:49,
        title:'Back-end Development Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team4,
        name:'Calvin Carlo'
    },
    {
        id:5,
        video:video5,
        tag1:'Free',
        tag2:'Event',
        amount:24,
        lessons:10,
        students:49,
        title:'Front-end Development Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team5,
        name:'Calvin Carlo'
    },
    {
        id:6,
        video:video6,
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Full stack Project in Nextjs Course',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team6,
        name:'Calvin Carlo'
    },
    {
        id:7,
        video:video7,
        tag1:'Free',
        tag2:'Event',
        amount:15,
        lessons:10,
        students:49,
        title:'Why Is Education So Famous?',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team7,
        name:'Calvin Carlo'
    },
    {
        id:8,
        video:video8,
        tag1:'Free',
        tag2:'Event',
        amount:24,
        lessons:10,
        students:49,
        title:'Difficult Things About Education.',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team8,
        name:'Calvin Carlo'
    },
    {
        id:9,
        video:video9,
        tag1:'Free',
        tag2:'Event',
        amount:29,
        lessons:10,
        students:49,
        title:'Online Courses from PoligonTek',
        desc:`The phrasal sequence of the is now so many campaign`,
        user:team1,
        name:'Calvin Carlo'
    },
]

export const blogRecentPost = [
    {
        image:course6,
        title:'10 Things You About Real Estate',
        date:'19th June 25'
    },
    {
        image:course7,
        title:'Why We Love Real Estate',
        date:'20th June 25'
    },
    {
        image:course8,
        title:'110 Quick Tips About Real Estate',
        date:'13th March 25'
    },
]

export const blogSocial = [
    FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiGithub,FiYoutube,FiGitlab
]

export const termsData = [
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
    'Digital Marketing Solutions for Tomorrow',
    'Our Talented & Experienced Marketing Agency',
    'Create your own skin to match your brand',
]