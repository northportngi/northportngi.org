// /utils/dateFormatter.js

const getDayWithOrdinal = (day) => {
	if (day > 3 && day < 21) return `${day}th` // Handle special case for 11th-13th
	switch (day % 10) {
		case 1:
			return `${day}st`
		case 2:
			return `${day}nd`
		case 3:
			return `${day}rd`
		default:
			return `${day}th`
	}
}

export const formatDate = (dateString) => {
	const date = new Date(dateString)

	const day = getDayWithOrdinal(date.getDate()) // Format day with ordinal suffix
	const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) // Full month name
	const year = date.getFullYear() // Full year

	return `${month} ${day}, ${year}`
}
