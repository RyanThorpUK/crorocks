window.scrollTo(0, 0);

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;
var hero = document.getElementById("hero");
// hero.style.height = viewportHeight+'px';
gsap.registerPlugin(ScrollTrigger) 

		document.addEventListener('DOMContentLoaded', (event) => {

			//SECTION 3 Animation
			var tl = gsap.timeline({
				scrollTrigger: {
					once: true,
					trigger: ".laptop",
					start:"center 70%",
				} 
			});
			//Round background grapchic behing laptop floating animation
			tl.to(".background_circle",{
				boxShadow:'inset -40px 0px 5px -40px rgba(240,57,140,1)',
				y:0,
				duration:.1,
			})
			tl.to(".background_circle",{
				boxShadow:'inset -30px -10px 10px -30px rgba(240,57,140,1)',
				y:0,
				duration:.1,
			})
			tl.to(".background_circle",{
				boxShadow:'inset -20px -20px 20px -30px rgba(240,57,140,1)',
				y:0,
				duration:.1,
			})
			tl.to(".background_circle",{
				boxShadow:'inset -10px -30px 30px -30px rgba(240,57,140,.6)',
				y:0,
				duration:.1,
			})
			tl.to(".background_circle",{
				boxShadow:'inset 0px -40px 40px -30px rgba(240,57,140,.4)',
				y:0,
				duration:.1,
			})
			tl.from(".laptop",{
				x:-400,
				opacity:0,
				duration:1.5,
				delay: .4,
				ease: "power4.out",
			});
			tl.from(".note",{
				scale:0,
				stagger: .1,
				opacity:0,
				delay:-.6,
				duration: 1.2,
				ease: "elastic.out(1,0.5)",
			});

			tl.to("#section3 .box1 .path", {
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:1,
				delay:-1,
				stagger: .3,
				ease: "power4.inOut",
			});
			tl.to("#section3 .box2 .path", {
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:1,
				delay:-1,
				stagger: .3,
				ease: "power4.inOut",
			});
			tl.to("#section3 .box3 .path", {
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:1,
				stagger: .3,
				delay:-1,
				ease: "power4.inOut",
			});
			tl.to("#section3 .box4 .path", {
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:1,
				stagger: .3,
				delay:-1,
				ease: "power4.inOut",
			});


			//SECTION 5 Comments
			//Comments

			gsap.from(".comment_wrapper:first-child",{
				scrollTrigger: {
					trigger: ".comment_wrapper",
					start:"top 80%",
					end: '+=800px',
					scrub:2,
					once: true,
				},
				x:500,

			});
			
			gsap.from(".comment_wrapper:first-child .col",{
				scrollTrigger: {
					trigger: ".comment_wrapper",
					start:"top 80%",
					end: '+=800px',
					scrub:2,
					once: true,

				},
				x:100,
				stagger: 0.1,
				opacity:0,
			});

			gsap.from(".comment_wrapper:last-child",{
				scrollTrigger: {
					trigger: ".comment_wrapper",
					start:"top 80%",
					end: '+=800px',
					scrub:2,
					once: true,
				},
				x:-500,
			});
			
			gsap.from(".comment_wrapper:last-child .col",{
				scrollTrigger: {
					trigger: ".comment_wrapper",
					start:"top 80%",
					end: '+=800px',
					scrub:2,
					once: true,

				},
				x:-100,
				stagger: -0.1,
				opacity:0,
			});


			if(viewportWidth < 1000){

				//Round background grapchic floating animation

			gsap.to(".round_graphic",{
				scrollTrigger: {
					start:"top top",
					end: '+=300px',
					scrub:1,
				},
				y:-100,
				opacity:0,

			});
			//SECTION 4 Animation
			//A and B lines

			var tl2 = gsap.timeline({
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 40%",
					end: '+=100px',
				} 
			});		

			//Mobile slide from side
			tl2.from(".phone_image img",{
				y:50,
				opacity:0,
				stagger: .2,
				duration: 1.3,
				ease: "elastic.out(1,0.5)",
			});
			tl2.from("#Group_881, #Group_977",{
				scale: 0,
				transformOrigin: 'center',
				duration:1,
				ease: "elastic.out(1,0.3)",
			})

			gsap.from("#Ellipse_102",{
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 80%",
					end: '+=400px',
				},
				scale: 0,
				transformOrigin: 'center',
				duration:2,
				ease: "elastic.out(1,0.3)",
			})

			var tl3 = gsap.timeline({
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 60%",
					end: '+=400px',
				} 
			});
			
			tl3.to("#Path_164, #Path_165",{
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:2,
				ease: "power4.inOut",
			})

			tl3.from("#Line_91, #Line_92, #Line_89, #Line_90",{
				scale: 0,
				transformOrigin: 'center',
				duration:.2,

			})


				gsap.to("#hero_cases_wrapper .col:nth-child(1)",{
					scrollTrigger: {
						start:"top top",
						end: '+=600px',
						scrub:1,
					},
					y:-200,
					opacity:0,

				});
				gsap.to("#hero_cases_wrapper .col:nth-child(2)",{
					scrollTrigger: {
						start:"top top",
						end: '+=600px',
						scrub:1,
					},
					y:-400,
					opacity:0,

				});
				gsap.to("#hero_cases_wrapper .col:nth-child(3)",{
					scrollTrigger: {
						start:"top top",
						end: '+=600px',
						scrub:1,
					},
					y:-600,
					opacity:0,

				});

				gsap.from("#hero_cases_wrapper .col",{
					//scrollTrigger: "#section_5 .col",
					y:1000,
					opacity:0,
					duration:1.5,
					stagger: .2,
				});

			}


			if(viewportWidth > 1000){	
			
			//SECTION 4 Animation
			//A and B lines

			var tl2 = gsap.timeline({
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 40%",
					end: '+=100px',
				} 
			});		

			//Mobile slide from side
			tl2.from(".phone_image img",{
				y:200,
				opacity:0,
				stagger: .2,
				duration: 1.3,
				ease: "elastic.out(1,0.5)",
			});
			tl2.from("#Group_881, #Group_977",{
				scale: 0,
				transformOrigin: 'center',
				duration:1,
				ease: "elastic.out(1,0.3)",
			})

			gsap.from("#Ellipse_102",{
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 80%",
					end: '+=400px',
				},
				scale: 0,
				transformOrigin: 'center',
				duration:2,
				ease: "elastic.out(1,0.3)",
			})

			var tl3 = gsap.timeline({
				scrollTrigger: {
					once: true,
					trigger: "#Ellipse_102",
					start:"top 60%",
					end: '+=400px',
				} 
			});
			
			tl3.to("#Path_164, #Path_165",{
				strokeDasharray:1000,
				strokeDashoffset:0,
				duration:2,
				ease: "power4.inOut",
			})

			tl3.from("#Line_91, #Line_92, #Line_89, #Line_90",{
				scale: 0,
				transformOrigin: 'center',
				duration:.2,

			})

			//Round background grapchic floating animation

			gsap.to(".round_graphic",{
				scrollTrigger: {
					start:"top top",
					end: '+=1000px',
					scrub:1,
				},
				y:-300,
				opacity:0,

			});

			//background blur gradient animationc floating animation
			gsap.to("#section4 .bg_gradient",{
				scrollTrigger: {
					start:"center center",
					end: '+=700px',
					scrub:0,
					trigger: "#section4 .bg_gradient",
				},
				y:500,

			});

			//background blur gradient animationc floating animation
			gsap.to("#hero .bg_gradient",{
				scrollTrigger: {
					start:"top top",
					end: '+=1000px',
					scrub:0,
				},
				y:500,

			});

			gsap.to("#hero_cases_wrapper .col:nth-child(1)",{
				scrollTrigger: {
					start:"top top",
					end: '+=1200px',
					scrub:1,
				},
				y:500,
				opacity:0,

			});
			gsap.to("#hero_cases_wrapper .col:nth-child(2)",{
				scrollTrigger: {
					start:"top top",
					end: '+=1200px',
					scrub:1,
				},
				y:-500,
				opacity:0,

			});
			gsap.to("#hero_cases_wrapper .col:nth-child(3)",{
				scrollTrigger: {
					start:"top top",
					end: '+=1200px',
					scrub:1,
				},
				y:500,
				opacity:0,

			});

			gsap.from("#hero_cases_wrapper .col:nth-child(1)",{
				//scrollTrigger: "#section_5 .col",
				y:1000,
				opacity:0,
				duration:1.5,
			});
			gsap.from("#hero_cases_wrapper .col:nth-child(2)",{
				y:-1000,
				opacity:0,
				duration:1.5,
			});
			gsap.from("#hero_cases_wrapper .col:nth-child(3)",{
				y:1000,
				opacity:0,
				duration:1.5,
			});
	}
});