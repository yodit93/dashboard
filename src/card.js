import React from 'react'
import Chart from './chart'

const Card = ({ data, title }) => {
  return (
   <div className="card">
        <h3 className="title">{title}</h3>
        <Chart data={data} />
    </div>
  )
}

export default Card
