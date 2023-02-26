import React, { Fragment, useState } from "react";

interface ImageCarouselProps {
	images: string[];
}

// Scaffold for the image display block
function mapImages(images: string[]) {
	return images.map((url, index) => {
		return (
			<div
				className="hidden duration-700 ease-in-out"
				key={index}
				data-carousel-item
			>
				<img
					className="rounded-t h-72 w-full object-cover"
					src={url}
					alt={"..."}
				/>
			</div>
		);
	});
}

function mapButtons(images: string[]) {
	return images.map((url, index) => {
		return (
			<button
				key={index}
				type="button"
				className="w-3 h-3 rounded-full"
				aria-current="false"
				aria-label={url}
				data-carousel-slide-to={index}
			/>
		);
	});
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
	return (
		<Fragment>
			<div id="default-carousel" className="relative" data-carousel="static">
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					{mapImages(images)}
				</div>
				<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
					{mapButtons(images)}
				</div>
				<button
					type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
		</Fragment>
	);
};
