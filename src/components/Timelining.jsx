import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
 
function Timelining({me,items,colorRounded,isVisible,enter,out}) {


  return (
      <Timeline ref={me} className={`animate__animated ${isVisible ? enter : out}`}>
        {
          items.map((item,idx) => (
            <TimelineItem key={idx}>
              { idx == (items.length - 1) ? <></> : <TimelineConnector /> /*Esto es para que el ultimo item no tenga conector */}
              <TimelineHeader>
                <TimelineIcon className="p-2 txt-size-medium" style={{backgroundColor:`${colorRounded}`}}>
                  {item.icon}
                </TimelineIcon>
                <Typography variant="h5" color="blue-gray" className="txt-size-medium">
                  {item.txt}
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography color="gray" className="font-normal text-gray-600 txt-size-small">
                  {item.des != null ? item.des : ''}
                </Typography>
              </TimelineBody>
            </TimelineItem>
          ))
        }
      </Timeline>
  );
}


export default Timelining;