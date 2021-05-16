import React from 'react'
import { Layout, Row } from 'antd';
import { Col } from 'antd';
import HeaderBar from './Header/HeaderBar';
import { Content } from 'antd/lib/layout/layout';
import GoodsSlider from './Content/GoodsSlider/GoodsSlider';
import GoodsCollection from './Content/GoogsCollection/GoodsCollection';
import { Skeleton } from 'antd';
import { Divider } from 'antd';



const Main = ({ collectionId, goodsFromCollection, width }) => {
	return (
		<Col lg={17} xs={22} offset={1}>
			<Layout style={{ width: '100%', backgroundColor: '#fff' }}>
				<HeaderBar />
				<Content style={{ width: '100%', backgroundColor: '#fff' }}>
					<Row gutter={16}>
						<Col xs={24} lg={10} >
							<Skeleton active loading={!collectionId}>
								<GoodsCollection collectionId={collectionId} />
							</Skeleton>
						</Col>
						<Skeleton active loading={!goodsFromCollection}>
							<Col xs={{ span: 24, offset: 0 }} lg={{ span: 13, offset: 1 }} className='gutter-row'>
								<GoodsSlider goodsFromCollection={goodsFromCollection} width={width} />
							</Col>
						</Skeleton>
					</Row>
				</Content>
				<Divider plain style={{ borderTop: '1px solid #666666' }} className='xs-hide' />
				<Content style={{ width: '100%', backgroundColor: '#fff' }} className='xs-hide'>
					<Row gutter={16}>
						<Col xs={24} lg={10} >
							<Skeleton active loading={!collectionId}>
								<GoodsCollection collectionId={collectionId} />
							</Skeleton>
						</Col>
						<Skeleton active loading={!goodsFromCollection}>
							<Col xs={{ span: 24, offset: 0 }} lg={{ span: 13, offset: 1 }} className='gutter-row'>
								<GoodsSlider goodsFromCollection={goodsFromCollection} width={width} />
							</Col>
						</Skeleton>
					</Row>
				</Content>
			</Layout>
		</Col>
	)
}

export default Main