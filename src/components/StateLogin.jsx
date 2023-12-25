import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
	const {
		value: emailValue,
		handleInputBlur: handleEmailBlur,
		handleInputChange: handleEmailChange,
		hasError: emailIsInvalid,
	} = useInput('', value => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputBlur: handlePasswordBlur,
		handleInputChange: handlePasswordChange,
		hasError: passwordIsInvalid,
	} = useInput('', value => hasMinLength(value, 6));

	const handleSubmit = e => {
		e.preventDefault();

		if (emailIsInvalid || passwordIsInvalid) {
			return;
		}
		console.log(emailValue, passwordValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					label='Email'
					id='email'
					type='email'
					name='email'
					onBlur={handleEmailBlur}
					value={emailValue}
					onChange={handleEmailChange}
					error={emailIsInvalid && 'Please enter a valid email!'}
				/>

				<Input
					label='Password'
					id='password'
					type='password'
					name='password'
					onBlur={() => handlePasswordBlur('password')}
					value={passwordValue}
					onChange={handlePasswordChange}
					error={passwordIsInvalid && 'Please enter a valid password!'}
				/>
			</div>

			<p className='form-actions'>
				<button type='button' className='button button-flat'>
					Reset
				</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}

// biblioteki do formularzy: React Hook Form, Formik,
