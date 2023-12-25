import { useRef, useState } from 'react';

export default function Login() {
	const [emailIsInvalid, setEmailIsInvalid] = useState(false);
	const email = useRef();
	const password = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		const enteredEmail = email.current.value;
		const enteredPassword = password.current.value;

		const emailIsValid = enteredEmail.includes('@');

		if (!emailIsValid) {
			setEmailIsInvalid(true);
			return;
		}

		setEmailIsInvalid(false);
	};

	const handleReset = () => {
		// można tak resetować pola input ale ogólnie nie jest to zalecany sposób
		email.current.value = '';
		password.current.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<div className='control no-margin'>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' name='email' ref={email} />
					<div className='control-error'>{emailIsInvalid && <p>Please enter valid email address.</p>}</div>
				</div>

				<div className='control no-margin'>
					<label htmlFor='password'>Password</label>
					<input id='password' type='password' name='password' ref={password} />
				</div>
			</div>

			<p className='form-actions'>
				<button type='button' className='button button-flat' onClick={handleReset}>
					Reset
				</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
