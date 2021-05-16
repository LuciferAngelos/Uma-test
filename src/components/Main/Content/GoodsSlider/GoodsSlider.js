import React, { useRef } from 'react'
import { Button, Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import { getDataFromArray, sortArrayBySize } from '../../../../helpers/getValuesFromCollection';



const GoodsSlider = ({ goodsFromCollection, width }) => {

	const slider = useRef()
	const { Meta } = Card;

	const unsortedGoods = getDataFromArray(goodsFromCollection);

	const setCollectionSizeForMapping = width > 992 ? sortArrayBySize(unsortedGoods, 8) : sortArrayBySize(unsortedGoods, 3);

	const goods = setCollectionSizeForMapping.map((goodsArr, idx) => {
		return (
			<div key={idx}>
				<Row gutter={16}>
					{
						goodsArr
							.map(product => {
								return (
									<Col key={product.id} lg={6} xs={8}>
										<Card className="gutter-row custAntCard" title={product.name} bordered={true} hoverable>
											<img src={product.imgUrl} alt={product.storyText} />
											<Meta title={`${product.price} ₽`} />
										</Card>
										<div className='cardButton'>
											<Button className={'headerMenuButtons'}>В магазин</Button>
										</div>
									</Col>

								)
							})
					}
				</Row>
			</div>
		)
	}

	)



	return (
		<div>
			<div className="sliderHeader">
				<h3 className='blockHeader'>Где купить похожее?</h3>
				<div className="sliderHeaderButtons">
					<Button onClick={() => slider.current.prev()} icon={<LeftOutlined />} />
					<Button onClick={() => slider.current.next()} icon={<RightOutlined />} autoFocus={true} />
				</div>
			</div>
			<Carousel ref={slider} dots={false} style={{ overflow: 'hidden' }}>
				{goods}
			</Carousel>


		</div>

	)
}

export default GoodsSlider