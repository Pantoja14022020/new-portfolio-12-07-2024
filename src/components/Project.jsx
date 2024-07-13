import {
    Card,
    CardBody,
    Chip,
    Dialog,
    Typography,
    Carousel
  } from "@material-tailwind/react";
import Accord from "./Accord";
import { BiSolidDownload } from "react-icons/bi";
import { getVariant } from "../utilities/generate-random";
import { TiLocation } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
   
function Project({imgs,evidenceType,link,country,references,typeJob,subtitle,title,variantsChips,techs,techsIcons,about,funcionalities}) {

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

    return (
      <Card className={`flex-direction-row align-items-center justify-content-center shadow-none dimensions-card`} style={{margin:'0.5rem',position:'relative'}}>

        <CardBody className="w-4/5">
          <Typography variant="h4" color="blue-gray" className="mb-2 uppercase txt-size-large">{title}</Typography>
          <Typography variant="h6" color="gray" className="mb-4 txt-size-medium">{subtitle} - {typeJob}</Typography>
          <Typography className="flex-direction-row align-items-center txt-size-small" style={{fontSize:'0.9rem'}}>
            <TiLocation style={{marginRight:'0.5rem'}} className="txt-size-small"/>
            <p className="txt-size-small">{country}</p>
            {
              evidenceType == 'carrousel' ? 
                  <button onClick={handleOpen} className="btn-see txt-size-small"><FaLocationArrow/></button>
                : <a href={`${link}`} target="_blank" className="btn-see txt-size-small"><FaLocationArrow/></a>
            }
            {
              evidenceType == 'carrousel' ? 
                <Dialog 
                  open={open} 
                  handler={handleOpen} 
                  size="xl" 
                  className="rounded-3xl" 
                  style={{padding:'1.2rem'}}
                >
                  <Carousel
                    className="rounded-3xl w-full"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                          <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                              activeIndex === i ? "w-8 bg-blue-gray-900" : "w-4 bg-black/15"
                            }`}
                            onClick={() => setActiveIndex(i)}
                          />
                        ))}
                      </div>
                    )}
                    
                    nextArrow={({ loop, handleNext, lastIndex }) => (
                      <button
                        onClick={handleNext}
                        disabled={!loop && lastIndex}
                        className="!absolute top-2/4 right-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-blue-gray-800 hover:bg-white/10 active:bg-white/30 grid place-items-center"
                      >
                        <MdKeyboardArrowRight className="ml-1 h-7 w-7" />
                      </button>
                    )}

                    prevArrow={({ loop, handlePrev, firstIndex }) => {
                      return (
                        <button
                          onClick={handlePrev}
                          disabled={!loop && firstIndex}
                          className="!absolute top-2/4 left-0 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-blue-gray-800 hover:bg-white/10 active:bg-white/30 grid place-items-center"
                        >
                          <MdKeyboardArrowLeft className="-ml-1 h-7 w-7" />
                        </button>
                      );
                    }}
                  >
                    {
                      imgs.map((img,idx) => (
                        <img
                          key={idx}
                          src={`${img}`}
                          alt={`${idx}`}
                          className="h-full w-full object-cover"
                        />
                      ))
                    }
                  </Carousel>
                </Dialog>
              : <></>
            }
          </Typography>
          <Accord txtHeader={'About this project'}>
            <p className="txt-size-small">{about}</p>
          </Accord>
          <Accord txtHeader={'Features'}>
            <ul>
              {
                funcionalities.map((func,idx) => (
                  <li key={idx} className="txt-size-small" style={{marginLeft:'1rem',marginBottom:'0.5rem'}}> ⭐ {func}</li>
                ))
              }
            </ul>
          </Accord>
          <Accord txtHeader={'Techs'}>
            <div className="flex-direction-row align-items-center flex-wrap">
              {
                  techs.map((tech,idx) => (
                    <Chip key={idx} className="txt-size-small padding-chips-techs capitalize font-normal" value={`${tech}`} style={{marginRight:'0.5rem', marginTop:'0.5rem', width:'fit-content'}} variant={`${getVariant(variantsChips)}`}/>
                  ))
              }
            </div>
          </Accord>
          <Accord txtHeader={'References'}>
            {
              references != '' ? 
                <a className='margin-top-medium flex-direction-row align-items-center justify-content-center' href={`${references}`} download style={{backgroundColor:`${'var(--background-color-semiwhite)'}`,width:'40px',height:'40px',borderRadius:'50%',color:`${'var(--color-txt-primary-light)'}`}}><BiSolidDownload /></a>
              : <p className="txt-size-small">Empty</p>
            }
          </Accord>
          <div className="flex-direction-row align-items-center justify-content-flex-start margin-top-large hide-chips-project">
            {techsIcons.map((techIcon,idx) => (
                <span key={idx} style={{marginRight:'1rem',width:'35px',height:'35px',backgroundColor:'var(--background-color-ultrablack)', display:'flex', alignItems:'center',justifyContent:'center',borderRadius:'50%',color:'var(--color-txt-primary-dark)'}}>{techIcon}</span>
              ))
            }
          </div>
        </CardBody>

      </Card>
    );
}


export default Project