import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

export const LoginPermission = (props: any) => (
    <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 600 }}>
            <Header as='h2' textAlign='center'>You don't have permission</Header>
            <Button color='blue' size='medium' content="Login" onClick={()=> props.history.push("/")} />
        </Grid.Column>
    </Grid>
)