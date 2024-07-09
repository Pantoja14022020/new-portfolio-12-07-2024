function Header({children,backgroundColor,urlBackground,id}){
    return(
        <>
            <header id={id} className="header-component-main" style={{backgroundColor:`${backgroundColor}`, backgroundImage:`url("${urlBackground}")`}}>
                {
                    children
                }
            </header>
        </>
    )
}

export default Header