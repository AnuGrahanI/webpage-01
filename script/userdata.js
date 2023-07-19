//js

let getUrl = window.location.href;

if (getUrl.includes("profile.html")) {
	let local = localStorage.getItem("islogin");
	if (!local) {
		window.location.replace("login.html");
		//localStorage.removeItem("userId");
		// localStorage.removeItem("usereditinputs");
		localStorage.clear();
	}
}
if (getUrl.includes("index.html")) {
	let local = localStorage.getItem("islogin");
	if (!local) {
		 window.location.replace("login.html")
		// localStorage.removeItem("userId");
		// localStorage.removeItem("usereditinputs");
		localStorage.clear();
	}
}
let userData = [
    { id: 111, firstName: "Anu", lastname: "Grahan", mobile: "8124311701", gender: "male", role: "Front End trainee", address: { state: "Tamil Nadu", city: "cuddalore", country: "india" }, email: "anu@gmail.com", userimg: "images/userImg/anu.jpg", banner: 'url("images/bannar/anubaner.JPEG")' },
    { id: 222, firstName: "Akash", lastname: "Anbu", mobile: "8667370864", gender: "male", role: "Front End trainee", address: { state: "Tamil Nadu", city: "thanjai", country: "india" }, email: "akash@gmail.com", userimg: "images/userImg/akash.jpg", banner: 'url("images/baner/akashbanner.jpg")' },
    { id: 333, firstName: "Dhanush", lastname: "kumar", mobile: "7358213126", gender: "male", experiance: 2, role: "Front End trainee", address: { state: "Tamil Nadu", city: "thanjai", country: "india" }, email: "dhanush@gmail.com", userimg: "images/userImg/dhanush.jpeg", banner: "images/baner/dhanushbanner.jpg" }
  ];

  let userSchool = [
    { id: 111, college: "Anna University", course: "B.A tamil", acadamicyear: "2019-2021" },
    { id: 222, college: "Akash palayboys University", course: "m.phil", acadamicyear: "2009-2012" },
    { id: 333, college: "Sastra University", course: "B.C.A", acadamicyear: "2021-2024" }
  ];

  let userExperience = [
    { id: 111, role: 'FrontEnd Trainee', Employmenttype: '', Company: 'fabvey', location: 'Chennai TamilNadu India contect info', skills: ['Node.js', 'HTML5', 'Cascading Style Sheet (CSS)', 'JavaScript', 'Angular', 'WorldPress'] },
    { id: 222, role: 'BackEnd Trainee', Employmenttype: '', Company: 'Greens', location: 'Chennai TamilNadu India contect info', skills: ['Node.js', 'MANGO', 'Phython', 'Java', 'Angular', 'WorldPress'] },
    { id: 333, role: 'UX UI _ DEVELOPER', Employmenttype: '', Company: 'Greens', location: 'Chennai TamilNadu India contect info', skills: ['photo', 'MANGO', 'Phython', 'Java', 'Angular', 'WorldPress'] }
  ];

  let postitem = [
    { id: 111, caption: 'Anu Emmanuel is an American actress of Indian descent who primarily works in Telugu films along with Tamil films. After working as a child artist in Swapna Sanchari, Emmanuel made her film debut with Malayalam film Action Hero Biju', posterimg: 'https://w0.peakpx.com/wallpaper/605/250/HD-wallpaper-anu-emmanuel-actress-anu-malayalam.jpg' },
    { id: 222, caption: 'Namitha Pramod is an Indian actress who appears mainly in Malayalam films She made her acting debut in the Malayalam film Traffic', posterimg: 'https://static.toiimg.com/thumb/msid-100456579,imgsize-59384,width-400,resizemode-4/100456579.jpg' },
    { id: 333, caption: 'Namitha Pramod is an Indguibuydv79t78t97tigss who appears mainly in Malayalam films She made her acting debut in the Malayalam film Traffic', posterimg: 'https://static.toiimg.com/thumb/msid-100456579,imgsize-59384,width-400,resizemode-4/100456579.jpg' }
  ];

  // Get user ID from local storage
  let userId = parseInt(localStorage.getItem("userId"));

  // Find user details and userSchool - user ID
  let userdetails = userData.find(user => user.id === userId);
  let userSchools = userSchool.find(user => user.id === userId);
  let userExperiences = userExperience.find(user => user.id === userId);
  let userpost = postitem.find(user => user.id === userId);

  // Post
  if (getUrl.includes("index.html")) {
    function addNewPost() {
      let captionInput = document.getElementById('postCaptionInput');
      let caption = captionInput.value;
	  let selectedImage = document.getElementsByClassName('selected-img')[0];
	  let imageURL = selectedImage.src;

      let newpost = {
        id: userId,
        caption: caption,
         posterimg: imageURL
      };

      postitem.push(newpost);
      postload(postitem);

      // Clear the input field after adding the post
      captionInput.value = '';
	   selectedImage.src = '';
    }

    function postload(postobj) {
      let posts = document.getElementById('posts');
      posts.innerHTML = '';

      let setpost = postobj.map(function (item, index) {
        let findUser = userData.find(function (user) {
          return user.id === item.id;
        });

        let userpost = postitem.find(user => user.id === item.id); // Retrieve the user post within the map function

        return `<div class="others-post">
            <div class="flex-container center ohterpost-det">
              <div class="poster-dp flex-item-2">
                <img src="${findUser.userimg}" class="dpimgs"/>
              </div>
              <div class="poster-text flex-item-9">
                <p><a href="#" class="admin_name">${findUser.firstName} ${findUser.lastname}</a></p>
                <p><span class="poster-folowers">3,358</span>followers</p>
                <p><time>1h<i class="fa fa-circle" aria-hidden="true"></i></time><i class="fa fa-globe"
                  aria-hidden="true"></i></p>
              </div>
              <span class="poster-det flex-item-1"><i class="fa fa-ellipsis-h"
                aria-hidden="true"></i></span>
            </div>
            <div class="poster-caption">
              <p style="line-height: 25px; margin: 0 10px" class="poster-caption-one">${item.caption}</p>
              <span><i class="fa fa-ellipsis-h" aria-hidden="true"></i>seemore</span>
            </div>
            <div class="poster-object">
              <img src="${item.posterimg}" class="postimgone"/>
            </div>
            <div class="users-react flex-container around">
              <button class="like-btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>like</button>
              <button class="like-btn"><i class="fa fa-commenting-o" aria-hidden="true"></i>Comment</button>
              <button class="like-btn"><i class="fa fa-retweet" aria-hidden="true"></i>Repost</button>
              <button class="like-btn"><i class="fa fa-paper-plane" aria-hidden="true"></i>Send</button>
            </div>
          </div>`;
      }).join('');

      posts.innerHTML = setpost;
    }

    window.addEventListener('load', () => {
      postload(postitem);
    });

    let postbtn = document.getElementById('postBtn');

    postbtn.addEventListener('click', addNewPost);
	 // Get the image button element
	 const imageButton = document.getElementById('imageButton');

	 // Add event listener for image button click
	 imageButton.addEventListener('click', function () {
	   // Create a file input element
	   const fileInput = document.createElement('input');
	   fileInput.type = 'file';
	   fileInput.accept = 'image/*';
	   fileInput.style.display = 'none';
   
	   // Add event listener for file selection
	   fileInput.addEventListener('change', function (event) {
		 const file = event.target.files[0]; // Get the selected file
   
		 if (file) {
		   const reader = new FileReader(); // Create a FileReader object
   
		   reader.addEventListener('load', function (event) {
			 const imageURL = event.target.result; // Get the data URL of the selected file
   
			 const selectedImage = document.querySelector('.selected-img'); // Get the selected image element
			 selectedImage.src = imageURL; // Set the src attribute to the selected image URL
		   });
   
		   reader.readAsDataURL(file); // Read the file as data URL
		 }
	   });
   
	   // Trigger file input click event
	   fileInput.click();
	 });
  }

 
  
	

	if (getUrl.includes("profile.html")) {
	const editproform = document.getElementById("edityourprofile");
	editproform.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(this);
		const dataObject = {};
		formData.forEach((value, key) => {	
			dataObject[key] = value;
		});
		console.log(dataObject);
		localStorage.setItem("usereditinputs", JSON.stringify(dataObject));
	});

		const editSchform = document.getElementById("edityourcollege");
		editSchform.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(this);
		const dataObject = {};
		formData.forEach((value, key) => {
			dataObject[key] = value;
		});
		console.log(dataObject);
		localStorage.setItem("usereditSchoolinputs", JSON.stringify(dataObject));
		});


		const editexp = document.getElementById("edityourexperience");
		editexp.addEventListener("submit", function(event) {
		event.preventDefault();
		const formData = new FormData(this);
		const dataObject = {};
		formData.forEach((value, key) => {
			dataObject[key] = value;
		});
		console.log(dataObject);
		localStorage.setItem("edityourexperience", JSON.stringify(dataObject));
		
		});
		

}
	const myObject = JSON.parse(localStorage.getItem('usereditinputs'));
	console.log(myObject);
	if (myObject) {
		// settng edited value
		if (myObject['fname']) {
			userdetails.firstName = myObject['fname'];
		}
		if (myObject['lname']) {
			userdetails.lastname = myObject['lname'];
		}
		if (myObject['headline']) {
			userdetails.role = myObject['headline'];
		}
		if (myObject['placeity']) {
			userdetails.address.city = myObject['placeity'];
		}
		if (myObject['placestate']) {
			userdetails.address.state = myObject['placestate'];
		}
		if (myObject['Country']) {
			userdetails.address.country = myObject['Country'];
		}
	}
	const mySclobj = JSON.parse(localStorage.getItem('usereditSchoolinputs'));
		console.log(mySclobj)
	if (mySclobj) {
		if (mySclobj['School']) {
		  userSchools.college = mySclobj['School'];
		}
		if (mySclobj['Degree']) {
		  userSchools.course = mySclobj['Degree'];
		}
		if ((mySclobj['startyear']) || (mySclobj['endyear'])) {
			userSchools.acadamicyear =` ${mySclobj['startyear']} - ${mySclobj['endyear']}`;
		  }
		  
	  }
	  
	  const myExpObj=JSON.parse(localStorage.getItem('edityourexperience'))
	  console.log(myExpObj)
	  if(myExpObj){
		if(myExpObj['roleNames']){
			userExperiences.role=myExpObj['roleNames'];
		}
		if(myExpObj['emptype']){
			userExperiences.Employmenttype=myExpObj['emptype'];
		}
		if(myExpObj['companynames']){
			userExperiences.Company=myExpObj['companynames'];
		  };
		if(myExpObj['explocation']){
			userExperiences.location=myExpObj['explocation']
		}
	  }
	  
	
	//User home page 
	if (getUrl.includes("index.html")) {
		if (userdetails) {
			const adminname = document.getElementsByClassName("admin_name");
			for (let name of adminname) {
				name.innerHTML = `${userdetails.firstName} ${userdetails.lastname}`;
			}
			const userrole = document.getElementsByClassName("userrole");
			for (let role of userrole) {
				role.innerHTML =  userdetails.role;
			}
			const dpimgs = document.getElementsByClassName("dpimgs")
			for (let img of dpimgs){
				img.src = userdetails.userimg;
			}
			let user_banner = document.getElementsByClassName("bg-img");
			for (const baner of user_banner) {
				baner.style.backgroundImage = userdetails.banner;
			}
		}
		
	}
	
	//User profile
	if (getUrl.includes("profile.html")) {
		if (userdetails) {
			///input value show
			document.getElementById("editFname").value = userdetails.firstName;
			document.getElementById("editLname").value = userdetails.lastname;
			document.getElementById("headline").value = userdetails.role;
			document.getElementById('placeCoureg').value = userdetails.address.country;
			document.getElementById('placestate').value = userdetails.address.state;
			document.getElementById('placeity').value = userdetails.address.city;
			
			let user_banner = document.getElementsByClassName("user_banner");
			for (const baner of user_banner) {
				baner.style.backgroundImage = userdetails.banner;
			}
			
			let imgs = document.getElementsByClassName("dpimg");
			for (let k = 0; k < imgs.length; k++) {
				imgs[k].src = userdetails.userimg;
			}
			
			let name = document.getElementsByClassName("yoursName");
			for (let i = 0; i < name.length; i++) {
				name[i].innerHTML = `${userdetails.firstName} ${userdetails.lastname}`;
			}
			
			let roles = document.getElementsByClassName("user-role");
			for (let j = 0; j < roles.length; j++) {
				
				roles[j].innerHTML = userdetails.role;
			}
			let userHome = document.getElementById("u-town");
			userHome.innerHTML = userdetails.address.city;
			let userState = document.getElementById("u-state");
			userState.innerHTML = userdetails.address.state;
			let userCoun = document.getElementById("u-country");
			userCoun.innerHTML = userdetails.address.country;
	
			if (userSchools) {
				let college = document.getElementsByClassName("user_col");
				college[0].innerHTML = userSchools.college;
				let depot = document.getElementsByClassName("edu-dep");
				depot[0].innerHTML = userSchools.course;
				let acadmic = document.getElementsByClassName("acadmic");
				acadmic[0].innerHTML = userSchools.acadamicyear;
			  }
			if(userExperiences){
				var d=document;
				let role=d.getElementsByClassName('exprole');
				role[0].innerHTML=userExperiences.role;
				let company=d.getElementsByClassName('expcomp');
				company[0].innerHTML=userExperiences.Company;
				let emptype=d.getElementsByClassName('expemptype');
				emptype.innerHTML=userExperiences.Employmenttype;
				let locations= document.getElementsByClassName('u-town')
				locations[0].innerHTML=userExperience.location;
				

			}
		}
		
	}




