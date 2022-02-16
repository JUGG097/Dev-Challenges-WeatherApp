import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "./Styles/Flex";
import { BiCurrentLocation } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { StyledDayCardFlex } from "./Styles/DayCard.styled";
import DayWeatherCard from "./DayWeatherCard";
import WindStatus from "./WindStatus";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";
import AirPressureCard from "./AirPressureCard";
import {
	TodayWeatherData,
	OtherDayWeatherData,
	LocationAPIData,
} from "../Utils/Types";

import { WeatherImageMap } from "../Utils/Helper";

const MainPage: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [search, setSearch] = useState(false);
	const [location, setLocation] = useState("Helsinki");
	const [todayData, setTodayData] = useState<TodayWeatherData>({
		id: 0,
		weather_state_name: "",
		weather_state_abbr: "",
		wind_direction_compass: "",
		created: "",
		applicable_date: "",
		min_temp: 0,
		max_temp: 0,
		the_temp: 0,
		wind_speed: 0,
		wind_direction: 0,
		air_pressure: 0,
		humidity: 0,
		visibility: 0,
		predictability: 0,
	});
	const [otherDaysData, setOtherDaysData] = useState<OtherDayWeatherData>([]);

	const searchModalLaunch = () => {
		setSearch(true);
	};
	const searchModalClose = () => {
		setSearch(false);
	};

	const weatherDataRequest = (earthId: number) => {
		axios
			.get(
				`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${earthId}/`
			)
			.then((response) => {
				let data: OtherDayWeatherData =
					response.data.consolidated_weather;
				console.log(response.data.consolidated_weather);
				setTodayData(data[0]);
				setOtherDaysData(data.slice(1));
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		const weatherRequest = () => {
			axios
				.get(
					"https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/search",
					{
						params: {
							query: location,
						},
					}
				)
				.then((response) => {
					console.log(response);
					if (!(response.data[0] === undefined)) {
						let data: LocationAPIData = response.data[0];
						console.log(response.data[0]);
						weatherDataRequest(data.woeid);
					} else {
						console.log("I am not running");
					}
				})
				.catch(function (error) {
					console.log("I am not running");
				});
		};
		weatherRequest();
	}, [location]);

	return (
		<>
			<Flex>
				{!search ? (
					<div className="first-div">
						<div className="container text-center">
							<div className="row">
								<div className="col-8 my-auto">
									<div>
										<button onClick={searchModalLaunch}>
											Search for Places
										</button>
									</div>
								</div>
								<div className="col-4 my-auto">
									<div className="search-icon">
										<BiCurrentLocation />
									</div>
								</div>
							</div>

							{loading ? (
								<div className="text-center loading-div">
									Loading Weather Information
								</div>
							) : (
								<>
									<div className="row weather-image">
										<div className="col-12">
											<div>
												<img
													src={`./images/${
														WeatherImageMap[
															todayData
																.weather_state_abbr
														]
													}`}
													alt=""
												/>
											</div>
										</div>
									</div>
									<div className="row weather-value">
										<div className="col-12">
											<div>
												<p className="temp-value mb-5">
													{/* 15<span>&#176;C</span> */}
													{Math.round(
														todayData.the_temp
													)}
													<span>&#176;C</span>
												</p>
											</div>
											<div>
												{/* <p>Shower</p> */}
												<p>
													{
														todayData.weather_state_name
													}
												</p>
											</div>
										</div>
									</div>
									<div className="row other-value">
										<div className="col-12">
											<div>
												<p>Today . Fri, 5 Jun</p>
												<p>
													<span>
														<ImLocation2 />
													</span>{" "}
													{location}
												</p>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
					</div>
				) : (
					<div className="search-div">
						<p onClick={searchModalClose} className="close-btn">
							<AiOutlineCloseCircle />
						</p>

						<h1>Hi I am working</h1>
					</div>
				)}

				<div className="second-div">
					<div className="container">
						<div className="row temp-choice">
							<div className="col-12">
								<div className="">
									<span className="">&#176;C</span>
									<span className="active">&#176;F</span>
								</div>
							</div>
						</div>

						{loading ? (
							<div className="text-center loading-div">
								Loading Weather Information
							</div>
						) : (
							<>
								<div className="row text-center mt-4">
									<StyledDayCardFlex>
										{/* <DayWeatherCard />
										<DayWeatherCard />
										<DayWeatherCard />
										<DayWeatherCard />
										<DayWeatherCard /> */}
										{otherDaysData.map((data, index) =>
											index === 0 ? (
												<DayWeatherCard
													data={data}
													tomorrow={true}
												/>
											) : (
												<DayWeatherCard
													data={data}
													tomorrow={false}
												/>
											)
										)}
									</StyledDayCardFlex>
									{/* Will use map function on DailyCard component*/}
								</div>

								<div className="row today-highlights mt-4">
									<h4 className="mb-3">Today's Highlights</h4>
									<div className="col-sm-6 text-center mt-3">
										<WindStatus
											windSpeed={todayData.wind_speed}
											windDirection={
												todayData.wind_direction_compass
											}
										/>
									</div>
									<div className="col-sm-6 text-center mt-3">
										<HumidityCard
											humidityValue={todayData.humidity}
										/>
									</div>
									<div className="col-sm-6 text-center mt-3">
										<VisibilityCard
											visibilityValue={
												todayData.visibility
											}
										/>
									</div>
									<div className="col-sm-6 text-center mt-3">
										<AirPressureCard
											pressureValue={
												todayData.air_pressure
											}
										/>
									</div>
								</div>
							</>
						)}

						<footer className="text-center mt-4">
							<p>
								created by Adeoluwa Adeboye - devChallenges.io
							</p>
						</footer>
					</div>
				</div>
			</Flex>
		</>
	);
};

export default MainPage;
