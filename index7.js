$('button').on('click', function () {
	const username = $("#user-input").val()

	$.ajax({
		url: `https://api.github.com/users/${username}`,
		type: 'GET'
	})
		.done(userSuccess)

	fetch(`https://api.github.com/users/${username}/followers`)

		.then(response => response.json()
			.then(addFollowersToDom)
			.catch(error => {
				console.log('log the error', error)
			})
		)

	function userSuccess(data) {
		$('#username').append(data.login)
	}

	// function parseJSON(response) {
	// 	return response.json()
	// }

	// function followersSuccess(data) {
	// 	addFollowersToDom(data)
	// }

	function addFollowersToDom(followersArray) {
		followersArray.forEach(function (follower) {
			$('.followers').append(`<li>${follower.login}</li>`)
		})
	}
})
