import './App.css'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function App() {
	return (
		<div className="App">
			<Tooltip title="search" disabled>
				<Button
					type="primary"
					shape="circle"
					icon={<SearchOutlined />}
				></Button>
			</Tooltip>
			<Button type="default" ghost danger>
				sign
			</Button>
			<Button type="text">sign up</Button>
		</div>
	)
}

export default App
