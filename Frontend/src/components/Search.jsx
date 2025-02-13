import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Search = () => {
    const [search ,setSearch] = useState("Indore Madhya Pradesh")
    return (
        <div className="flex flex-row justify-around items-center mt-10">
            <div className="flex flex-col">
                    <div><h5>Select City</h5></div>
                     <div className="relative flex row justify-between items-center" >
                     <div>
                    <input className="  border pl-5 pr-25 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    type="text"
                    alt=""
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder=""/>
                    <IoLocation className="absolute right-30 size-5 top-2 text-purple-600" /> </div>
                    <div className="justify-between relative left-5">  
                    <button className="items-center right-10
                    bg-purple-600 px-2 py-1 rounded text-white">Find Company</button>

                    </div>
                    </div>
        
            
            </div>
            <div className="flex  mt-5 justify-between space-x-5">
        
            <div>
            <Link to={"/"}
             
            ><button className="text-white bg-purple-600 mt-4.5 px-2 py-1 rounded">
           
            <span className="mx-1">
            +</span>Add Company</button>
            </Link></div>
            
            <div className="flex flex-col">
                    <div><h5>Sort</h5></div>
                     <div className="relative flex row items-center" >
                     <div>
                    <select name="sort" className="border-2 py-0.5 px-1 rounded-md text-gray-600">
                     <option >Name</option>
                     <option >Average</option>
                     <option >Rating</option>
                     <option >Location</option>
                    </select>
                     </div>
                   
                    </div>
        
            
            </div>
                
            </div>

              
        </div>
            
    );
};

export default Search;



