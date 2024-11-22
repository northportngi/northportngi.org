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
	if (!dateString) return '' // Handle cases where dateString is null or undefined

	const date = new Date(dateString)

	if (isNaN(date.getTime())) {
		console.warn('Invalid date string:', dateString)
		return '' // Handle invalid dates gracefully
	}

	const day = getDayWithOrdinal(date.getUTCDate()) // Use getUTCDate for consistent UTC formatting
	const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) // Full month name
	const year = date.getUTCFullYear() // Use getUTCFullYear for consistency

	return `${month} ${day}, ${year}`
}
