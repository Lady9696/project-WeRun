import { useState } from "react";
const TapLink = ({ options = [] }) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleSetLink = (name) => ()=> {
    setActiveLink(prev=>prev===name?null:name)
    
};
  console.log(activeLink, 'aqui');
  return (
    <section>
      {options?.map((option) => (
        <article key={option.name} className="flex flex-col relative  items-center justify-center  gap-[18px] w-auto ">
          <button  key={option.name} id={option.id} onClick={handleSetLink(option.name)} className=" flex items-center relative  bg-primary font-UniversExtrablack w-full justify-center  rounded-full  py-[4px] text-[16px] px-[30px] "> 
          
            {option.name}
             <img className={` absolute top-1/2 transform -translate-y-1/2 right-2 ${activeLink === option.name ? 'rotate-180' : ''}`}  src={option.src}/>
          </button>
          <div  className={`flex flex-col gap-4 transition-all  rounded-sm py-4  overflow-hidden  ${activeLink===option.name ?'max-h-[1000px] delay-200  ease-in-out duration-400':'max-h-0 duration-200 py-0'}` }>
            {option?.sublinks.map((sublink) => (
              <button id={sublink.id} key={sublink.name} className="flex justify-center items-center bg-secondary py-2 px-3 rounded-full gap-2" > <img src={sublink.src}/>
              <a href={sublink.link} target="_blank" rel="noopener noreferrer " className="font-PalatinoNova text-[18px]" > 
                {sublink.name}
              </a>
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
export default TapLink;
