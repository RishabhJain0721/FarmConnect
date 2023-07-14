import React, { useState } from 'react';
import { singular } from 'pluralize';

import Logo from "../Assets/Images/Logo.png";
import ConsumerCardList from '../Components/ConsumerCardList';
import { useFarmContext } from '../Context/useContext';

export default function Consumer() {
  const { consumerSearch, setConsumerSearch } = useFarmContext();
  const [consumerInput, setConsumerInput] = useState('');
  const [back,setBack]=useState(false)

  function handleChange(e) {
    setConsumerInput(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault()
    const word=consumerInput
    const lowerCaseWord=word.toLowerCase()
    const grocerries=singular(lowerCaseWord)
    setConsumerSearch(grocerries);
    setBack(true)
    // setConsumerInput("")
    
  }
  
  function handleback(){
    setBack(false)
    setConsumerInput("")
    setConsumerSearch("")
  }
  

  return (

    <div className='consumer-side'>
      <div>
        <div className="flex justify-between px-10">
        <form className=" p-2 inline-flex  rounded-md w-1/2 flex">
          <div className="bg-green-200 p-2 inline-flex mt-10 rounded-md w-5/6 ">
           
            <input
              type="text"
              className="bg-white px-4 py-2 rounded-md outline-none w-5/6 mr-2"
              placeholder="Search here"
              value={consumerInput}
              onChange={handleChange}
            />
            <button type='submit'
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>

          { back && consumerSearch &&<button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
              onClick={handleback} >
              Back
            </button>
            }
            
          </div>
          </form>
          <div className="consumer-logo ">
            <img src={Logo} alt="" className='w-50 h-20  mt-8' />
          </div>
        </div>
      </div>
      <ConsumerCardList />
    </div>
  );
}
