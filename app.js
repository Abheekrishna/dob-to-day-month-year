const extractAge = (dob) => {
    const age = dob.split('-')
    const day = parseInt(age[0], 10);
    const month = parseInt(age[1], 10);
    const year = parseInt(age[2], 10)
    const dobDate = new Date (year, month - 1, day)
    const dayOfWeek = dobDate.getDay()
    const dayOfMonth = dobDate.getUTCMonth()

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayOfWeek]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[dayOfMonth]

    const message = `You born on ${dayName}, ${day}th ${monthName} ${year}`
    return message
}

console.log(extractAge('15-4-2005'))