import React from 'react'
import './Select.css'

const Select = ({options, onSelect, defaultOption}) => {
  return (
        <select className='btn select'  onChange={(e) => onSelect(e.target.value)}>
        {options.map((o, i) => <option key={i} value={o.value}>{o.text}</option>)}
        </select>
  )
}

export default Select