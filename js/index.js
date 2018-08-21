
const music = {
	backgroundMusic: document.getElementById('backgroundMusic'),
	classicMusic: document.getElementById('classic'),
	alligatorSounds: document.getElementById('alligatorSounds'),
	cruiseArrival: document.getElementById('cruiseArrival'),
	cruiseDeparture: document.getElementById('cruiseDeparture')
};


const setVolume = (song, volume) => {
	song.volume = volume;
}


const pause = (song) => {
	song.pause();
};

const initMusic = () => {
	pause(music.backgroundMusic);
	pause(music.classicMusic);
	pause(music.alligatorSounds);
	pause(music.cruiseArrival);
	pause(music.cruiseDeparture);
};

const playAudio = (song) => {
	setTimeout(() => {
		initMusic();
		song.play();
	}, 5000);
};


function init() {
	music.backgroundMusic.play();
	setTimeout(() => {
		music.cruiseDeparture.play();
	}, 3000);
}
init();



$(function () {
	const bullets = $('ul.nav a');
	$('ul.nav a').bind('click', function (event) {
		var $anchor = $(this);
		/*
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		*/
		$('html, body').stop().velocity({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, {
			duration: 11000,
			easing: 'linear'
		});

		event.preventDefault();
	});
});






