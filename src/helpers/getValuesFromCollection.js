export const getDataFromArray = (arr, propName = 'uproduct') => {
	return arr.map(i => {
		return {
			id: i.id,
			name: i[propName].name,
			price: i[propName].price,
			imgUrl: i.imgUrl,
			storyText: i[propName].storyText
		}
	})
}

export const sortArrayBySize = (arr, size) => {
	let subarray = [];
	for (let i = 0; i < Math.ceil(arr.length / size); i++) {
		subarray[i] = arr.slice((i * size), (i * size) + size);
	}
	return subarray;
}