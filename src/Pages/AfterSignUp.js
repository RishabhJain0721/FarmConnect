import React from 'react'

const AfterSignUp = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Welcome {props.user}</h1>
    </div>
  )
}

export default AfterSignUp
