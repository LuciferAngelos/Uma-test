import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://looks.umastyle.club/'
})

export const userAPI = {
	//temp
	getUserData(mnem = 'tanya_tilcha') {
		return instance.get(`custapi/allrest/fashion/publicuser?mnem=${mnem}`)
	}
}

export const goodsAPI = {
	getCollectionsData(styleUserMnem = 'tanya_tilcha', page = 1, classId = 184) {
		return instance.get(`custapi/allrest/fashion/listfilteredfashion?styleUserMnem=${styleUserMnem}&page=${page}&classId=${classId}`)
	},
	getGoodsFromCollecion(collectionId) {
		return instance.get(`custapi/allrest/fashion/listfashionprod?fashionId=${collectionId}`)
	}
}
