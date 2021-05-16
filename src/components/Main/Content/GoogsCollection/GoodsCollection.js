import React from 'react'
import { Card } from 'antd';



const GoodsCollection = ({ collectionId }) => {
	const collectionImg = `https://looks.umastyle.club/liveimg/${collectionId}`

	return (
		<div>
			<h3 className='blockHeader xs-hide'>Подборка платьев</h3>
			<Card className='collectionCard'>
				<img src={collectionImg} alt="Dresses Collection" className='dressesCollectionImg' />
			</Card>
		</div>

	)
}

export default GoodsCollection