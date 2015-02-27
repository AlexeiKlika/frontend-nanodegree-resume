var bio = {
	"name": "Alexei",
	"role": "Web Developer",
	"phone": "777-777-7777",
	"email": "fakeymcfakerson@yahoo.com",
	"picture_url": "https://lh6.googleusercontent.com/-j4mAvBrzA3s/UWxLaJqNpMI/AAAAAAAAAB0/6TLHY-IgfPk/s622-no/gavatar.png",
	"welcome_message": "Thanks for stopping by! Feel free to look around.",
	"skills" : ["HTML","Javascript","Smiling"]
};

var projects = [
	{
		"title": "CW website launch",
		"dates": "March 2011 - May 2012",
		"description": "Customization magento frontend, and implementing custom php functionality",
		"images":
			[
				"https://lh6.googleusercontent.com/-6xy-pXU5u5Q/AAAAAAAAAAI/AAAAAAAAAAA/IGguq5yDy1I/photo.jpg",
				"http://38.media.tumblr.com/avatar_497c78dc767d_128.png",
				"https://38.media.tumblr.com/avatar_ef5a40c11ea9_128.png"
			]
	},
	{
		"title": "Dog Sitter",
		"dates": "January 2002 - December 2013",
		"description": "#passion",
		"images": [
			"https://lh4.googleusercontent.com/-nW1hre_D5Yc/T2JgV1xu4RI/AAAAAAAAAFU/ye46tbXepVs/w800-h800/very-cute-dog-background-1600x1200-1007067.jpg",
			"http://www.lovethispic.com/uploaded_images/37623-Cute-Dog.jpg"
		]
	}
];

var work = [
	{
		"employer": "CTA",
		"title": "Marketing Assistant",
		"location": "Seattle",
		"dates":"June 2019 - October 2022",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rerum culpa eos nobis repudiandae nisi quis, ex animi officia quisquam voluptates recusandae esse obcaecati officiis accusantium consequuntur qui. Recusandae, dolorem!",
		"images":["http://www.myofficesystems.com/wp-content/gallery/desks-workstations/flexi-1-original-resolution.jpg","http://www.oecoffice.com/images/home-furniture.jpg"]

	},
	{
		"employer": "CW",
		"title": "Frontend Web Designer",
		"location": "Denmark",
		"dates":"Then-Current",
		"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste blanditiis cupiditate culpa temporibus minus explicabo neque odio aperiam eaque iure!",
		"images":["http://www.office-furniture-direct2u.co.uk/media/catalog/category/shropshire-office-desk_1.jpg","http://static.dezeen.com/uploads/2008/08/engine-offices-by-jump-studios-engine_24_low.jpg"]

	}

];

var education = [
	{
		"name": "YUI",
		"location": "Jersey",
		"degree": "none",
		"majors": ["Tom Foolery"],
		"dates": "A long time ago",
		"url": "http://www.yale.edu/"
	}
]



// Insert Name and Role

$('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%',bio.name));

// Insert contact info

$('#topContacts').append(HTMLmobile.replace('%data%',bio.phone));
$('#topContacts').append(HTMLemail.replace('%data%',bio.email));

// Insert bio pic and bio text
$('#header').append(HTMLbioPic.replace('%data%',bio.picture_url));
$('#header').append(HTMLWelcomeMsg.replace('%data%',bio.welcome_message));



if (bio.skills.length>0) {
	$('#header').append(HTMLskillsStart);
	for (i in bio.skills) {
		$('#skills').append(HTMLskills.replace("%data%",bio.skills[i]));
	}
}

for(i in work) {
	$('#workExperience').append(HTMLworkStart);
	var formattedEmployerTitle =
		HTMLworkEmployer.replace('%data%',work[i].employer) +
		HTMLworkTitle.replace('%data%',work[i].title);
	$('.work-entry:last').append(HTMLworkEmployer.replace('%data%',work[i].employer));
	$('.work-entry:last').append(HTMLworkTitle.replace('%data%',work[i].title));
	$('.work-entry:last').append(HTMLworkLocation.replace('%data%',work[i].location));
	$('.work-entry:last').append(HTMLworkDates.replace('%data%',work[i].dates));
	$('.work-entry:last').append(HTMLworkDescription.replace('%data%',work[i].description));
	//$('.work-entry:last').append(formattedEmployerTitle);
}

