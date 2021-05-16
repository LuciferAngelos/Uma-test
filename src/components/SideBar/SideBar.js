import React from 'react'
import { Layout } from 'antd'
import AvatarAndID from './AvatarAndID'
import { Col } from 'antd';
import UserMenuLinks from './UserMenuLinks';



const { Sider } = Layout

const SideBar = ({ avatar, instaId, userFullName }) => {

	return (
		<Col lg={4} xs={24}>
			<Sider style={{ backgroundColor: '#fff', marginLeft: '5rem' }} className='xs-top'>
				<AvatarAndID avatar={avatar} instaId={instaId} userFullName={userFullName} />
				<UserMenuLinks />
			</Sider>
		</Col>

	)
}

export default SideBar