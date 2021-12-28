import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import * as employeeService from '../../../../Services/EmployeeService';
import {
    UseForm,
    Form,
    InputField,
    RadioControls,
    DropDown,
    CheckBox,
    DatePicker,
    FormButton,
} from '../../../index';
import { EmployeeFormStyles } from './EmployeeFormStyles';

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialValues = {
    id: 0,
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
};

function EmployeeForm(props) {
    const {addOrEdit,recordForEdit} = props;
    const styles = EmployeeFormStyles();

    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('fullName' in fieldValues) {
            temp.fullName = fieldValues.fullName ? "" : "This Field is Required";
        }
        if ('emailAddress' in fieldValues) {
            temp.emailAddress = (/$^|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Invalid Email";
        }
        if ('phoneNumber' in fieldValues) {
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "Invalid Phone Number";
        }
        if ('departmentId' in fieldValues) {
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This Field is Required";
        }
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            addOrEdit(values, handleResetForm);
        }
    }

    const {
        values,
        setErrors,
        handleInputChange,
        handleResetForm,
        errors,
        // eslint-disable-next-line no-unused-vars
        setValues,
    } = UseForm(initialValues, true, validateForm);

    /* populate form with new item */
    useEffect(() => {
        if(recordForEdit != null){
            setValues({
                ...recordForEdit
            });
        }

    },[recordForEdit]);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Grid className={styles.container}>
                    <Grid container>
                        <Grid item xs={6} className={styles.space}>
                            <InputField
                                label="Full Name"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange}
                                error={errors.fullName}
                            />
                            <InputField
                                label="Email Address"
                                name="emailAddress"
                                value={values.emailAddress}
                                onChange={handleInputChange}
                                error={errors.emailAddress}
                            />
                            <InputField
                                label="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={handleInputChange}
                                error={errors.phoneNumber}
                            />
                            <InputField
                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={6} className={styles.space}>
                            <RadioControls
                                name="gender"
                                label="Gender"
                                value={values.gender}
                                items={genderItems}
                                onChange={handleInputChange}
                            />
                            <DropDown
                                name="departmentId"
                                label="Department"
                                value={values.departmentId}
                                options={employeeService.getDepartmentCollection()}
                                onChange={handleInputChange}
                                error={errors.departmentId}
                            />

                            <DatePicker
                                name="hireDate"
                                label="Hire Date"
                                value={values.hireDate}
                                onChange={handleInputChange}
                            />

                            <CheckBox
                                name="isPermanent"
                                label="Permanent Employee"
                                value={values.isPermanent}
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>

                    <div className={styles.mainContainer}>
                        <FormButton
                            type="submit"
                            text="Submit"
                        />
                        <FormButton
                            variant="outlined"
                            color="secondary"
                            size="large"
                            text="Reset"
                            onClick={handleResetForm} />
                    </div>
                </Grid>
            </Form>
        </>
    )
}

export default EmployeeForm;
