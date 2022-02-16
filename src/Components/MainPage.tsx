import React, { useState } from "react";
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

const MainPage: React.FC = () => {
	const [search, setSearch] = useState(false);

	const searchModalLaunch = () => {
		setSearch(true);
	};
	const searchModalClose = () => {
		setSearch(false);
	};

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
							<div className="row weather-image">
								<div className="col-12">
									<div>
										<img src="./images/Shower.png" alt="" />
									</div>
								</div>
							</div>
							<div className="row weather-value">
								<div className="col-12">
									<div>
										<p className="temp-value mb-5">
											15<span>&#176;C</span>
										</p>
									</div>
									<div>
										<p>Shower</p>
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
											Helsinki
										</p>
									</div>
								</div>
							</div>
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
						<div className="row text-center mt-4">
							<StyledDayCardFlex>
								<DayWeatherCard />
								<DayWeatherCard />
								<DayWeatherCard />
								<DayWeatherCard />
								<DayWeatherCard />
							</StyledDayCardFlex>
							{/* Will use map function on DailyCard component*/}
						</div>

						<div className="row today-highlights mt-4">
							<h4 className="mb-3">Today's Highlights</h4>
							<div className="col-sm-6 text-center mt-3">
								<WindStatus />
							</div>
							<div className="col-sm-6 text-center mt-3">
								<HumidityCard />
							</div>
							<div className="col-sm-6 text-center mt-3">
								<VisibilityCard />
							</div>
							<div className="col-sm-6 text-center mt-3">
								<AirPressureCard />
							</div>
						</div>

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
