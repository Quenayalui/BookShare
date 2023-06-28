import React, { useRef, useState } from "react";
import Bundlr from "@bundlr-network/client";

function CostCalculator() {
	const [price, setPrice] = useState("");
	const [file, setFile] = useState<File>();
	const ref = useRef<HTMLInputElement>(null);
	const bundlr = new Bundlr(
		"https://node1.bundlr.network",
		"matic",
		"4de2cadb9913db3ae42ebd66734adfa9b448ff8240e075f016f04dd40e0c3360"
	);

	const fileChangedHandler = (
		inputElement: React.ChangeEvent<HTMLInputElement>
	) => {
		if (
			inputElement &&
			inputElement.target.files &&
			inputElement.target.files[0]
		) {
			setFile(inputElement.target.files[0]);
			bundlr
				.getPrice(inputElement.target.files[0].size)
				.then((value) =>
					setPrice(bundlr.utils.fromAtomic(value).decimalPlaces(4).toString())
				);
		}
	};

	// });

	return (
		<div>
			<input
				type="file"
				ref={ref}
				onChange={(value) => fileChangedHandler(value)}
			/>
			<div>
				<p>File size: {file?.size} bytes</p>
				<p>File type: {file?.type}</p>
				<p>
					The cost for uploading {file?.name} to Arweave is: {price} MATIC or
					ca. {(+price * 0.61).toFixed(4)} USD.
				</p>
			</div>
		</div>
	);
}

export default CostCalculator;
