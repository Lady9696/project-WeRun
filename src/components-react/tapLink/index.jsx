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
        <article key={option.name} className="flex flex-col relative  items-center justify-center bg-slate-500">
          <button id={option.id} onClick={handleSetLink(option.name)} className=" flex items-center bg-primary font-UniversExtrablack w-full justify-center"> 
          
            {option.name}
             <img className="absolute top-1/2 transform -translate-y-1/2 right-2" src={option.src}/>
          </button>
          <div  className={`flex flex-col  gap-4 transition-all bg-blue-900 rounded-sm overflow-hidden  ${activeLink===option.name ?'max-h-[1000px] delay-200  ease-in-out duration-400':'max-h-0 duration-200'}` }>
            {option?.sublinks.map((sublink) => (
              <button id={sublink.id} key={sublink.name} className="flex" > <img src={sublink.src}/>
              <a href={sublink.link} target="_blank" rel="noopener noreferrer " className="font-PalatinoNova" > 
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
