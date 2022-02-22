import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex } from "./Styles/Flex";
import WeatherDataOverview from "./WeatherDataOverview";
import {
	TodayWeatherData,
	OtherDayWeatherData,
	LocationAPIData,
} from "../Utils/Types";
import { getLocationButton } from "../Utils/Helper";
import SearchPage from "./SearchPage";
import WeatherDataDetails from "./WeatherDataDetails";

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

	const weatherDataRequest = (woeid: number) => {
		axios
			.get(
				`https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
			)
			.then((response) => {
				let data: OtherDayWeatherData =
					response.data.consolidated_weather;
				// console.log(response.data.consolidated_weather);
				setTodayData(data[0]);
				setOtherDaysData(data.slice(1));
				setLoading(false);
				setSearch(false);
				setError("");
			})
			.catch(function (error) {
				// console.log(error);
				setError("No Data Found");
			});
	};

	const showPosition = (position: any) => {
		// console.log(position.coords);

		axios
			.get(
				"https://afternoon-ridge-35420.herokuapp.com/https://www.metaweather.com/api/location/search",
				{
					params: {
						lattlong: `${position.coords.latitude},${position.coords.longitude}`,
					},
				}
			)
			.then((response) => {
				// console.log(response);
				if (!(response.data[0] === undefined)) {
					let data: LocationAPIData = response.data[0];
					// console.log(response.data[0]);
					setLocation(data.title);
				} else {
					// console.log("I am not running");
					setError("Location Not Found");
				}
			})
			.catch(function (error) {
				// console.log("I am not running");
				setError("Location Not Found");
			});
	};

	const errorAlert = () => {
		alert("Location Access Not Supported or Denied!!!");
	};

	useEffect(() => {
		getLocationButton(showPosition);
	}, []);

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
					// console.log(response);
					if (!(response.data[0] === undefined)) {
						let data: LocationAPIData = response.data[0];
						// console.log(response.data[0]);
						weatherDataRequest(data.woeid);
					} else {
						// console.log("I am not running");
						setError("Location Not Found");
					}
				})
				.catch(function (error) {
					// console.log("I am not running");
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
						successCallback={showPosition}
						errorCallback={errorAlert}
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
				<WeatherDataDetails
					tempUnit={tempUnit}
					tempUnitChange={tempUnitChange}
					loading={loading}
					error={error}
					otherDaysData={otherDaysData}
					todayData={todayData}
					renderTempValue={renderTempValue}
				/>
			</Flex>
		</>
	);
};

export default MainPage;
