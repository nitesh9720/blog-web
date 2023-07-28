import MyContext from "../utils/MyContext";
import Card from "./Card";
import { useContext } from "react";
import { useEffect } from "react";


const Body = () => {
  
 
  const data1 = useContext(MyContext)

    
  return (
    <>
      <div className="flex flex-wrap w-4/5 ml-36">
        {data1.map((d, index) => {
          return(
          <Card key={index} tag={d.tag} heading={d.heading} data={d.data} />)
         
       })}
      
        
     </div>
      
    </>
  );
};
export default Body;
