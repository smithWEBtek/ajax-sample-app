// $('button').on('click', function () {
// 	const username = $("#user-input").val()

// 	$.ajax({
// 		url: `https://api.github.com/users/${username}`,
// 		type: 'GET'
// 	})
// 		.done(function (data) {
// 			$('#username').append(`${data.login}`)
// 		})
// })

$('button').on('click', function () {
	const username = $("#user-input").val()

	$.ajax({
		url: `https://api.github.com/users/${username}`,
		type: 'GET',
		success: function (with_the_response) {
			console.log(with_the_response)
		}
	})

	$.ajax({
		url: `https://api.github.com/users/${username}`,
		type: 'GET'
	})
		.done(userSuccess)
})

function userSuccess(data) {
	$('#username').append(`${data.login}`)
}