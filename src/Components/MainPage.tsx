import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "./Styles/Flex";
import { FaSearch } from "react-icons/fa";
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

import { WeatherImageMap, formatDate } from "../Utils/Helper";

const MainPage: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [search, setSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [tempUnit, setTempUnit] = useState("celsius");
	const [location, setLocation] = useState("lisbon");
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

	const tempUnitChange = () => {
		if (tempUnit === "celsius") {
			setTempUnit("fahrenheit");
		} else {
			setTempUnit("celsius");
		}
	};

	const handleSearchTermUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.currentTarget.value);
	};

	const handleLocationSearch = () => {
		if (searchTerm === "") {
			setError("Enter a Location");
		} else {
			setLocation(searchTerm);
		}
	};

	const locationValueChange = (newLocation: string) => {
		setSearch(false);
		setLocation(newLocation);
	};

	const renderTempValue = (tempValue: number) => {
		if (tempUnit === "celsius") {
			return (
				<>
					{Math.round(tempValue)}
					<span>&#176;C</span>
				</>
			);
		} else if (tempUnit === "fahrenheit") {
			let fahrenheitValue = tempValue * 1.8 + 32;
			return (
				<>
					{Math.round(fahrenheitValue)}
					<span>&#176;F</span>
				</>
			);
		}
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
				setSearch(false);
				setError("");
			})
			.catch(function (error) {
				console.log(error);
				setError("No Data Found");
			});
	};

	useEffect(() => {
		const weatherRequest = () => {
			setLoading(true);
			setError("");
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
						setError("Location Not Found");
					}
				})
				.catch(function (error) {
					console.log("I am not running");
					setError("Location Not Found");
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
								error ? (
									<div className="col-12 mb-2">
										<div className="error loading-div">
											<p>{error}</p>
										</div>
									</div>
								) : (
									<div className="text-center loading-div">
										Loading Weather Information
									</div>
								)
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
													{renderTempValue(
														todayData.the_temp
													)}
												</p>
											</div>
											<div>
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
												<p>
													Today .{" "}
													{formatDate(
														todayData.applicable_date
													)}
												</p>
												<p className="location-name">
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
						<div className="container">
							<p onClick={searchModalClose} className="close-btn">
								<AiOutlineCloseCircle />
							</p>
							<div className="row mb-5">
								<div className="col-8 text-center">
									<div className="input-text">
										<span>
											<FaSearch />
										</span>
										<input
											type="search"
											placeholder="search location"
											value={searchTerm}
											onChange={handleSearchTermUpdate}
										></input>
									</div>
								</div>

								<div className="col-4">
									<div className="search-btn">
										<button
											className="btn btn-primary"
											type="submit"
											onClick={handleLocationSearch}
										>
											Search
										</button>
									</div>
								</div>
							</div>

							<div className="row mb-5">
								{loading && !error && (
									<div className="col-12 mb-2">
										<div className="text-center">
											<p>Loading Weather Information</p>
										</div>
									</div>
								)}
								{error !== "No Data Found" && error !== "" && (
									<div className="col-12 mb-2">
										<div className="error">
											<p>{error}</p>
										</div>
									</div>
								)}
							</div>

							<div className="row">
								<h4 className="mb-2">Popular Cities</h4>
								<div className="col-12 mb-2">
									<div
										className="popular-cities"
										onClick={() =>
											locationValueChange("London")
										}
									>
										<p>London</p>
										<span>&gt;</span>
									</div>
								</div>
								<div className="col-12 mb-2">
									<div
										className="popular-cities"
										onClick={() =>
											locationValueChange("Barcelona")
										}
									>
										<p>Barcelona</p>
										<span>&gt;</span>
									</div>
								</div>
								<div className="col-12 mb-2">
									<div
										className="popular-cities"
										onClick={() =>
											locationValueChange("Long Beach")
										}
									>
										<p>Long Beach</p>
										<span>&gt;</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className="second-div">
					<div className="container">
						<div className="row temp-choice">
							<div className="col-12">
								<div className="">
									<span
										className={`${
											tempUnit === "celsius" && "active"
										}`}
										onClick={tempUnitChange}
									>
										&#176;C
									</span>
									<span
										className={`${
											tempUnit === "fahrenheit" &&
											"active"
										}`}
										onClick={tempUnitChange}
									>
										&#176;F
									</span>
								</div>
							</div>
						</div>

						{loading ? (
							error ? (
								<div className="col-12 mb-2">
									<div className="error loading-div">
										<p>{error}</p>
									</div>
								</div>
							) : (
								<div className="text-center loading-div">
									Loading Weather Information
								</div>
							)
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
													key={index}
													data={data}
													tomorrow={true}
													tempValue={renderTempValue}
												/>
											) : (
												<DayWeatherCard
													key={index}
													data={data}
													tomorrow={false}
													tempValue={renderTempValue}
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
