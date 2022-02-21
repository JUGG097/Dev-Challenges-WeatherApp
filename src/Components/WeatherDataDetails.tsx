import React from "react";
import { StyledDayCardFlex } from "./Styles/DayCard.styled";
import DayWeatherCard from "./DayWeatherCard";
import WindStatus from "./WindStatus";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";
import AirPressureCard from "./AirPressureCard";
import { TodayWeatherData, OtherDayWeatherData } from "../Utils/Types";
import { StyledWeatherDataDetailed } from "./Styles/WeatherDataDetails.styled";

const WeatherDataDetails: React.FC<{
	tempUnit: string;
	tempUnitChange: () => void;
	loading: boolean;
	error: string;
	otherDaysData: OtherDayWeatherData;
	todayData: TodayWeatherData;
	renderTempValue: (tempValue: number) => JSX.Element | undefined;
}> = ({
	tempUnit,
	tempUnitChange,
	loading,
	error,
	otherDaysData,
	todayData,
	renderTempValue,
}) => {
	return (
		<StyledWeatherDataDetailed>
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
									tempUnit === "fahrenheit" && "active"
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
									visibilityValue={todayData.visibility}
								/>
							</div>
							<div className="col-sm-6 text-center mt-3">
								<AirPressureCard
									pressureValue={todayData.air_pressure}
								/>
							</div>
						</div>
					</>
				)}

				<footer className="text-center mt-4">
					<p>created by Adeoluwa Adeboye - devChallenges.io</p>
				</footer>
			</div>
		</StyledWeatherDataDetailed>
	);
};

export default WeatherDataDetails;
