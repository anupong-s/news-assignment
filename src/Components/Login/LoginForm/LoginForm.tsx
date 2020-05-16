import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './LoginForm.scss';

export const LoginForm: React.FC<any> = (props) => {
    return (
        <Form>
            <Form.Field>
                <label className="lbl-text">Username</label>
                <input placeholder='Enter your username' onChange={(e)=> props.onUsernameChanged(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label className="lbl-text">Password</label>
                <input placeholder='Enter your password' type="password" onChange={(e)=> props.onPasswordChanged(e.target.value)} />
            </Form.Field>
            <Button className='signInBtn' color='blue' icon='key' size='big' content="Sign in" onClick={(e)=>props.onSubmit()}>
            </Button>
        </Form>
    )
}
