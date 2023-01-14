import React, { useState, useEffect } from 'react'
import useConfig from "../config-provider"

export const DateTimeWidget = () => {

  var [now, setDate] = useState(new Date());
  const {dispatch, state} = useConfig()

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  let time = now.toLocaleTimeString()
  let date = now.toLocaleDateString()
  let quarter = Math.ceil((now.getMonth() + 1) / 3)

  return (
    <div className="text-left">
      {state.time ? <p>Time: {time}</p> : null}
      {state.date ? <p>Date: {date}</p> : null}
      {state.quarter ? <p>Quarter: {quarter}</p> : null}
    </div>
  )
}

export default DateTimeWidget