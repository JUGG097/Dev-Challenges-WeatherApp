import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import {
	WeatherImageMap,
	formatDate,
	getLocationButton,
} from "../Utils/Helper";
import { ImLocation2 } from "react-icons/im";
import { TodayWeatherData } from "../Utils/Types";
import { StyledWeatherOverview } from "./Styles/WeatherDataOverview.styled";

const WeatherDataOverview: React.FC<{
	location: string;
	todayData: TodayWeatherData;
	loading: boolean;
	searchModalLaunch: () => void;
	error: string;
	renderTempValue: (tempValue: number) => JSX.Element | undefined;
	successCallback: (position: any) => void;
	errorCallback: () => void;
}> = ({
	location,
	todayData,
	loading,
	searchModalLaunch,
	error,
	renderTempValue,
	successCallback,
	errorCallback,
}) => {
	return (
		<StyledWeatherOverview>
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
						<div
							className="search-icon"
							onClick={() => {
								getLocationButton(
									successCallback,
									errorCallback
								);
							}}
						>
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
												todayData.weather_state_abbr
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
										{renderTempValue(todayData.the_temp)}
									</p>
								</div>
								<div>
									<p>{todayData.weather_state_name}</p>
								</div>
							</div>
						</div>
						<div className="row other-value">
							<div className="col-12">
								<div>
									<p>
										Today .{" "}
										{formatDate(todayData.applicable_date)}
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
		</StyledWeatherOverview>
	);
};

export default WeatherDataOverview;
