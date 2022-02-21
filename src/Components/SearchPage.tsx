import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { StyledSearchPage } from "./Styles/SearchPage.styled";

const SearchPage: React.FC<{
	searchModalClose: () => void;
	searchTerm: string;
	handleSearchTermUpdate: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleLocationSearch: () => void;
	loading: boolean;
	error: string;
	locationValueChange: (newLocation: string) => void;
}> = ({
	searchModalClose,
	searchTerm,
	handleSearchTermUpdate,
	handleLocationSearch,
	loading,
	error,
	locationValueChange,
}) => {
	return (
		<StyledSearchPage>
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
							onClick={() => locationValueChange("London")}
						>
							<p>London</p>
							<span>&gt;</span>
						</div>
					</div>
					<div className="col-12 mb-2">
						<div
							className="popular-cities"
							onClick={() => locationValueChange("Barcelona")}
						>
							<p>Barcelona</p>
							<span>&gt;</span>
						</div>
					</div>
					<div className="col-12 mb-2">
						<div
							className="popular-cities"
							onClick={() => locationValueChange("Long Beach")}
						>
							<p>Long Beach</p>
							<span>&gt;</span>
						</div>
					</div>
				</div>
			</div>
		</StyledSearchPage>
	);
};

export default SearchPage;
