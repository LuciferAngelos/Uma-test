

export const getGoodsCollection = (collectionNumber = 7) => state => {
	return state.goodsCollectionReducer.collections.list[collectionNumber].id
}