const refuses =
	["Не-а!", "Ну, нет.", "Не хочу!", "Не буду.", "И не уговаривай.",
	"Ну, может быть...", "Вру! Ни за что!",
	"По голове себе покликай!", "Что еще за настойчивость!?", "Никогда не сдаешься, да?", "Молодец.<br>Упорство и все такое...",
	"может поговорим... )"];
var refuses_index = -1;

function setNext(id, collection) {
	document.getElementById(id).innerHTML = collection[refuses_index = ++refuses_index % collection.length];
}