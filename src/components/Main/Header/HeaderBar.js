import { Button, Space } from 'antd'
import React from 'react'
import { Layout } from 'antd';


const { Header } = Layout;

const headBarButtons = ['Одежда', 'Подборки', 'Детям', 'Книги']


const HeaderBar = () => {
	return (
		<Header className='xs-hide' style={{ backgroundColor: '#fff', paddingLeft: '0' }}>
			<Space size={'middle'}>
				{headBarButtons.map((i, idx) => {
					return (
						idx === 0 ? <Button key={idx} className={'headerMenuButtons'} autoFocus={true} >{i}</Button> :
							<Button key={idx} className={'headerMenuButtons'}>{i}</Button>
					)
				})}
			</Space>
		</Header>
	)
}

export default HeaderBar
