$.ajax({
	url: 'https://api.github.com/users/:username',
	type: 'GET',
	success: function (data) {
		console.log(data)
	}
})


// $.ajax({
//   url: 'https://api.github.com/users/:username',
//   type: 'GET'
//   })
//   .done(function(data) {
//     console.log(data)
// })