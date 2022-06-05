import React from "react";
import { useState, useEffect } from "react";
import "./../Styles/LoginPopUp.css";
import * as api from "./../Api/Api.js";
function LoginPopup(props) {
	useEffect(() => {}, []);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [SignUp, SetSignUp] = useState(false);
	const [ForgotPassword, SetForgotPassword] = useState(false);
	const [Name, SetName] = useState("");
	const [BtnName, SetBtnName] = useState("Login");
	const ClosePopup = () => {
		props.setShowPopUp(false);
	};
	const passwordChangeHandler = (e) => {
		setPassword(e.target.value);
		console.log(password);
	};

	const nameChangeHandler = (e) => {
		SetName(e.target.value);
	};

	const emailChangeHandler = (e) => {
		setEmail(e.target.value);
		console.log(email);
	};
	const SignUpOn = () => {
		SetSignUp(true);
		SetForgotPassword(false);
		SetBtnName("SignUp");
	};
	const ForgotPasswordOn = () => {
		SetForgotPassword(true);
		SetBtnName("Set");
	};
	const Signup = () => {
		let body = {
			UserName: email,
			Password: password,
			Name: Name,
		};
		if (BtnName === "Login") {
			console.log(body);
			api.Login(body).then((res) => {
				if (res.status === "Login Successful") {
					props.setShowPopUp(false);
					window.alert("Welcome " + res.Name);
				}
				else
				{
					window.alert(res.status);
				}
				//Assigning session storage value to a key
				sessionStorage.setItem("Name", res.Name);
				
			});
		} else if (BtnName === "SignUp") {
			console.log(body);
			api.SignUp(body).then((res) => {
				if(res.status==="Successfully added")
				{
					SetSignUp(false);
					SetForgotPassword(false);
					SetBtnName("Login");
					window.alert(res.status);
				}
				else if(res.status==="Successfully updated")
				{
					SetSignUp(false);
					SetForgotPassword(false);
					SetBtnName("Login");
					window.alert(res.status);
				}
				
			});
		} else if (BtnName === "Set") {
			console.log(body);
			api.SignUp(body).then((res) => {
				if(res.status==="Successfully updated")
				{
					SetSignUp(false);
					SetForgotPassword(false);
					SetBtnName("Login");
					window.alert(res.status);
				}
			});
		}
	};
	return (
		<div className="LoginWrapper">
			<section class="vh-100 gradient-custom">
				<div class="container py-5 h-100">
					<div class="row d-flex justify-content-center align-items-center h-100">
						<div class="col-12 col-md-8 col-lg-6 col-xl-5">
							<div class="card bg-dark text-white">
								<div class="callout clBtn" data-closable>
									<button
										class="close-button"
										aria-label="Close alert"
										type="button"
										data-close
										onClick={ClosePopup}
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="card-body p-5 text-center">
									<div class="mb-md-5 mt-md-4 pb-5">
										{ForgotPassword && (
											<>
												<h2 class="fw-bold mb-2 text-uppercase">Reset</h2>
												<p class="text-white-50 mb-5">
													Please enter your email and password to reset!
												</p>
											</>
										)}
										{!SignUp && !ForgotPassword && (
											<>
												<h2 class="fw-bold mb-2 text-uppercase">Login</h2>
												<p class="text-white-50 mb-5">
													Please enter your email and password to login!
												</p>
											</>
										)}
										{SignUp && !ForgotPassword && (
											<>
												<h2 class="fw-bold mb-2 text-uppercase">SignUp</h2>
												<p class="text-white-50 mb-5">
													Please enter your email and password to SignUp!
												</p>
											</>
										)}
										<div class="form-outline form-white mb-4">
											<input
												type="email"
												id="typeEmailX"
												class="form-control form-control-lg"
												onChange={emailChangeHandler}
											/>
											<label class="form-label" for="typeEmailX">
												Email
											</label>
										</div>

										<div class="form-outline form-white mb-4">
											<input
												type="password"
												id="typePasswordX"
												class="form-control form-control-lg"
												onChange={passwordChangeHandler}
											/>
											<label class="form-label" for="typePasswordX">
												Password
											</label>
										</div>
										{ForgotPassword && (
											<div class="form-outline form-white mb-4">
												<input
													type="password"
													id="typePasswordX"
													class="form-control form-control-lg"
													onChange={passwordChangeHandler}
												/>
												<label class="form-label" for="typePasswordX">
													Re-Enter Password
												</label>
											</div>
										)}
										{SignUp && !ForgotPassword && (
											<div class="form-outline form-white mb-4">
												<input
													class="form-control form-control-lg"
													onChange={nameChangeHandler}
												/>
												<label class="form-label" for="typePasswordX">
													Enter Your Name
												</label>
											</div>
										)}

										<p class="small mb-5 pb-lg-2">
											<button
												class="signUpBtn"
												href="#!"
												onClick={ForgotPasswordOn}
											>
												Forgot password?
											</button>
										</p>

										<button
											class="btn btn-outline-light btn-lg px-5"
											type="submit"
											onClick={Signup}
										>
											{BtnName}
										</button>

										<div class="d-flex justify-content-center text-center mt-4 pt-1">
											<a href="#!" class="text-white">
												<i class="fab fa-facebook-f fa-lg"></i>
											</a>
											<a href="#!" class="text-white">
												<i class="fab fa-twitter fa-lg mx-4 px-2"></i>
											</a>
											<a href="#!" class="text-white">
												<i class="fab fa-google fa-lg"></i>
											</a>
										</div>
									</div>

									<div>
										<p class="mb-0">
											Don't have an account?{" "}
											<button
												href="#!"
												class="fw-bold signUpBtn"
												onClick={SignUpOn}
											>
												Sign Up
											</button>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default LoginPopup;
