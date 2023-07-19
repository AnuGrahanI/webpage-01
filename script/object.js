



//drop down for header section click
let drop = document.getElementsByClassName("drop-down");
let shows = document.getElementsByClassName("dropitem");

drop[0].addEventListener("click", function () {
	shows[0].classList.toggle("dropdown2")
});
function signout(event) {
	event.preventDefault();
	localStorage.removeItem("islogin");
	window.location.replace("login.html");
}

let navs = document.getElementsByClassName("nav")[0];
let actives = navs.getElementsByClassName("navlists")
for (i = 0; i < actives.length; i++) {
	actives[i].addEventListener("click", function () {
		for (j = 0; j < actives.length; j++) {
			actives[j].classList.remove("globeactive");
		}
		this.classList.add("globeactive")
	})
}
//editing forms for edit skills and education and all
let overlay = document.getElementsByClassName("blur")[0];
let popopedit = document.getElementsByClassName("popop_edit");
let close = document.getElementsByClassName("popup-edit-close");
let popup = document.getElementsByClassName("popup");

for (let i = 0; i < popup.length; i++) {
	popup[i].addEventListener("click", function (e) {
		e.preventDefault();
		this.parentNode.nextElementSibling.setAttribute("id", "show");
		overlay.setAttribute("id", "overlay");
	});

	close[i].addEventListener("click", function (e) {
		e.preventDefault();
		this.parentNode.parentNode.parentNode.removeAttribute("id", "show");
		overlay.removeAttribute("id", "overlay");
	});
}

// skills item adding function
const myButton = document.getElementById("addskillbtn");
myButton.addEventListener("click", function (e) {
	e.preventDefault();
	const input = document.createElement("input");
	input.setAttribute("type", "text");
	input.classList.add("addinputs");
	myButton.parentNode.replaceChild(input, myButton);
	input.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			event.preventDefault()
			let anna = document.getElementsByClassName("addinputs")[0]
			console.log(anna.value)
			let ele = document.createElement("span")
			ele.setAttribute("class", 'skillsclose')
			ele.innerText = anna.value;
			let ids = document.getElementById("skillitems")
			ids.appendChild(ele)
			anna.value = '';
			//document.getElementById("myFormId").reset();//insted of -anna.value = '';
			ele.addEventListener("click", function(){
				ele.remove("skillsclose");
			  })
		}
	});
});

//folowing function
let followBtn = document.getElementsByClassName("follow");
	for (let i = 0; i < followBtn.length; i++) {
		followBtn[i].addEventListener("click", follows)
	}
	function follows(e) {
		e.preventDefault()
		let follow = this;
		let count = this.parentNode.parentNode.getElementsByClassName("folowcount")[0];
		let countNo = parseInt(count.textContent.replace(/,/g, ""))
		console.log(countNo);
		if (follow.classList.contains("counts")) {
			let a = countNo - 1;
			count.innerText = a.toLocaleString();
			follow.innerText = "follow"
			follow.classList.remove("counts")
		} else {
			let b = countNo + 1;
			count.innerText = b.toLocaleString();
			follow.innerText = "following"
			follow.classList.add("counts")
		}

	}














