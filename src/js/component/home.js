import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			array: []
		};
	}
	render() {
		return (
			<div className="parent text-center mt-5">
				<input
					className="col-6"
					onKeyDown={e => {
						if (e.key === "Enter") {
							this.setState({
								array: this.state.array.concat(e.target.value)
							});
							e.target.value = "";
						}
					}}
				/>
				<ul className="list-group">
					{this.state.array.map((item, index) => {
						return (
							<li
								key={index}
								className=" col-6 mx-auto list-group-item d-flex justify-content-between">
								{item}
								<i
									className="fas fa-skull text-dark"
									onClick={() => {
										let x = this.state.array;
										x.splice(index, 1);
										this.setState({ array: x });
									}}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
