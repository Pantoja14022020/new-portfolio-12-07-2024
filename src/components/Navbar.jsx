import { useEffect, useState } from "react"

function Navbar({children,options,optionSelected,themeIsDark}){
    
    const [selected, setSelected] = useState('')

    useEffect(()=>{
        setSelected(optionSelected)
    },[])

    return(
        <nav className="navbar-component-main flex-direction-navbar position-navbar">
            {
                children
            }
            <ul className="flex-direction-navbar">
                {
                    options.map((option,id) => (
                        <li 
                            key={id} 
                            className={`${selected == option.name ? 'option-focused' : ( themeIsDark ? 'option-hover-dark' : 'option-hover-light')}`}
                            onClick={e => setSelected(option.name)}
                        >
                            <a href={option.href} className="txt-size-small" style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>{option.txt}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar