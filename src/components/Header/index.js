import React, { Component } from 'react'
import { Layout, Breadcrumb } from 'antd'
import ContentItem from '../Content'

const { Header, Content, Sider, Footer } = Layout

export default class Head extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Header>Header</Header>
					<Layout>
						<Sider>Sider</Sider>
						<Layout>
							<Breadcrumb>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>Content</Breadcrumb.Item>
								<Breadcrumb.Item>About</Breadcrumb.Item>
							</Breadcrumb>
							<Content>
								<ContentItem />
							</Content>
						</Layout>
					</Layout>
					<Footer>Footer</Footer>
				</Layout>
			</div>
		)
	}
}
