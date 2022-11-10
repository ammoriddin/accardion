let closeBtn = document.querySelectorAll(".close"),
		card = document.querySelectorAll(".card");
	
	closeBtn.forEach(function (e) {
		e.addEventListener("click", closeCard)
	});

	card.forEach(function(e) {
		e.addEventListener("click",openCard)
	});

	function closeCard(event){
		event.stopPropagation();
		event.target.closest(".card").classList.add("closed")
	}

	function openCard(e) {
		if(e.currentTarget.classList.contains("closed")){
			e.currentTarget.classList.remove('closed')
		}
	}

	// 19:10da tugatdim accardion JB