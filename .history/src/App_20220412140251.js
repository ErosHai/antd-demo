import './App.css'
import { Button, Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function App() {
	return (
		<div className="App">
      <Tooltip></Tooltip>
			<Button type="primary" shape="circle" icon={<SearchOutlined />}></Button>
			<Button type="default" ghost danger>
				sign
			</Button>
			<Button type="dashed">sign up</Button>
			<Button type="text">sign up</Button>
		</div>
	)
}

export default App
