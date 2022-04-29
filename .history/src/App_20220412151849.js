import './App.css'
import { Button, Tooltip, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { PoweroffOutlined } from '@ant-design/icons'

function App() {
	const [count, setCount] = useState(0)

	const { Title, Link, Text } = Typography

	return (
		<div className="App">
			<Title>Introduction</Title>
			<Link>Introductions</Link>
			<Text block>Text</Text>
			<Text mark>Text mark</Text>
			<Text strong>Text strong</Text>
			<Text code>Text code</Text>

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
				onClick={() => {
					setCount(count + 1)
				}}
				block
				ghost
				danger
			>
				increment
			</Button>
			<Button type="primary" danger icon={<PoweroffOutlined />}>
				primary
			</Button>
			<Button type="text" disabled>
				sign up
			</Button>

			<h1> {count} </h1>
		</div>
	)
}

export default App
