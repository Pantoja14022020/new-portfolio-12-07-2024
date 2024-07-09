import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from '/assets/avatar.png'
import SVGAboutLight from '/assets/about-svg-light.svg'
import SVGAboutDark from '/assets/about-svg-dark.svg'
import { Switch } from "@material-tailwind/react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidDownload } from "react-icons/bi";
import { CiBrightnessUp } from "react-icons/ci";
import './styles/header.css'
import './styles/navbar.css'
import './styles/section.css'
import { useEffect, useRef, useState } from 'react';
import Section from './components/Section';


function App() {

  const titleAbout = useRef(null)
  const imageAbout = useRef(null)
  const textAbout = useRef(null)
  const [titleAboutIsVisible, setTitleAboutIsVisible] = useState(false)
  const [imageAboutIsVisible, setImageAboutIsVisible] = useState(false)
  const [textAboutIsVisible, setTextAboutIsVisible] = useState(false)


  const [themeIsDark, setThemeIsDark] = useState(true) 

  const options = [
    {
      id:1,
      txt:'Home',
      href:'#home',
      name:'home'
    },
    {
      id:2,
      txt: 'About me',
      href: '#about',
      name:'about'
    },
    {
      id:3,
      txt: 'Skills',
      href: '#skills',
      name:'skills'
    },
    {
      id:4, 
      txt:'Projects',
      href:'#projects',
      name:'projects'
    },
    {
      id:5,
      txt:'Contact me',
      href:'#contact',
      name:'contact'
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
      handleScroll(titleAbout,setTitleAboutIsVisible)
      handleScroll(imageAbout,setImageAboutIsVisible)
      handleScroll(textAbout,setTextAboutIsVisible)
    })
    return () => { 
      window.removeEventListener('scroll',() => {
        handleScroll(titleAbout,setTitleAboutIsVisible)
        handleScroll(imageAbout,setImageAboutIsVisible)
        handleScroll(textAbout,setTextAboutIsVisible)
      }) 
    }
  },[])


  return (
    <>
      <Header id="home" backgroundColor={`${themeIsDark ? 'var(--background-color-black)' : ''}`} urlBackground={ `${themeIsDark ? "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1065%26quot%3b)' fill='none'%3e%3cpath d='M763.28 80.74 a144.62 144.62 0 1 0 289.24 0 a144.62 144.62 0 1 0 -289.24 0z' fill='rgba(39%2c 39%2c 39%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1173.24 393.92 a184.02 184.02 0 1 0 368.04 0 a184.02 184.02 0 1 0 -368.04 0z' fill='rgba(39%2c 39%2c 39%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M-76 425.74 a161.77 161.77 0 1 0 323.54 0 a161.77 161.77 0 1 0 -323.54 0z' fill='rgba(39%2c 39%2c 39%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1217.53 513.81 a167.58 167.58 0 1 0 335.16 0 a167.58 167.58 0 1 0 -335.16 0z' fill='rgba(39%2c 39%2c 39%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M867.54 401.23 a148.86 148.86 0 1 0 297.72 0 a148.86 148.86 0 1 0 -297.72 0z' fill='rgba(39%2c 39%2c 39%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1065'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e" : "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1121%26quot%3b)' fill='none'%3e%3cpath d='M726.31 367.74 a93.62 93.62 0 1 0 187.24 0 a93.62 93.62 0 1 0 -187.24 0z' fill='rgba(239%2c 236%2c 236%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1064.2 68.37 a172.06 172.06 0 1 0 344.12 0 a172.06 172.06 0 1 0 -344.12 0z' fill='rgba(239%2c 236%2c 236%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1042.34 446.48 a142.17 142.17 0 1 0 284.34 0 a142.17 142.17 0 1 0 -284.34 0z' fill='rgba(239%2c 236%2c 236%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M926.04 194.56 a120.39 120.39 0 1 0 240.78 0 a120.39 120.39 0 1 0 -240.78 0z' fill='rgba(239%2c 236%2c 236%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M54.87 194.5 a185.8 185.8 0 1 0 371.6 0 a185.8 185.8 0 1 0 -371.6 0z' fill='rgba(239%2c 236%2c 236%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1121'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 5s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"}`}>
        <Navbar options={options} optionSelected='home' themeIsDark={themeIsDark}>
          <div className="animate__animated animate__bounceInLeft flex-direction-row align-items-center">
            <a href="https://github.com/Pantoja14022020/" target='_blank' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}><BsGithub className='txt-size-medium' /></a>
            <a href="https://www.linkedin.com/in/daniel-tlanepantla-pantoja-b709aa1b1/" target='_blank' className='margin-left-large' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-secondary-light)'}`}}><FaLinkedin className='txt-size-medium' /></a>
          </div>
          <div className="switch-theme-container flex-direction-row align-items-center">
            <Switch color='blue' onChange={e => setThemeIsDark(!themeIsDark)}/>
            <CiBrightnessUp className='margin-left-medium' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}/>
          </div>
        </Navbar>
        <img src={ Profile } alt="profile" className='animate__animated animate__bounceInLeft width-0'/>
        <p className='animate__animated animate__bounceInRight txt-size-small margin-top-medium' style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>Hello! 👋 I am</p>
        <h1 className='animate__animated animate__bounceInLeft txt-size-large font-weight-large' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}>Daniel Tlanepantla-Pantoja</h1>
        <h4 style={{color:'var(--color-txt-secondary-light)'}} className='font-weight-small animate__animated animate__bounceInRight txt-size-medium'>💻 Software Engineer | <span style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>Full Stack Web Jr</span> </h4>
        <p className='animate__animated animate__bounceInLeft txt-size-small margin-top-medium' style={{color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}> Hidalgo, Mexico 📍 </p>
        <a className='animate__animated animate__bounceInRight margin-top-medium flex-direction-row align-items-center justify-content-center' href='/assets/CV.pdf' download style={{backgroundColor:`${themeIsDark ? 'var(--background-color-semiblack)' : 'var(--background-color-semiwhite)'}`,width:'40px',height:'40px',borderRadius:'50%',color:`${themeIsDark ? 'var(--color-txt-primary-dark)' : 'var(--color-txt-primary-light)'}`}}><BiSolidDownload /></a>
      </Header>


    <Section id='about'>
      <>
        <h1 ref={titleAbout} className={`font-weight-large animate__animated ${titleAboutIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} txt-size-large`} style={{color:'var(--color-txt-primary-light)', textAlign:'left'}}>About Me</h1> 
      </>
      <aside className='flex-direction-row align-items-center justify-content-center margin-top-large'>
        <figure ref={imageAbout} className={`animate__animated ${imageAboutIsVisible ? 'animate__bounceInLeft' : 'animate__bounceOutRight'}`}>
          <img src={ themeIsDark ? SVGAboutLight : SVGAboutDark} alt="svg-1" className='width-2'/>
        </figure>
        <div ref={textAbout} className={`animate__animated ${textAboutIsVisible ? 'animate__bounceInRight' : 'animate__bounceOutLeft'} width-2`} style={{textAlign:'right'}}>
          <p className='txt-size-large font-weight-medium' style={{color:'var(--color-txt-primary-light)'}}>"I'm a <span style={{color:'var(--color-txt-secondary-light)'}}>Software Engineer</span> appasionate about data science, web and movil development" 😍  </p>
        </div>
      </aside>
    </Section>
    </>
  )
}

export default App
