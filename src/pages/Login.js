import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import logo from './logo.png';
import { withRouter } from 'react-router-dom';
import { loginSuccess } from '../actions/login';
import { connect } from 'react-redux';

const LoginForm = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const handleOnSubmit = () => {
        if (userName.toLowerCase() == 'admin' && password == 'admin123') {
            props.loginSuccess()
            props.history.push('/home')
        }

    }
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src={logo} /> Log-in to your account
      </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                            />

                            <Button color='teal' fluid size='large' onClick={handleOnSubmit}>
                                Login
          </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default connect(null, {
    loginSuccess
})(withRouter(LoginForm))