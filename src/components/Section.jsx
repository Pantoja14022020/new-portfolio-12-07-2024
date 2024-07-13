function Section({children,id,backgroundColor}){
    return(
        <section className="section-component-main padding-section" id={id} style={{backgroundColor:`${backgroundColor}`}}>
            {
                children
            }
        </section>
    )
}

export default Section;