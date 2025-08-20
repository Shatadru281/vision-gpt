import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
function Sidebar(){

    const {allThreads,setAllThreads,currThreadId} =useContext(MyContext);

    const getAllThreads=async()=>{
        try{
            const response=await fetch("http://localhost:8080/api/thread");
            const res=await response.json();
            const filterData=res.map(thread =>({threadId: thread.threadId,title:thread.title}));
            console.log(filterData);
            setAllThreads(filterData);

        //threadId,title

        }catch(err){
            console.log(err);
        }

    };


    useEffect(()=>{
        getAllThreads();

    },[])
    return(
        <section className="sidebar">
        
           {/* New Chat button */}
         <button>
            <img src="src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
            <span><i className="fa-solid fa-pen-to-square"></i></span>
         </button>


           {/* History */}
           <ul className="history">
               {
                allThreads?.map((thread =>(
                    <li key={idx}>{thread.title}</li>
                )))
               }

           </ul>
           {/* sign */}
            <div className="sign">
            <p>By VisionGPT &hearts;</p>

            </div>


        </section>
    )
}

export default Sidebar;