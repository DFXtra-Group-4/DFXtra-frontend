import { isEmail, matches } from "validator";
const { emailRegExp, phoneNumberRegExp, linkedInRegex, gitHubRegEx } =
	require(`../utils/regEx`).default;

const required = value => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const validEmail = value => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};

const validGitHub = value => {
	if (!matches(value, gitHubRegEx)) {
		return (
			<div className="alert alert-danger" role="alert">
				Invalid format
			</div>
		);
	}
};

const validLinkedIn = value => {
	if (!matches(value, linkedInRegex)) {
		return (
			<div className="alert alert-danger" role="alert">
				Invalid format
			</div>
		);
	}
};

const validateInputs = {
	required,
	validEmail,
	validGitHub,
	validLinkedIn
};

export default validateInputs;
