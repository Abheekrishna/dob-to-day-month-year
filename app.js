const inputDiv = document.getElementById('dobInput')
const submitBtn = document.getElementById('submitBtn')
const dobPlaceholder = document.getElementById('dobPlaceholder')


const extractAge = (dob) => {
    const age = dob.split('-')
    const day = parseInt(age[0], 10);
    const month = parseInt(age[1], 10);
    const year = parseInt(age[2], 10)
    const dobDate = new Date (year, month - 1, day)
    const dayOfWeek = dobDate.getDay()
    const dayOfMonth = dobDate.getUTCMonth()

    if (day <= 31 && month <= 12) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[dayOfWeek]
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[dayOfMonth]
    dobPlaceholder.innerText = `You were born on ${dayName}, ${day}th ${monthName} ${year}`

} else if (day > 31 || month > 12) {
    dobPlaceholder.innerText = 'Are a drunk or what? Enter DOB properly!'
}
}


submitBtn.addEventListener('click', () => {
    extractAge(inputDiv.value)
})

