import './App.css'
import { Button, Tooltip, Typography, Space, Divider } from 'antd'
import { BlockOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { PoweroffOutlined, SmileOutlined, SmileFilled } from '@ant-design/icons'

function App() {
	const [count, setCount] = useState(0)
	const [editableStr, setEditableStr] = useState('editable')

	const { Title, Paragraph, Link, Text } = Typography

	const blockContent = `  Antd 是蚂蚁金服开发的组件库`

	return (
		<div className="App">
			<Space direction="vertical">
				<Title>Introduction</Title>
				<Link href="https://www.baidu.com">Link to...</Link>
				<Text>Text</Text>
				<Text mark>Text mark</Text>
				<Text strong>Text strong</Text>
				<Text code> {`count: ${count}`} </Text>
				<Text code>Text code</Text>
				<Text type="success">Text success</Text>
				<Paragraph>
					<blockquote>
						Paragraph blockquote
						<Title level={3}> {blockContent} </Title>
						<pre>Paragraph pre</pre>
					</blockquote>
				</Paragraph>
				<Paragraph
					copyable={{
						icon: [
							<SmileOutlined key="copy-icon" />,
							<SmileFilled key="copied-icon" />,
						],
						tooltips: ['please click here', 'you clicked!!!'],
					}}
				>
					copyable smile
				</Paragraph>
				<Paragraph editable={{ onchange: setEditableStr }}>
					{editableStr}
				</Paragraph>
				<Paragraph title="Are you sure" okText="yes" concal>
					<Button>confirm</Button>
				</Paragraph>
			</Space>

			<Divider orientation="right">divider</Divider>
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
