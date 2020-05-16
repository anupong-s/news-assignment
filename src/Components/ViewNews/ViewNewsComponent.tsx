import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Accordion, Icon, Button } from 'semantic-ui-react'
import action from '../../Redux/Actions/LoaderAction';
import DatePicker from "react-datepicker";
import './ViewNewsComponent.scss';
import "react-datepicker/dist/react-datepicker.css";

// Props type
// newId
// title
// shortDescription
// publishDate
// image
// history

const ViewNewsComponent: React.FC<any> = (props) => {

    const [active, setActive] = useState(false);

    const onEditClicked = (id: string) => {
        props.history.push(`/edit-news/${id}`);
    }

    return (
        <div className="view-news-container">
            <Accordion styled className="">
                <Accordion.Title active={active} onClick={() => setActive(!active) }>
                <Icon name='dropdown' />
                {props.title} - {props.newId}
                </Accordion.Title>
                <Accordion.Content active={active}>
                    <p>
                        {props.displayPublishDate} - {props.shortDescription}
                    </p>
                    <img src={props.image} width="100" height="100" />
                    <div>
                        <Button className='' color='green' size='medium' content="Edit" onClick={(e)=> onEditClicked(props.newId) } />
                    </div>
                </Accordion.Content>
            </Accordion>
            <button className="close-btn" onClick={()=> { props.onDelet() }}><Icon name='close' /></button>
        </div>
        
    )
    
}

export default ViewNewsComponent