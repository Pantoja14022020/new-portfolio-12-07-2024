function Header({children,backgroundColor,id}){
    return(
        <>
            <header id={id} className="header-component-main" style={{backgroundColor:`${backgroundColor}`}}>
                {
                    children
                }
            </header>
        </>
    )
}

export default Header