import React from 'react'
import { NavLink } from 'react-router-dom';



const UserMenuLinks = () => {
	return (
		<div className='dflex-center'>
			<h3 className='menuHeading'>Ссылки автора</h3>
			<div className='menuDivider'></div>
			<NavLink exact to='/mysite' className='userMenuLinks' activeClassName='activeLink'>Мой сайт</NavLink>
			<NavLink to='/whatsapp' className='userMenuLinks' activeClassName='activeLink'>WhatsApp</NavLink>
			<NavLink to='/telegramm' className='userMenuLinks' activeClassName='activeLink'>Telegram</NavLink>
			<NavLink to='/cooperation' className='userMenuLinks' activeClassName='activeLink'>Сотрудничество</NavLink>
		</div >
	)
}

export default UserMenuLinks