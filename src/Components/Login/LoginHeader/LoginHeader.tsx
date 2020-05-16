import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import separateLine from "./../../../Assets/Images/separate_line.png";
import './LoginHeader.scss';

export const LoginHeader = (props: any) => (
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
            <Header className="ApplicationName" as='h2' textAlign='center'>News Assignment</Header>
            <Image className="separateLine" src={separateLine} centered size='large' />
            {props.children}
        </Grid.Column>
    </Grid>
)