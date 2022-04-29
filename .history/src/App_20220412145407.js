import './App.css'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import reactDom, from 'react-dom'{ useState } from 'react'

function App() {
	const [count, setCount] = useState(0)

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
				onClick={count => {
					setCount(count + 1)
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

			<h1> {count} </h1>
		</div>
	)
}

export default App
