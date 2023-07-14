import React from 'react'
import { singular } from 'pluralize'
import ConsumerCard from './ConsumerCard'
import { useFarmContext } from '../Context/useContext'

export default function ConsumerCardList() {
  const { consumerCardDetails, consumerSearch } = useFarmContext()
  console.log(consumerSearch)

  const consumerCardFilteredDetails = consumerCardDetails.filter((cardDetail) => singular(cardDetail.name.toLowerCase()) === consumerSearch);
  return (
    <div className="consumerlist flex mx-6 mt-6 flex-wrap" >
      {
        consumerSearch ? (
          consumerCardFilteredDetails.length > 0 ?
            (consumerCardFilteredDetails.map((cardDetail,index) => {
              return <>

                {<ConsumerCard cardDetail={cardDetail} key={index}/>}
              </>
            })) : <p className="m-auto text-5xl text-green-800 flex justify-center items-center h-2/3 font-sans" >  No Items Found...</p>

        ) : consumerCardDetails.map((cardDetail,index) => {
          return <>

            {<ConsumerCard cardDetail={cardDetail} key={index} />}
          </>
        }

        )
      }
    </div>
  )
}
