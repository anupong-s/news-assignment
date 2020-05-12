import React from 'react'
import {
    Container,
    Menu,
    Icon,
    Header,
    Grid,
    Segment,
} from 'semantic-ui-react'
import './Footer.scss';

export const Footer: React.FC = () => (
    <div>
        <Menu fixed='bottom' color='violet' className="footerBlock" inverted>
            <p style={{ margin: '0.9em',fontSize:'12px',color:'#fff' }}>
                <Icon name='copyright outline' style={{ marginRight: '0.2em' }} /> Copyright 2019                
            </p>
        </Menu>

    </div >
)

