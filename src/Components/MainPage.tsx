import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "./Styles/Flex";
import { StyledDayCardFlex } from "./Styles/DayCard.styled";
import DayWeatherCard from "./DayWeatherCard";
import WindStatus from "./WindStatus";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";
import AirPressureCard from "./AirPressureCard";
import WeatherDataOverview from "./WeatherDataOverview";
import {
	TodayWeatherData,
	OtherDayWeatherData,
	LocationAPIData,
} from "../Utils/Types";
import SearchPage from "./SearchPage";

const MainPage: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [search, setSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [tempUnit, setTempUnit] = useState("celsius");
	const [location, setLocation] = useState("helsinki");
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
					<WeatherDataOverview
						location={location}
						todayData={todayData}
						loading={loading}
						searchModalLaunch={searchModalLaunch}
						error={error}
						renderTempValue={renderTempValue}
					/>
				) : (
					<SearchPage
						searchModalClose={searchModalClose}
						searchTerm={searchTerm}
						handleSearchTermUpdate={handleSearchTermUpdate}
						handleLocationSearch={handleLocationSearch}
						loading={loading}
						error={error}
						locationValueChange={locationValueChange}
					/>
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
