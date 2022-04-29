import './App.css'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function App() {
	return (
		<div className="App">
			<Button type="primary" icon="{<GoogleOutlined />}">
				sign in
			</Button>
			<Button type="default">sign up</Button>
			<Button type="dashed">sign up</Button>
			<Button type="text">sign up</Button>
		</div>
	)
}

export default App
