		var h = document.location.hash.substring(1);
		if (h && h != "") {
			var re = new RegExp(".+@.+");
			if (h.match(re)) {
				document.getElementById("email").innerHTML += " ("+h+")";
			}
		}
