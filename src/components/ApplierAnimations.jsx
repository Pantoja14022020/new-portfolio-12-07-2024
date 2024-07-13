import { useEffect, useRef, useState } from "react";


function ApplierAnimation({children,enterAnimation,outAnimation}){
 
    const component = useRef(null)
    const [componentIsVisible, setComponentIsVisible] = useState(false)

    const handleScroll = (comp,setCompIsVisible) => {
        if(comp.current){
          const rect = comp.current.getBoundingClientRect();
          const topShown = rect.top >= 0;
          const bottomShown = rect.bottom <= window.innerHeight;
          setCompIsVisible(topShown && bottomShown)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', () => {
          handleScroll(component,setComponentIsVisible)
        })
        return () => { 
          window.removeEventListener('scroll',() => {
            handleScroll(component,setComponentIsVisible)
          }) 
        }
    },[])

    return (
        <div ref={component} className={`animate__animated ${componentIsVisible ? enterAnimation : outAnimation}`}>
            {
                children
            }
        </div>
    )
}

export default ApplierAnimation;