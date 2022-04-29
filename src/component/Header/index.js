import React from 'react'
import { Select } from 'antd'


export default function Header() {
  const { Option } = Select

  return (
    <div>
      <Select
        defaultValue='one'
        style={{ width: 100 }}
        placeholder='select'
      >
        <Option value='one'>one</Option>
        <Option value='two'>two</Option>
        <Option value='three'>three</Option>
      </Select>
    </div>
  )
}
