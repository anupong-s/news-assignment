import React from 'react';
import { connect } from 'react-redux';
import { Form, Grid } from "semantic-ui-react";
import action from '../../Redux/Actions/LoaderAction';
import DatePicker from "react-datepicker";
import * as Yup from "yup";
import { Formik } from "formik";
import './AddNewsComponent.scss';
import "react-datepicker/dist/react-datepicker.css"

const addNewsSchema = Yup.object().shape({
    title: Yup.string().trim().required("Required"),
    shortDescription: Yup.string().trim().required("Required"),
    publishDate: Yup.date().required("Required"),
    image: Yup.string()
});

// Props type
// title
// shortDescription
// publishDate
// image
// onSubmit

export class AddNewsComponent extends React.Component<any> {

    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    uploadflie = async (inputFile: any, setFieldValue) => {
        let file = inputFile.target.files[0] || "";
        if (file.size > 0) {
            let size = file.size / 1024 / 1024; // convert to MB
            if (size > 2) {
                alert('Image size not over 2MB');
                return "";
            }
        }
        console.log(file);
        let imageBase64 = await this.toBase64(file);
        setFieldValue("image", imageBase64);
        return imageBase64;
    }

    render() {    
        return (
            <div className="add-news-container">
                <Formik
                    enableReinitialize
                    initialValues={{
                        title: this.props.title,
                        shortDescription: this.props.shortDescription,
                        publishDate: this.props.publishDate,
                        image: this.props.image
                    }}
                    validationSchema={addNewsSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        if (!this.props.onSubmit) {
                            alert("Function onSubmit not found");
                        } else {
                            this.props.onSubmit(values);
                        }
                        setSubmitting(false);
                    }}
                >

                    {(formikProps) => {
                        const { values, handleSubmit, handleChange, handleBlur, errors, touched, setFieldValue } = formikProps 

                        return (
                            <Form onSubmit={handleSubmit}>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Form.Group widths="equal">
                                            <Form.Field>
                                                <label className="txt-label">
                                                    title<span className="form-alert">*</span>
                                                </label>
                                                <Form.Input
                                                    fluid
                                                    value={values.title}
                                                    error={ errors.title && touched.title
                                                        ? { content: errors.title }
                                                        : false
                                                    }
                                                    placeholder="title"
                                                    id="title"
                                                    name="title"
                                                    onChange={(e: any, { value }) => {
                                                        setFieldValue(e.target.name, value)
                                                    }}
                                                />
                                            </Form.Field>
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Form.Group widths="equal">
                                            <Form.Field>
                                                <label className="txt-label">
                                                    Short description<span className="form-alert">*</span>
                                                </label>
                                                <Form.Input
                                                    fluid
                                                    value={values.shortDescription}
                                                    error={ errors.shortDescription && touched.shortDescription
                                                        ? { content: errors.shortDescription }
                                                        : false
                                                    }
                                                    maxLength="30"
                                                    placeholder="Short description"
                                                    id="shortDescription"
                                                    name="shortDescription"
                                                    onChange={(e: any, { value }) => {
                                                        setFieldValue(e.target.name, value)
                                                    }}
                                                />
                                            </Form.Field>
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Form.Group widths="equal">
                                            <Form.Field>
                                                <label className="txt-label">
                                                    Publish date<span className="form-alert">*</span>
                                                </label>
                                                    <DatePicker
                                                        className="ui fluid input"
                                                        selected={values.publishDate}
                                                        onChange={(date: Date) => setFieldValue("publishDate", date)}
                                                        dateFormat="dd-MM-yyyy"
                                                        placeholderText="DD/MM/YYYY"
                                                    />
                                                    {errors.publishDate && touched.publishDate && (
                                                        <div className="ui pointing above prompt label">
                                                            {errors.publishDate}
                                                        </div>
                                                    )}
                                            </Form.Field>
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Form.Group widths="equal">
                                            <Form.Field>
                                                <label className="txt-label">
                                                    Image<span className="form-alert">*</span>
                                                </label>
                                                    <input type="file" onChange={(e: any) => {
                                                        e.preventDefault();
                                                        this.uploadflie(e, setFieldValue);
                                                        e.target.value = null || "";
                                                    }}/>
                                            </Form.Field>
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Form.Group widths="equal">
                                            <Form.Field>
                                                { values.image && <img src={values.image} width="100" height="100" /> }
                                            </Form.Field>
                                        </Form.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <div>
                                            <button type="submit" style={{ fontSize: "15px" }}>
                                                {this.props.id ? "Update" : "Save"}
                                            </button>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Form>

                        )
                    }}
                </Formik>
            </div>
        );
    }
}

export default AddNewsComponent