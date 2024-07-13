import { Typography } from "@material-tailwind/react";
 
function Footer({links,themeIsDark}) {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h5" className="mb-6 txt-size-large" color="gray">
                My Portfolio
            </Typography>
            <div className="grid grid-cols-3 justify-items-end gap-4">
                {links.map(({ title, items }) => (
                <ul key={title}>
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium txt-size-medium opacity-40"
                    >
                    {title}
                    </Typography>
                    {items.map((link,idx) => (
                    <li key={idx}>
                        <Typography
                        as="a"
                        href={`#${link.toLowerCase()}`}
                        color="gray"
                        className="py-1.5 font-normal txt-size-small transition-colors hover:text-blue-gray-900"
                        >
                        {link}
                        </Typography>
                    </li>
                    ))}
                </ul>
                ))}
            </div>
            </div>
            <div className={`mt-12 flex w-full flex-col items-center justify-center border-t ${themeIsDark ? 'border-blue-gray-900' : 'border-blue-gray-50'} py-4 md:flex-row md:justify-between`}>
            <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 txt-size-medium"
            >
                &copy; {currentYear} <a href="https://material-tailwind.com/">Daniel Pantoja</a>. All
                Rights Reserved.
            </Typography>
            </div>
        </div>
        </footer>
    );
}


export default Footer;