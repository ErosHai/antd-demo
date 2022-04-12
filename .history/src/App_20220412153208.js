import './App.css'
import { Button, Tooltip, Typography } from 'antd'
import { BlockOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { PoweroffOutlined } from '@ant-design/icons'

function App() {
	const [count, setCount] = useState(0)

	const { Title, Paragraph, Link, Text } = Typography

	const blockContent = `  Antd 是蚂蚁金服开发的组件库`

	return (
		<div className="App">
			<Title>Introduction</Title>
			<Link href="https://www.baidu.com">Link to...</Link>
			<Text>Text</Text>
			<Text mark>Text mark</Text>
			<Text strong>Text strong</Text>
			<Text code> {`count: ${count}`} </Text>
			<Text code>Text code</Text>
			<Paragraph>
				<blockquote>
					Paragraph blockquote
					<Text strong> {blockContent}</Text>
					<pre>Paragraph pre</pre>
				</blockquote>
			</Paragraph>

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
		</div>
	)
}

export default App
