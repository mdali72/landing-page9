function onpara()
	{
		document.getElementById('para').style.display ="block"
		document.getElementById('btnback').style.display ="block"
		document.getElementById('btnon').style.display ="none"
	}
	function back()
	{
		document.getElementById('para').style.display ="none"
		document.getElementById('btnback').style.display ="none"
		document.getElementById('btnon').style.display ="inline-block"
	}

	function onpara1()
	{
		document.getElementById('para1').style.display ="block"
		document.getElementById('btnback1').style.display ="block"
		document.getElementById('btnon1').style.display ="none"
	}
	function back1()
	{
		document.getElementById('para1').style.display ="none"
		document.getElementById('btnback1').style.display ="none"
		document.getElementById('btnon1').style.display ="inline-block"
	}

	function onpara2()
	{
		document.getElementById('para2').style.display ="block"
		document.getElementById('btnback2').style.display ="block"
		document.getElementById('btnon2').style.display ="none"
	}
	function back2()
	{
		document.getElementById('para2').style.display ="none"
		document.getElementById('btnback2').style.display ="none"
		document.getElementById('btnon2').style.display ="inline-block"
	}

	function onpara3()
	{
		document.getElementById('para3').style.display ="block"
		document.getElementById('btnback3').style.display ="block"
		document.getElementById('btnon3').style.display ="none"
	}
	function back3()
	{
		document.getElementById('para3').style.display ="none"
		document.getElementById('btnback3').style.display ="none"
		document.getElementById('btnon3').style.display ="inline-block"
	}
	function onpara4()
	{
		document.getElementById('para4').style.display ="block"
		document.getElementById('btnback4').style.display ="block"
		document.getElementById('btnon4').style.display ="none"
	}
	function back4()
	{
		document.getElementById('para4').style.display ="none"
		document.getElementById('btnback4').style.display ="none"
		document.getElementById('btnon4').style.display ="inline-block"
	}

	function onpara5()
	{
		document.getElementById('team1').style.display ="block"
		document.getElementById('btnback5').style.display =" block"
		document.getElementById('btnon5').style.display ="none"
	}
	function back5()
	{
		document.getElementById('team1').style.display ="none"
		document.getElementById('btnback5').style.display ="none"
		document.getElementById('btnon5').style.display ="inline-block"
	}
	 
	function signin()
	{
		window.location = "loginForm.html"
	}
	function signup()
	{
		window.location = "signUpForm.html"
	}
		 
	function enter()
	{
		window.location ="index1.html"
			form.style.display = 'none'
		
	}
	function close1()
	{
		window.location ="index.html"
		
	}	

	 	let form = document.getElementById('contact')
	 	let table1 = document.getElementById('table')
	 	let user = {id:0, name:"", email:"", number:"",address:"", city:"",code:"" };
		let users =[];
		let i =0;

		function submitform()
		{
			 
			form.style.display = 'none'
			table1.style.display = 'block'


			 


			user = {};
			i++;

			user.name = document.getElementById('name').value;
			user.email = document.getElementById('email').value;
			user.number = document.getElementById('number').value;
			user.address = document.getElementById('address').value;
			user.city = document.getElementById('city').value;
			user.code = document.getElementById('code').value;
			users.push(user)
			insettable()
		}
		

		function insettable()
		{
			let table = '';
			for(let u of users)
			{
				table += `<tr> <td>${u.name}</td> </tr>
							<tr> <td>${u.email}</td> </tr>
							<tr> <td>${u.number}</td> </tr>
							<tr> <td>${u.address}</td> </tr>
							<tr> <td>${u.city}</td>
							<tr> <td>${u.code}</td> </tr>
							 
							 
						  </tr>`

						  document.getElementById('tb').innerHTML = table;
			}
			 

		}
		 


ScrollReveal({ 
    reset: true,
    distance :"60px",  
    duration :2000,
    delay :400 ,
     easing:'ease-in-out'
 });
    ScrollReveal().reveal('.banner1 h1 ,.service2 h2' ,{   origin:'left',opacity: 0 });
    ScrollReveal().reveal('.service1,#team,.blog1,.contact2,.contact3', { opacity:0, scale:0.8 ,interval: 600  });
    ScrollReveal().reveal('.feature2,.feature4 img,.team1 h2,.blog2 h2' ,{   opacity: 0 });
    ScrollReveal().reveal('.feature1 img ,.feature3' ,{  origin:'top', opacity: 0 });



  