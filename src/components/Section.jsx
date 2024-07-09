function Section({children,id}){
    return(
        <section className="section-component-main padding-section" id={id}>
            {
                children
            }
        </section>
    )
}

export default Section;