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
