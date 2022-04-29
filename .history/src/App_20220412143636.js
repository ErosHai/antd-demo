import './App.css'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'

const { count, setCount } = useState(0)

function App() {
	return (
		<div className="App">
			<Tooltip title="search">
				<Button
					type="primary"
					shape="circle"
					loading="true"
					icon={<SearchOutlined />}
				></Button>
			</Tooltip>
			<Button
				type="default"
				onclick={count => {
					setCount(count++)
				}}
				block
				ghost
				danger
			>
				sign
			</Button>
			<Button type="primary" danger>
				primary
			</Button>
			<Button type="text" disabled>
				sign up
			</Button>
		</div>
	)
}

export default App
