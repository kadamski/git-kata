function MenuCtrl($scope) {

	$scope.menus = [ {
		href : 'index.html',
		label : 'Start',
		submenus : [ {
			href : '#mission',
			label : 'Mission'
		}, {
			href : '#location',
			label : 'Time & Place',
		}, {
			href : '#agenda',
			label : 'Agenda',
		}, {
			href : '#sponsors',
			label : 'Sponsors',
		}/* TODO{ href : '#partners', label : 'Parters', } */
		, {
			href : '#mentors',
			label : 'Mentors',
		}, {
			href : '#organizers',
			label : 'Organizers',
		} ]
	}, {
		href : 'faq.html',
		label : 'FAQ'
	}, {
		href : 'registration.html',
		label : 'Registration'
	}, {
		href : 'agenda.html',
		label : 'Agenda'
	} /* TODO , { href : 'flyer.html', label : 'poster' } */
	, {
		href : 'reference.html',
		label : 'Reference'
	}, {
		href : 'contact.html',
		label : 'Contact'
	} ];
}