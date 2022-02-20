import './Register.scss'
import TwitterIcon from '@mui/icons-material/Twitter'
import CloseIcon from '@mui/icons-material/Close'

const Register = () => {
	return (
		<div className="register__container">
			<div className="register__content">
           		<div className="content__registerTop">
					<div className="register__exit">
						<label type="button" className="exit_button"><CloseIcon/></label>
					</div>
					<div className="register__iconTwitter">
						<TwitterIcon fontSize="large"/>
					</div>
				</div>
				<div className="content__registerLabel">
					<label className="registerLabel">Create your account</label>
				</div>
				<div className="content__registerName">
					<input type="text" className="registerInput__name" placeholder="  Name" required></input>
				</div>
				<div className="content__registerEmail">
					<input type="text" className="registerInput__email" placeholder="  Email" required></input>
				</div>
				<div className="content__changeEmailPhone">
					<input type="button" className="registerChangeEmailPhone" value="Use phone"></input>
				</div>
				<div className="content__dateInfo">
					<label className="Birthday">Birthday</label>
					<div className="div__info">
						<label className="info__label">This information will not be public. 
						Confirm your own age, even if this account is for a business, 
						a pet, or something else.</label>
					</div>
				</div>
				<div className="content__birthdaySelect">
					<div className="birthday__Month">
						<select>
							<option selected="selected" disabled> </option>
							<option>January</option>
							<option>February</option>
							<option>March</option>
							<option>April</option>
							<option>May</option>
							<option>June</option>
							<option>July</option>
							<option>August</option>
							<option>September</option>
							<option>October</option>
							<option>November</option>
							<option>December</option>
						</select>
					</div>
					<div className="birthday__day">
						<select>
							<option selected="selected" disabled> </option>
							{[...Array(31)].map((x, i) =>
    							<option>{++i}</option>
  							)}
						</select>
					</div>
					<div className="birthday__year">
						<select>
							<option selected="selected" disabled> </option>
							{[...Array(121)].map((x, i) =>
    							<option>{2022-i}</option>
  							)}
						</select>
					</div>
				</div>
				<div className="content__nextButton">
					<input type="button" value="Next" className="nextButton"></input>
				</div>
			</div>
		</div>
	)
}

export default Register