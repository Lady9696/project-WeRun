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
        <article key={option.name}>
          <button id={option.id} onClick={handleSetLink(option.name)} className="bg-slate-500">
            {option.name}
          </button>
          <div className={`flex flex-col gap-4 transition-all bg-blue-900 rounded-sm overflow-hidden  ${activeLink===option.name ?'max-h-[1000px] delay-200  ease-in-out duration-400':'max-h-0 duration-200'}` }>
            {option?.sublinks.map((sublink) => (
              <button id={sublink.id}>
              <a href={sublink.link} key={sublink.name}>
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
