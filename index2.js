$('button').on('click', function () {
	const username = $("#user-input").val()

	$.ajax({
		url: `https://api.github.com/users/${username}`,
		type: 'GET'
	})
		.done(function (data) {
			$('#username').append(`${data.login}`)
		})
})