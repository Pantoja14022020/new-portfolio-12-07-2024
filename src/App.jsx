import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from '/assets/avatar.png'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { DiDjango } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { Chip } from "@material-tailwind/react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { PiFileSql } from "react-icons/pi";
import SVGAboutLight from '/assets/about-svg-light.svg'
import SVGAboutDark from '/assets/about-svg-dark.svg'
import { Switch} from "@material-tailwind/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { CiBrightnessUp } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoGlasses } from "react-icons/io5";
import { RiProjectorFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import './styles/header.css'
import './styles/navbar.css'
import './styles/section.css'
import './styles/project.css'
import './styles/responsive.css'
import { useEffect, useRef, useState } from 'react';
import Section from './components/Section';
import Timelining from './components/Timelining'
import Project from './components/Project';
import ApplierAnimation from './components/ApplierAnimations';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {

  //Section Header or Home, applying animation
  const imageHeader = useRef(null);
  const contentMeHeader = useRef(null);
  const [imageHeaderIsVisible, setImageHeaderIsVisible] = useState(true)
  const [contentMeHeaderIsVisible, setContentMeHeaderIsVisible] = useState(true)

  //Section About me, applying animation
  const titleAbout = useRef(null)
  const imageAbout = useRef(null)
  const textAbout = useRef(null)
  const [titleAboutIsVisible, setTitleAboutIsVisible] = useState(false)
  const [imageAboutIsVisible, setImageAboutIsVisible] = useState(false)
  const [textAboutIsVisible, setTextAboutIsVisible] = useState(false)


  //Section skills, applying animation
  const titleSkills = useRef(null)
  const titleSoftSkills = useRef(null)
  const titleHardSkills = useRef(null)
  const tl1 = useRef(null)
  const tl2 = useRef(null)
  const tl3 = useRef(null)
  const tl4 = useRef(null)
  const tl5 = useRef(null)
  const [titleSoftSkillsIsVisible, setTitleSoftSkillsIsVisible] = useState(false)
  const [titleHardSkillsIsVisible, setTitleHardSkillsIsVisible] = useState(false)
  const [titleSkillsIsVisible, setTitleSkillsIsVisible] = useState(false)
  const [tl1IsVisible, setTl1IsVisible] = useState(false)
  const [tl2IsVisible, setTl2IsVisible] = useState(false)
  const [tl3IsVisible, setTl3IsVisible] = useState(false)
  const [tl4IsVisible, setTl4IsVisible] = useState(false)
  const [tl5IsVisible, setTl5IsVisible] = useState(false)


  //Section projects, applying animation
  const titleProjects = useRef(null)
  const [titleProjectsIsVisible, setTitleProjectsIsVisible] = useState(false)


  //Section contactme
  const titleContact = useRef(null)
  const [titleContactIsVisible, setTitleContactIsVisible] = useState(false)


  const [themeIsDark, setThemeIsDark] = useState(true) 
  const [widthBar, setWidthBar] = useState('20%')

  const options = [
    {
      id:1,
      txt:'Home',
      href:'#home',
      name:'home',
      icon: <FaHome/>
    },
    {
      id:2,
      txt: 'About me',
      href: '#about',
      name:'about',
      icon: <FaUser/>
    },
    {
      id:3,
      txt: 'Skills',
      href: '#skill',
      name:'skills',
      icon: <IoGlasses/>
    },
    {
      id:4, 
      txt:'Projects',
      href:'#projects',
      name:'projects',
      icon: <RiProjectorFill/>
    },
    {
      id:5,
      txt:'Contact me',
      href:'#contact',
      name:'contact',
      icon: <FaPhone/>
    }
  ]


  const frontend = [
    {
      id: 1,
      txt: 'React Js',
      icon: <FaReact/>,
      des: 'Front-End'
    },
    {
      id: 2,
      txt: 'Material Tailwind',
      icon: <RiTailwindCssFill/>,
      des: 'Front-End'
    }
  ]

  const backend = [
    {
      id: 1,
      txt: 'Node Js',
      icon: <FaNodeJs/>,
      des: 'Back-End'
    },
    {
      id: 2,
      txt: 'ASP .Net',
      icon: <SiCsharp/>,
      des: 'Back-End'
    },
    {
      id:3,
      txt:'API Rest',
      icon: <LuFileJson2 />,
      des: 'Back-End'
    },
  ]


  const database = [
    {
      id:1,
      txt:'Mongo DB',
      icon: <DiMongodb />,
      des: 'Database'
    },
    {
      id:2,
      txt:'SQL',
      icon:<PiFileSql/>,
      des:'Database'
    }
  ]

  const version = [
    {
      id:1,
      txt:'Git',
      icon: <FaGitAlt/>,
      des: 'Version Control'
    }
  ]

  const qualities = [
    {
      id: 1,
      txt: 'Teamwork',
      icon: <RiTeamFill/>
    },
    {
      id: 2,
      txt: 'Proactive',
      icon: <MdOutlineSportsMartialArts/>
    },
    {
      id: 3,
      txt: 'Analytical capacity',
      icon: <IoAnalyticsOutline/>
    }
  ]


  const projects = [
    {
      id: 1,
      imgsProject: ['/assets/crm-tlu-1.png','/assets/crm-tlu-2.png','/assets/crm-tlu-3.png','/assets/crm-tlu-4.png','/assets/crm-tlu-5.png','/assets/crm-tlu-6.png','/assets/crm-tlu-7.png','/assets/crm-tlu-8.png','/assets/crm-tlu-9.png','/assets/crm-tlu-10.png'],
      title: 'CRM TLU',
      typeJob:'Internship',
      subtitle: 'Grace Williams CPA PC',
      country: 'Norcross, GA, USA',
      techs: ['Back-End: ASP .Net - Node JS - SQL Server - C#','Front-End: React Js - HTML5 - CSS3'],
      techsIcons: [<SiCsharp size='1rem'/>,<PiFileSql size='1rem'/>,<FaReact size='1rem'/>,<FaNodeJs size='1rem'/>],
      about: 'Platform required by Trabajo Legal USA Department to management Latin American candidates who aspire to a job position in the United States',
      funcionalities: [
        'It uses SpreadSheets API to get data of a Sheet, wich contains information about candidates registered through Google Forms',
        'System updates itself automatically when a candidate is registered, for this feature, we use node js and web socket io for detection in time-real',
        'Show a overview with relevant information in database',
        'Track candidates in stages: Precandidate, Candidates, EB3 Visa, H2B Visa, TN Visa and J1 Visa',
        'Show tables with candidates data depend on stage',
        'Allow filter and search candidates in each stage either by Enlgish Level, Studies Level, Employment Modality or Duration Job',
        'Its possible to add and edit new candidates from CRM',
        'You can send or back candidates to others stages',
        'Automated emails',
        'When a candidate is registered in database, a email is sended to his email',
        'You can send applications formats file like PDF to candidates by email',
        'You can send candidate\'s data to a Sheet en SpreadSheets'
      ],
      ref: '/assets/cr-gw.pdf',//Es el archivo de la carta de recomendacion
      evidenceType: 'carrousel',
      link:''
    },
    {
      id: 2,
      imgsProject: ['/assets/crm-gm-1.png','/assets/crm-gm-2.png','/assets/crm-gm-3.png','/assets/crm-gm-4.png','/assets/crm-gm-5.png','/assets/crm-gm-6.png','/assets/crm-gm-7.png','/assets/crm-gm-8.png','/assets/crm-gm-9.png','/assets/crm-gm-10.png','/assets/crm-gm-11.png'],
      typeJob: 'Intership',
      title: 'CRM GM',
      subtitle: `Grace Williams CPA`,
      country: 'Norcross, GA, USA',
      techs: ['Back-End: ASP .Net - SQL Server - C#','Front-End: React Js - HTML5 - CSS3'],
      techsIcons: [<SiCsharp size='1rem'/>,<PiFileSql size='1rem'/>,<FaReact size='1rem'/>],
      about: 'System required by GM International Consultants LLC Departament to track clients who require some accounting service with Grace Williams CPA PC',
      funcionalities: [
        'Stores and manages the customer\'s relationship from different stages: prospect, qualification, engagement, negotiation, closing, postsale',
        'Overview section: see an overview about what stage the client is',
        'Board section: see visually the stages which client is. Drag a drop client in some stage',
        'Create, save or edit client in CRM. Check one or more clients to move or back in the subsections',
        'Generate meetings with Zoom to know client',
        'Send links meetings to yours clients',
        'When a client is closing a deal, you can save it in Mailchimp'
      ],
      ref: '/assets/cr-gw.pdf',//Es el archivo de la carta de recomendacion
      evidenceType: 'carrousel',
      link:''
    },
    {
      id: 3,
      imgsProject: [],
      typeJob: 'Research Work',
      title: 'Predicting Chronic Diseases In Highly Polluted Industrial Environments Using Machine Learning',
      subtitle: `UAEH Autonomous University Of Hidalgo State`,
      country: 'Tlahuelilpan, Hgo, Mx',
      techs: ['Front-End: HTML5 - CSS3 - Web Responsive - JS', 'Back-End: Django - API Rest - JSON'],
      techsIcons: [<FaHtml5 size='1rem'/>,<FaCss3Alt size='1rem'/>,<IoLogoJavascript size='1rem'/>,<DiDjango size='1rem' />],
      about: 'I write an article about predicting chronic diseases in habitants located in Metropolitan Area of Tula Hgo applying neural networks as an artificial intelligence technique. Finally, it was developed a web platform with models trained implemented in this system (availabel for desktop devices).',
      funcionalities: [
        'Use real data from Metropolitan Area of Tula Hgo habitants. Got trought surveys',
        'It can predict: Hypertension, Respiratory Disease and Diabetes',
        'It uses 3 models: a statistical model Random Forest and two intelligent models RNA',
        'With RNA we can predict respiratory disease, getting 99% precision',
        'With Random Forest we can predict hypertension, getting 97% precision',
        'With Random Forest we can predict diabetes, getting 100% precision'
      ],
      ref: '',//Es el archivo de la carta de recomendacion
      evidenceType: 'link',
      link:'https://www.dyna-management.com/Articulos/Ficha.aspx?IdMenu=5ac67497-8243-47dd-ab2d-ef984916fffd&Cod=11066&Codigo=64e20941-7224-4d22-aae7-232069ee'
    },
    {
      id: 4,
      imgsProject: [],
      typeJob: 'Scholar Work',
      title: 'Agency Travels',
      subtitle: `UAEH Autonomous University Of Hidalgo State`,
      country: 'Tlahuelilpan, Hgo, Mx',
      techs: ['Front-End: HTML5 - CSS3 - Web Responsive - JS'],
      techsIcons: [<FaHtml5 size='1rem'/>,<FaCss3Alt size='1rem'/>,<IoLogoJavascript size='1rem'/>],
      about: 'A little project for web development class',
      funcionalities: [
        'Show information about countries to travel',
        'Its a page static',
        'Available for desktop and movil devices'
      ],
      ref: '',//Es el archivo de la carta de recomendacion
      evidenceType: 'link',
      link:'https://soft-sundae-c109d6.netlify.app/'
    }
  ]

  const handleScroll = (component,setComponentIsVisible) => {
    if(component.current){
      const rect = component.current.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      setComponentIsVisible(topShown && bottomShown)
    }
  }


  useEffect(()=>{
    window.addEventListener('scroll', () => {
      handleScroll(titleContact, setTitleContactIsVisible)
      handleScroll(titleProjects,setTitleProjectsIsVisible)
      handleScroll(tl5,setTl5IsVisible)
      handleScroll(tl4,setTl4IsVisible)
      handleScroll(tl3,setTl3IsVisible)
      handleScroll(tl2,setTl2IsVisible)
      handleScroll(tl1,setTl1IsVisible)
      handleScroll(titleHardSkills,setTitleHardSkillsIsVisible)
      handleScroll(titleSoftSkills,setTitleSoftSkillsIsVisible)
      handleScroll(titleSkills,setTitleSkillsIsVisible)
      handleScroll(titleAbout,setTitleAboutIsVisible)
      handleScroll(imageAbout,setImageAboutIsVisible)
      handleScroll(textAbout,setTextAboutIsVisible)
      handleScroll(imageHeader,setImageHeaderIsVisible)
      handleScroll(contentMeHeader,setContentMeHeaderIsVisible)
    })
    return () => { 
      window.removeEventListener('scroll',() => {
        handleScroll(titleContact, setTitleContactIsVisible)
        handleScroll(titleProjects,setTitleProjectsIsVisible)
        handleScroll(tl5,setTl5IsVisible)
        handleScroll(tl4,setTl4IsVisible)
        handleScroll(tl3,setTl3IsVisible)
        handleScroll(tl2,setTl2IsVisible)
        handleScroll(tl1,setTl1IsVisible)
        handleScroll(titleHardSkills,setTitleHardSkillsIsVisible)
        handleScroll(titleSoftSkills,setTitleSoftSkillsIsVisible)
        handleScroll(titleSkills,setTitleSkillsIsVisible)
        handleScroll(titleAbout,setTitleAboutIsVisible)
        handleScroll(imageAbout,setImageAboutIsVisible)
        handleScroll(textAbout,setTextAboutIsVisible)
        handleScroll(imageHeader,setImageHeaderIsVisible)
        handleScroll(contentMeHeader,setContentMeHeaderIsVisible)
      }) 
    }
  },[])


  useEffect(()=>{//Monitorear cada que sea visible cierta seccion, entonces aumentar el tamaño de la barra
    if(imageHeaderIsVisible) {setWidthBar('20%')}
    if(titleAboutIsVisible) {setWidthBar('40%')}
    if(titleSkillsIsVisible) {setWidthBar('60%')}
    if(titleProjectsIsVisible) {setWidthBar('80%')}
    if(titleContactIsVisible) {setWidthBar('100%')}
  },[imageHeaderIsVisible,titleAboutIsVisible,titleSkillsIsVisible,titleProjectsIsVisible,titleContactIsVisible])


  const links = [
    {
      title: "My",
      items: ["Home", "About", "Skill", "Projects","Contact"],
    },
    {
      title: "Web",
      items: ["Home", "About", "Skill", "Projects","Contact"],
    },
    {
      title: "Portfolio",
      items: ["Home", "About", "Skill", "Projects","Contact"],
    }
  ];

  return (
    <>
      <Header id="home" backgroundColor={`${themeIsDark ? 'var(--background-color-black)' : ''}`}>
        <div className="bar-slider" style={{height:'2.5px',width:`${widthBar}`,backgroundColor:'var(--background-color-blue)',position:'fixed',top:'0',left:'0',transition:'all ease-in 0.3s',zIndex:'4'}} ></div>
        <Navbar options={options} optionSelected='home' themeIsDark={themeIsDark}>
          <div className="animate__animated animate__bounceInLeft flex-direction-row align-items-center" style={{backgroundColor:`${themeIsDark ? 'var(--background-color-ultrablack)' : 'var(--background-color-semiwhite)'}`, padding:'1.3rem', borderRadius:'1rem'}}>
            <a href="https://github.com/Pantoja14022020/" target='_blank' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}><BsGithub className='txt-size-medium' /></a>
            <a href="https://www.linkedin.com/in/daniel-tlanepantla-pantoja-b709aa1b1/" target='_blank' className='margin-left-large' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-secondary-light)'}`}}><FaLinkedin className='txt-size-medium' /></a>
          </div>
          <div className="switch-theme-container flex-direction-row align-items-center" style={{backgroundColor:`${themeIsDark ? 'var(--background-color-ultrablack)' : 'var(--background-color-semiwhite)'}`, padding:'1.3rem', borderRadius:'1rem'}}>
            <Switch color='blue' onChange={e => setThemeIsDark(!themeIsDark)}/>
            <CiBrightnessUp className='margin-left-medium' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}/>
          </div>
        </Navbar>
        <img ref={imageHeader} src={ Profile } alt="profile" className={`animate__animated ${imageHeaderIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} width-0`}/>
        <div ref={contentMeHeader} className={`flex-direction-column align-items-center animate__animated ${contentMeHeaderIsVisible ? 'animate__bounceInLeft' : 'animate__bounceOutRight'}`}>
          <p className='txt-size-small margin-top-medium' style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>Hello! 👋 I am</p>
          <h1 className='txt-size-large font-weight-large' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}>Daniel Tlanepantla-Pantoja</h1>
          <h4 style={{color:'var(--color-txt-secondary-light)'}} className='font-weight-small animate__animated animate__bounceInRight txt-size-medium'>💻 Software Engineer UAEH  |  <span style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>Full Stack Web</span> </h4>
          <p className='txt-size-small margin-top-medium' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}> 🇲🇽 🌮🤠 </p>
          <a className='margin-top-medium flex-direction-row align-items-center justify-content-center' href='/assets/CV.pdf' download style={{backgroundColor:`${themeIsDark ? 'var(--background-color-semiblack)' : 'var(--background-color-semiwhite)'}`,width:'40px',height:'40px',borderRadius:'50%',color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}><BiSolidDownload className='txt-size-medium' /></a>
        </div>
      </Header>


      <Section id='about' backgroundColor={`${themeIsDark ? '' : 'var(--background-color-semiwhite)'}`}>
        <>
          <h1 ref={titleAbout} className={`font-weight-large animate__animated ${titleAboutIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} txt-size-large`} style={{color:'var(--color-txt-primary-light)', textAlign:'left'}}>About Me</h1> 
        </>
        <aside className='flex-direction-row align-items-center justify-content-space-between margin-top-large'>
          <figure ref={imageAbout} className={`hide-img animate__animated ${imageAboutIsVisible ? 'animate__bounceInLeft' : 'animate__bounceOutRight'}`}>
            <img src={ themeIsDark ? SVGAboutLight : SVGAboutDark} alt="svg-1" className='width-2'/>
          </figure>
          <div ref={textAbout} className={`justify-txt-about animate__animated ${textAboutIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} width-2`} style={{textAlign:'right'}}>
            <p className='txt-size-large font-weight-medium' style={{color:'var(--color-txt-primary-light)'}}>"I'm a <span style={{color:'var(--color-txt-secondary-light)'}}>Software Engineer</span> appasionate about systems development web and lover of 😍"</p>
            <div className={`flex-direction-row align-items-center justify-content-flex-end margin-top-small`} style={{fontStyle:'italic'}}>
              <Chip className='txt-size-small padding-small-chip' value="Nature 🌿" style={{marginRight:'0.5rem'}}/>
              <Chip className='txt-size-small padding-small-chip' value="Photography 📷" style={{marginRight:'0.5rem'}} variant='gradient'/>
              <Chip className='txt-size-small padding-small-chip'value="Soccer ⚽️" style={{marginRight:'0.5rem'}} variant='outlined'/>
              <Chip className='txt-size-small padding-small-chip' value="Cycling 🚴🏼"  variant='ghost'/>
            </div>
          </div>
        </aside>
      </Section>


      <Section id='skill' backgroundColor={`${themeIsDark ? 'var(--background-color-black)' : ''}`}>
        <>
          <h1 ref={titleSkills} className={`font-weight-large txt-size-large animate__animated ${titleSkillsIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'}`} style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`, textAlign:'right'}}>Skills</h1> 
        </>
        <aside className='direction-column-items-skill flex-direction-row align-items-center justify-content-center margin-top-large'>
          <div className='width-2 flex-direction-column align-items-center'>
            <h1 ref={titleHardSkills} className={`font-weight-large txt-size-large animate__animated ${titleHardSkillsIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'}`} style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>Hard Skills</h1>
            <div style={{width:'fit-content'}} className='direction-row-timelines wrap-timelines'>
              <Timelining me={tl1} items={frontend} colorRounded="var(--background-color-blue)" isVisible={tl1IsVisible} enter={'animate__fadeIn'} out={'animate__fadeOut'}/>
              <Timelining me={tl2} items={backend} isVisible={tl2IsVisible} enter={'animate__fadeIn'} out={'animate__fadeOut'}/>
              <Timelining me={tl3} items={database} colorRounded="var(--background-color-blue)" isVisible={tl3IsVisible} enter={'animate__fadeIn'} out={'animate__fadeOut'}/>
              <Timelining me={tl4} items={version} isVisible={tl4IsVisible} enter={'animate__fadeIn'} out={'animate__fadeOut'}/>
            </div>
          </div>
          <div className='width-2 flex-direction-column align-items-center'>
            <h1 ref={titleSoftSkills} className={`font-weight-large txt-size-large margin-top-extra-large animate__animated ${titleSoftSkillsIsVisible ? 'animate__bounceInLeft' : 'animate__bounceOutRight'}`} style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}} >Soft Skills</h1>
            <div style={{width:'fit-content'}} className='direction-row-timelines wrap-timelines'>
              <Timelining me={tl5} items={qualities} colorRounded="var(--background-color-blue)" isVisible={tl5IsVisible} enter={'animate__fadeIn'} out={'animate__fadeOut'}/>
            </div>
          </div>
        </aside>
      </Section>


      <Section id='projects' backgroundColor={`${themeIsDark ? '' : 'var(--background-color-semiwhite)'}`}>
        <>
          <h1 ref={titleProjects} className={`font-weight-large animate__animated ${titleProjectsIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} txt-size-large`} style={{color:'var(--color-txt-primary-light)', textAlign:'left'}}>Projects</h1> 
        </>
        <div className="flex-direction-column margin-top-large">
          {
            projects.map((project,idx) => (
              <div key={idx} className='width-4' style={{alignSelf:`${(idx % 2 == 0) ? 'flex-start' : 'flex-end'}`}}>
                <Project key={idx} evidenceType={project.evidenceType} link={project.link} country={project.country} references={project.ref} about={project.about} imgs={project.imgsProject} typeJob={project.typeJob} title={project.title} subtitle={project.subtitle} techs={project.techs} techsIcons={project.techsIcons} funcionalities={project.funcionalities} variantsChips={['gradient','outlined','ghost','filled']}/>
              </div>
            ))
          }
        </div>
      </Section>


      <Section id='contact' backgroundColor={`${themeIsDark ? 'var(--background-color-semiwhite)' : ''}`}>
        <>
          <ApplierAnimation enterAnimation={'animate__bounceInRight'} outAnimation={'animate__bounceOutLeft'}>
            <h1 className={`font-weight-large txt-size-large`} style={{color:'var(--color-txt-primary-light)', textAlign:'right'}}>Contact</h1> 
          </ApplierAnimation>
        </>
        <aside ref={titleContact} className='flex-direction-row align-items-center margin-top-large'>
            <Form/>
        </aside>
      </Section>

      <Section backgroundColor={`${themeIsDark ? 'var(--background-color-black)' : ''}`}>
        <Footer links={links} themeIsDark={themeIsDark}/>
      </Section>

    </>
  )
}

export default App
