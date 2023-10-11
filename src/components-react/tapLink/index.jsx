import { useState } from "react";
// aquì coloco  que las props serà un array de opciones
const TapLink = ({ options = [] }) => {
  // establezco los el estado en null
  const [activeLink, setActiveLink] = useState(null);
  //cuando el estado sea name , y le de click se va a actualizar a null(se esconde) , y cuando sea null se va actualizar a name (se muestre). 
  const handleSetLink = (name) => ()=> {
    setActiveLink(prev=>prev===name?null:name)
    
    
};
  console.log(activeLink, 'aqui');
  return (
    <div>
      {options?.map((option) => (
        <article key={option.name}>
          <button onClick={handleSetLink(option.name)} className="bg-slate-500">
            {option.name}
          </button>
          <div className={`flex flex-col gap-4 transition-all bg-blue-900 rounded-sm overflow-hidden  ${activeLink===option.name ?'max-h-[1000px] delay-200  ease-in-out duration-400':'max-h-0 duration-200'}` }>
            {option?.sublinks.map((sublink) => (
              <a href={sublink.link} key={sublink.name}>
                {sublink.name}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
export default TapLink;
