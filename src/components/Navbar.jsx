import { useEffect, useState } from "react"
import { RiMenu2Line } from "react-icons/ri";
import {
    Drawer,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

function Navbar({children,options,optionSelected,themeIsDark}){
    
    const [selected, setSelected] = useState('')

    const [open, setOpen] = useState(false);//State para abrir o cerrar el menu side
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    useEffect(()=>{
        setSelected(optionSelected)
    },[])

    return(
        <>
            <nav className="navbar-component-main flex-direction-navbar position-navbar">
                {
                    children
                }
                <ul className="flex-direction-navbar" style={{backgroundColor:`${themeIsDark ? 'var(--background-color-ultrablack)' : 'var(--background-color-semiwhite)'}`, padding:'1rem 0.5rem', borderRadius:'1rem'}}>
                    {
                        options.map((option,id) => (
                            <li 
                                key={id} 
                                className={`${selected == option.name ? 'option-focused-normal' : ( themeIsDark ? 'option-hover-dark' : 'option-hover-light')} hide-options`}
                                onClick={e => setSelected(option.name)}
                            >
                                <a href={option.href} className="txt-size-small" style={{display:'flex',flexDirection:'row',alignItems:'center',color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>{option.txt}<span style={{marginLeft:'0.25rem'}}>{option.icon}</span></a>
                            </li>
                        ))
                    }
                    <li className="btn-menu-show" style={{display:'none'}} onClick={openDrawer}>
                        <RiMenu2Line style={{color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}} className='txt-size-medium'/>
                    </li>
                </ul>
            </nav>


            <Drawer overlay={false} open={open} onClose={closeDrawer} className={`${themeIsDark ? 'bg-[var(--background-color-ultrablack)]' : 'bg-white'}`} >
                <div className="mb-2 flex items-center justify-between p-4">
                    <Typography variant="h5" color="blue-gray">
                        Menu
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </IconButton>
                </div>
                <List>
                    {
                        options.map((option,id) => (
                            <a href={option.href} className="txt-size-small" style={{display:'flex',color:`${themeIsDark ? 'var(--color-txt-secondary-dark)' : 'var(--color-txt-primary-light)'}`}}>
                                <ListItem key={id} onClick={e => setSelected(option.name)} className={`${selected == option.name ? (themeIsDark ? 'option-focused-dark' : 'option-focused-light' ) : ( themeIsDark ? 'option-hover-dark' : 'option-hover-light')}`}>
                                    <ListItemPrefix>
                                        {option.icon}
                                    </ListItemPrefix>
                                    {option.txt}
                                </ListItem>
                            </a>
                        ))
                    }
                </List>
            </Drawer>
        </>
    )
}

export default Navbar