export const WeatherImageMap: { [key: string]: string } = {
	lr: "LightRain.png",
	sn: "Snow.png",
	sl: "Sleet.png",
	h: "Hail.png",
	t: "Thunderstorm.png",
	hr: "HeavyRain.png",
	s: "Shower.png",
	hc: "HeavyCloud.png",
	lc: "LightCloud.png",
	c: "Clear.png",
};

export const WindDirectionMap: { [key: string]: string } = {
	N: "rotate(-45deg)",
	NNE: "rotate(0deg)",
	NE: "rotate(0deg)",
	ENE: "rotate(0deg)",
	E: "rotate(45deg)",
	ESE: "rotate(90deg)",
	SE: "rotate(90deg)",
	SSE: "rotate(90deg)",
	S: "rotate(135deg)",
	SSW: "rotate(-180deg)",
	SW: "rotate(-180deg)",
	WSW: "rotate(-180deg)",
	W: "rotate(-135deg)",
	WNW: "rotate(-90deg)",
	NW: "rotate(-90deg)",
	NNW: "rotate(-90deg)",
};

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const formatDate = (dateString: string): string => {
	let msec = Date.parse(dateString);
	const newRawDate = new Date(msec);
	const date = newRawDate.getDate();
	const day = newRawDate.getDay();
	const month = newRawDate.getMonth();

	return `${days[day]}, ${date} ${months[month]}`;
};
