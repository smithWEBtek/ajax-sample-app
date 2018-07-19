
// listening for the 'click' event 'ON' an HTML element of 'button'
// this listener would apply to any or all 'buttons' on the page
// when the 'event' happens, the function is then called
// a variable called "username" is set equal to the value 'val()' of the element with the id of user-input
// the username is then used later to append to our URL for fetching data

$('button').on('click', function () {
	const username = $("#user-input").val()


	// we send a GET request to this URL, with the username appended

	$.ajax({
		url: `https://api.github.com/users/${username}`,
		type: 'GET'
	})
		// when done, we call userSuccess function ON the returned data

		.done(userSuccess)

	fetch(`https://api.github.com/users/${username}/followers`)
		.then(parseJSON)
		.then(followersSuccess)
})

function userSuccess(data) {
	$('#username').append(data.login)
}

function parseJSON(response) {
	return response.json()
}

function followersSuccess(data) {
	console.log(data)
}