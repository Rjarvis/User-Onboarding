import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";

const Form = ({ errors, touched, values, status }) => {

    return(
        <div>
            <Form>
                <Field
                    component="input"
                    type="text"
                    name="name"
                    placeholder="name"
                />
                <Field
                    component="input"
                    type="text"
                    name="email"
                    placeholder="email"
                />

                
            </Form>
        </div>
    );
};