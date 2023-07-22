
import { useState } from "react";
import  AccordionData  from "./data";
import  AccordionItem  from "./accordionItem";
import "./index.css"


function Accordion() {
    const [active, setActive] = useState<number | null>(null);

    function handleToggle(index: number){
        if (active === index){
            return setActive(null);
        }
        setActive(index);
    }
    return(
        <div className="container">
            <h1>Accordions</h1>
            <ul className="accordion">
                {AccordionData.map((item)=>(
                    <AccordionItem
                    key={item.id}
                    item={item}
                    active={active}
                    handleToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
}



export default Accordion;