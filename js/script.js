var wordCount = 25;
var words = [];
var indexArray = [];

function getRandom(limit) {
	if (limit == undefined)
		limit = 10;
	return Math.floor(Math.random() * limit);
}

function getRoom() {
	
}

function init() {
	var seed = '';
	if (window.location.hash) {
		seed = window.location.hash;
	} else {
		seed = wordList[getRandom(wordList.length)];
		window.location.hash = seed.replace(/ /g, '').toLowerCase();
	}
	Math.seedrandom(seed);

	var random = getRandom();
	var blues = [];
	var reds = [];
	var indexArr = indexArray;
	var blue = 8;
	var red = 8;

	for (var i = 0; i < 25; i++) {
		indexArray[i] = i;
		random = getRandom(wordList.length);
		words[i] = wordList[random];
		wordList.splice(random, 1);
	}

	if (random % 2 == 1) {
		red = 7;
	}
	else {
		blue = 7;
	}

	for (var i = 0; i < blue; i++) {
		random = getRandom(indexArr.length);
		blues[i] = indexArr[random];
		indexArr.splice(random, 1);
	}
	for (var i = 0; i < red; i++) {
		random = getRandom(indexArr.length);
		reds[i] = indexArr[random];
		indexArr.splice(random, 1);
	}
	random = getRandom(indexArr.length);
	var black = indexArr[random];
	console.log(blues);
	console.log(reds);
	console.log(black);

	var boardFeed = '';
	$.each(words, function(index, value) {
		if (blues.indexOf(index) > 0)
			boardFeed += '<div class="word blue" data-word="' + value + '">' + value + '</div>';
		else if (reds.indexOf(index) > 0)
			boardFeed += '<div class="word red" data-word="' + value + '">' + value + '</div>';
		else if (index == black)
			boardFeed += '<div class="word black" data-word="' + value + '">' + value + '</div>';
		else
			boardFeed += '<div class="word" data-word="' + value + '">' + value + '</div>';
	});
	$('#board').html(boardFeed);

	//start();
	$('#toggle').click(function() {
		$('#board').toggleClass('hideColors');
	});
	$('#board').addClass('hideColors');
	$('#content').css('opacity', 1);

	//testing
	$('#board').removeClass('hideColors');
	$('.word').removeClass('blue red black').addClass('unselected');
	$('.word').click(function() {
		var $word = $(this);
		var word = $word.text();
		$('#menu').toggleClass('active inactive');
		$('#board').toggleClass('active inactive');
		$('#menu #selected-word').text(word);
	});
	$('#menu #menu-buttons button').click(function() {
		$('#menu').toggleClass('active inactive');
		$('#board').toggleClass('active inactive');
		var $button = $(this);
		var word = $('#menu #selected-word').text();
		console.log(word);
		var $word = $('.word:contains("' + word + '")');
		//$word.remove('blue red neutral black');
		if ($button.hasClass('blue'))
			$word.removeClass('unselected').addClass('blue');
		else if ($button.hasClass('red'))
			$word.removeClass('unselected').addClass('red');
		else if ($button.hasClass('neutral'))
			$word.removeClass('unselected').addClass('neutral');
		else if ($button.hasClass('black'))
			$word.removeClass('unselected').addClass('black');
		else
			console.log('error: invalid button');
		$word.off('click');

	})
	$('#selected-word').click(function() {
		$('#menu').toggleClass('active inactive');
		$('#board').toggleClass('active inactive');
	})
}

function start() {
	

	$.each(blues, function(index, value) {

	})

}

$(document).ready(function() {
	var i = document.getElementById("content");

	$('#go').click(function() {
		$('#splash').toggleClass('active inactive');
		$('#board').toggleClass('active inactive');
		// go full-screen
		// if (i.requestFullscreen) {
		// 	i.requestFullscreen();
		// } else if (i.webkitRequestFullscreen) {
		// 	i.webkitRequestFullscreen();
		// } else if (i.mozRequestFullScreen) {
		// 	i.mozRequestFullScreen();
		// } else if (i.msRequestFullscreen) {
		// 	i.msRequestFullscreen();
		// }
	})
	$(function() {
	    FastClick.attach(document.body);
	});
	init();
});

var wordList = [
	// 'africa',
	// 'agent',
	// 'air',
	// 'alien',
	// 'alps',
	// 'amazon',
	// 'ambulance',
	// 'america',
	// 'angel',
	// 'antarctica',
	// 'apple',
	// 'arm',
	// 'atlantis',
	// 'australia',
	// 'aztec',
	// 'back',
	// 'ball',
	// 'band',
	// 'bank',
	// 'bar',
	// 'bark',
	// 'bat',
	// 'battery',
	// 'beach',
	// 'bear',
	// 'beat',
	// 'bed',
	// 'beijing',
	// 'bell',
	// 'belt',
	// 'berlin',
	// 'bermuda',
	// 'berry',
	// 'bill',
	// 'block',
	// 'board',
	// 'bolt',
	// 'bomb',
	// 'bond',	
	// 'boom',
	// 'boot',
	// 'bottle',
	// 'bow',
	// 'box',
	// 'bridge',
	// 'brush',
	// 'buck',
	// 'buffalo',
	// 'bug',
	// 'bugle',
	// 'button',
	// 'calf',
	// 'canada',
	// 'cap',
	// 'capital',
	// 'car',
	// 'card',
	// 'carrot',
	// 'casino',
	// 'cast',
	// 'cat',
	// 'cell',
	// 'centaur',
	// 'center',
	// 'chair',
	// 'change',
	// 'charge',
	// 'check',
	// 'chest',
	// 'chick',
	// 'china',
	// 'chocolate',
	// 'church',
	// 'circle',
	// 'cliff',
	// 'cloak',
	// 'club',
	// 'code',
	// 'cold',
	// 'comic',
	// 'compound',
	// 'concert',
	// 'conductor',
	// 'contract',
	// 'cook',
	// 'copper',
	// 'cotton',
	// 'court',
	// 'cover',
	// 'crane',
	// 'crash',
	// 'cricket',
	// 'cross',
	// 'crown',
	// 'cycle',
	// 'czech',
	// 'dance',
	// 'date',
	// 'day',
	// 'death',
	// 'deck',
	// 'degree',
	// 'diamond',
	// 'dice',
	// 'dinosaur',
	// 'disease',
	// 'doctor',
	// 'dog',
	// 'draft',
	// 'dragon',
	// 'dress',
	// 'drill',
	// 'drop',
	// 'duck',
	// 'dwarf',
	// 'eagle',
	// 'egypt',
	// 'embassy',
	// 'engine',
	// 'england',
	// 'europe',
	// 'eye',
	// 'face',
	// 'fair',
	// 'fall',
	// 'fan',
	// 'fence',
	// 'field',
	// 'fighter',
	// 'figure',
	// 'file',
	// 'film'			
	'AFRICA',
	'AGENT',
	'AIR',
	'ALIEN',
	'ALPS',
	'AMAZON',
	'AMBULANCE',
	'AMERICA',
	'ANGEL',
	'ANTARCTICA',
	'APPLE',
	'ARM',
	'ATLANTIS',
	'AUSTRALIA',
	'AZTEC',
	'BACK',
	'BALL',
	'BAND',
	'BANK',
	'BAR',
	'BARK',
	'BAT',
	'BATTERY',
	'BEACH',
	'BEAR',
	'BEAT',
	'BED',
	'BEIJING',
	'BELL',
	'BELT',
	'BERLIN',
	'BERMUDA',
	'BERRY',
	'BILL',
	'BLOCK',
	'BOARD',
	'BOLT',
	'BOMB',
	'BOND',
	'BOOM',
	'BOOT',
	'BOTTLE',
	'BOW',
	'BOX',
	'BRIDGE',
	'BRUSH',
	'BUCK',
	'BUFFALO',
	'BUG',
	'BUGLE',
	'BUTTON',
	'CALF',
	'CANADA',
	'CAP',
	'CAPITAL',
	'CAR',
	'CARD',
	'CARROT',
	'CASINO',
	'CAST',
	'CAT',
	'CELL',
	'CENTAUR',
	'CENTER',
	'CHAIR',
	'CHANGE',
	'CHARGE',
	'CHECK',
	'CHEST',
	'CHICK',
	'CHINA',
	'CHOCOLATE',
	'CHURCH',
	'CIRCLE',
	'CLIFF',
	'CLOAK',
	'CLUB',
	'CODE',
	'COLD',
	'COMIC',
	'COMPOUND',
	'CONCERT',
	'CONDUCTOR',
	'CONTRACT',
	'COOK',
	'COPPER',
	'COTTON',
	'COURT',
	'COVER',
	'CRANE',
	'CRASH',
	'CRICKET',
	'CROSS',
	'CROWN',
	'CYCLE',
	'CZECH',
	'DANCE',
	'DATE',
	'DAY',
	'DEATH',
	'DECK',
	'DEGREE',
	'DIAMOND',
	'DICE',
	'DINOSAUR',
	'DISEASE',
	'DOCTOR',
	'DOG',
	'DRAFT',
	'DRAGON',
	'DRESS',
	'DRILL',
	'DROP',
	'DUCK',
	'DWARF',
	'EAGLE',
	'EGYPT',
	'EMBASSY',
	'ENGINE',
	'ENGLAND',
	'EUROPE',
	'EYE',
	'FACE',
	'FAIR',
	'FALL',
	'FAN',
	'FENCE',
	'FIELD',
	'FIGHTER',
	'FIGURE',
	'FILE',
	'FILM',
	'FIRE',
	'FISH',
	'FLUTE',
	'FLY',
	'FOOT',
	'FORCE',
	'FOREST',
	'FORK',
	'FRANCE',
	'GAME',
	'GAS',
	'GENIUS',
	'GERMANY',
	'GHOST',
	'GIANT',
	'GLASS',
	'GLOVE',
	'GOLD',
	'GRACE',
	'GRASS',
	'GREECE',
	'GREEN',
	'GROUND',
	'HAM',
	'HAND',
	'HAWK',
	'HEAD',
	'HEART',
	'HELICOPTER',
	'HIMALAYAS',
	'HOLE',
	'HOLLYWOOD',
	'HONEY',
	'HOOD',
	'HOOK',
	'HORN',
	'HORSE',
	'HORSESHOE',
	'HOSPITAL',
	'HOTEL',
	'ICE',
	'ICE CREAM',
	'INDIA',
	'IRON',
	'IVORY',
	'JACK',
	'JAM',
	'JET',
	'JUPITER',
	'KANGAROO',
	'KETCHUP',
	'KEY',
	'KID',
	'KING',
	'KIWI',
	'KNIFE',
	'KNIGHT',
	'LAB',
	'LAP',
	'LASER',
	'LAWYER',
	'LEAD',
	'LEMON',
	'LEPRECHAUN',
	'LIFE',
	'LIGHT',
	'LIMOUSINE',
	'LINE',
	'LINK',
	'LION',
	'LITTER',
	'LOCH NESS',
	'LOCK',
	'LOG',
	'LONDON',
	'LUCK',
	'MAIL',
	'MAMMOTH',
	'MAPLE',
	'MARBLE',
	'MARCH',
	'MASS',
	'MATCH',
	'MERCURY',
	'MEXICO',
	'MICROSCOPE',
	'MILLIONAIRE',
	'MINE',
	'MINT',
	'MISSILE',
	'MODEL',
	'MOLE',
	'MOON',
	'MOSCOW',
	'MOUNT',
	'MOUSE',
	'MOUTH',
	'MUG',
	'NAIL',
	'NEEDLE',
	'NET',
	'NEW YORK',
	'NIGHT',
	'NINJA',
	'NOTE',
	'NOVEL',
	'NURSE',
	'NUT',
	'OCTOPUS',
	'OIL',
	'OLIVE',
	'OLYMPUS',
	'OPERA',
	'ORANGE',
	'ORGAN',
	'PALM',
	'PAN',
	'PANTS',
	'PAPER',
	'PARACHUTE',
	'PARK',
	'PART',
	'PASS',
	'PASTE',
	'PENGUIN',
	'PHOENIX',
	'PIANO',
	'PIE',
	'PILOT',
	'PIN',
	'PIPE',
	'PIRATE',
	'PISTOL',
	'PIT',
	'PITCH',
	'PLANE',
	'PLASTIC',
	'PLATE',
	'PLATYPUS',
	'PLAY',
	'PLOT',
	'POINT',
	'POISON',
	'POLE',
	'POLICE',
	'POOL',
	'PORT',
	'POST',
	'POUND',
	'PRESS',
	'PRINCESS',
	'PUMPKIN',
	'PUPIL',
	'PYRAMID',
	'QUEEN',
	'RABBIT',
	'RACKET',
	'RAY',
	'REVOLUTION',
	'RING',
	'ROBIN',
	'ROBOT',
	'ROCK',
	'ROME',
	'ROOT',
	'ROSE',
	'ROULETTE',
	'ROUND',
	'ROW',
	'RULER',
	'SATELLITE',
	'SATURN',
	'SCALE',
	'SCHOOL',
	'SCIENTIST',
	'SCORPION',
	'SCREEN',
	'SCUBA DIVER',
	'SEAL',
	'SERVER',
	'SHADOW',
	'SHAKESPEARE',
	'SHARK',
	'SHIP',
	'SHOE',
	'SHOP',
	'SHOT',
	'SINK',
	'SKYSCRAPER',
	'SLIP',
	'SLUG',
	'SMUGGLER',
	'SNOW',
	'SNOWMAN',
	'SOCK',
	'SOLDIER',
	'SOUL',
	'SOUND',
	'SPACE',
	'SPELL',
	'SPIDER',
	'SPIKE',
	'SPINE',
	'SPOT',
	'SPRING',
	'SPY',
	'SQUARE',
	'STADIUM',
	'STAFF',
	'STAR',
	'STATE',
	'STICK',
	'STOCK',
	'STRAW',
	'STREAM',
	'STRIKE',
	'STRING',
	'SUB',
	'SUIT',
	'SUPERHERO',
	'SWING',
	'SWITCH',
	'TABLE',
	'TABLET',
	'TAG',
	'TAIL',
	'TAP',
	'TEACHER',
	'TELESCOPE',
	'TEMPLE',
	'THEATER',
	'THIEF',
	'THUMB',
	'TICK',
	'TIE',
	'TIME',
	'TOKYO',
	'TOOTH',
	'TORCH',
	'TOWER',
	'TRACK',
	'TRAIN',
	'TRIANGLE',
	'TRIP',
	'TRUNK',
	'TUBE',
	'TURKEY',
	'UNDERTAKER',
	'UNICORN',
	'VACUUM',
	'VAN',
	'VET',
	'WAKE',
	'WALL',
	'WAR',
	'WASHER',
	'WASHINGTON',
	'WATCH',
	'WATER',
	'WAVE',
	'WEB',
	'WELL',
	'WHALE',
	'WHIP',
	'WIND',
	'WITCH',
	'WORM',
	'YARD'
];