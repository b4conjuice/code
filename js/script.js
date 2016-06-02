var wordCount = 25;
var words = [];
var indexArray = []

function getRandom(limit) {
	if (limit == undefined)
		limit = 10;
	return Math.floor(Math.random() * limit);
}

function init() {

	var random = getRandom();
	var blues = [];
	var reds = [];
	var indexArr = indexArray;
	var blue = 8;
	var red = 8;

	for (var i = 0; i < 25; i++) {
		indexArray[i] = i;
		random = getRandom(wordList.length)
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
			boardFeed += '<div class="word blue">' + value + '</div>';
		else if (reds.indexOf(index) > 0)
			boardFeed += '<div class="word red">' + value + '</div>';
		else if (index == black)
			boardFeed += '<div class="word black">' + value + '</div>';
		else
			boardFeed += '<div class="word">' + value + '</div>';
	});
	$('#board').html(boardFeed);
}

function start() {
	

	$.each(blues, function(index, value) {

	})

}

$(document).ready(function() {
	init();
	//start();
});

var wordList = [
	'africa',
	'agent',
	'air',
	'alien',
	'alps',
	'amazon',
	'ambulance',
	'america',
	'angel',
	'antarctica',
	'apple',
	'arm',
	'atlantis',
	'australia',
	'aztec',
	'back',
	'ball',
	'band',
	'bank',
	'bar',
	'bark',
	'bat',
	'battery',
	'beach',
	'bear',
	'beat',
	'bed',
	'beijing',
	'bell',
	'belt',
	'berlin',
	'bermuda',
	'berry',
	'bill',
	'block',
	'board',
	'bolt',
	'bomb',
	'bond',	
	'boom',
	'boot',
	'bottle',
	'bow',
	'box',
	'bridge',
	'brush',
	'buck',
	'buffalo',
	'bug',
	'bugle',
	'button',
	'calf',
	'canada',
	'cap',
	'capital',
	'car',
	'card',
	'carrot',
	'casino',
	'cast',
	'cat',
	'cell',
	'centaur',
	'center',
	'chair',
	'change',
	'charge',
	'check',
	'chest',
	'chick',
	'china',
	'chocolate',
	'church',
	'circle',
	'cliff',
	'cloak',
	'club',
	'code',
	'cold',
	'comic',
	'compound',
	'concert',
	'conductor',
	'contract',
	'cook',
	'copper',
	'cotton',
	'court',
	'cover',
	'crane',
	'crash',
	'cricket',
	'cross',
	'crown',
	'cycle',
	'czech',
	'dance',
	'date',
	'day',
	'death',
	'deck',
	'degree',
	'diamond',
	'dice',
	'dinosaur',
	'disease',
	'doctor',
	'dog',
	'draft',
	'dragon',
	'dress',
	'drill',
	'drop',
	'duck',
	'dwarf',
	'eagle',
	'egypt',
	'embassy',
	'engine',
	'england',
	'europe',
	'eye',
	'face',
	'fair',
	'fall',
	'fan',
	'fence',
	'field',
	'fighter',
	'figure',
	'file',
	'film'			



];