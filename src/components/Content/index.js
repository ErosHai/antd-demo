import React, { useState } from 'react'
import {
	Row,
	Col,
	Button,
	Tooltip,
	Typography,
	Space,
	Divider,
	Popconfirm,
} from 'antd'
import {
	PoweroffOutlined,
	SmileOutlined,
	SmileFilled,
	SearchOutlined,
} from '@ant-design/icons'

const blockContent = `  Antd 是蚂蚁金服开发的组件库   `
const { Title, Paragraph, Link, Text } = Typography
const style = { background: '#0092ff', margin: '8px 0', padding: '8px 0' }

export default function Content() {
	const [count, setCount] = useState(0)
	const [editableStr, setEditableStr] = useState('editable')

	return (
		<div>
			<Space size="small" direction="vertical" align="start">
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
				<Popconfirm title="Are you sure" okText="yes" cancelText="no">
					<Button>confirm</Button>
				</Popconfirm>
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
			<Row>
				<Col span={24} style={style}>
					col-24
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<div style={style}> col-12</div>
				</Col>
				<Col span={12}>
					<div style={style}> col-12</div>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={8}>
					<div style={style}> col-8</div>
				</Col>
				<Col span={8}>
					<div style={style}> col-8</div>
				</Col>
				<Col span={8}>
					<div style={style}> col-8</div>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={8}>
					<div style={style}>col-8</div>
				</Col>
				<Col span={8} offset={8}>
					<div style={style}>col-8</div>
				</Col>
			</Row>
			<Row gutter={[16, 16]} justify="space-around">
				<Col span={4}>
					<div style={style}>col-4-1</div>
				</Col>
				<Col span={4}>
					<div style={style}>col-4-2</div>
				</Col>
				<Col span={4}>
					<div style={style}>col-4-3</div>
				</Col>
				<Col span={4}>
					<div style={style}>col-4-4</div>
				</Col>
			</Row>
		</div>
	)
}
