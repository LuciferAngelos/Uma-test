import Avatar from 'antd/lib/avatar/avatar'



const AvatarAndUserId = ({ avatar, instaId, userFullName }) => {



	return (
		<div className='dflex-center'>
			<a href={`https://www.instagram.com/${instaId}`} title={`${userFullName}`} target='_blank' rel="noreferrer">
				<Avatar src={avatar} size={118} alt={`@${instaId}`} />
				<p className='userIdPar'>@{instaId}</p>
			</a>
		</div>
	)
}

export default AvatarAndUserId