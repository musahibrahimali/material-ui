import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {
    Paper,
    TableBody,
    TableRow,
    TableCell,
    Toolbar,
    InputAdornment,
} from '@material-ui/core';
import EmployeeForm from './EmployeeForm/EmployeeForm';
import { EmployeeStyles } from './EmployeeStyles';
import {UseTable, InputField, FormButton, PopUp, ActionButton,Notification} from '../widgets';
import * as employeeService from '../../../Services/EmployeeService';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import ConfirmDialog from "../FormControls/ConfirmDialog/ConfirmDialog";

function Employees() {
    const styles = EmployeeStyles();
    const [openPopUp, setOpenPopUp] = useState(false);
    const [notify, setNotify] = useState({isOpen: false, message:"", type:""});
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title:"", subTitle:""});
    const [recordsForEdit, setRecordsForEdit] = useState(null);
    const [records, setRecords] = useState(employeeService.getAllEmployees());
    const [filterFn, setFilterFn] = useState({
        fn: items => { return items; }
    });

    const headCells = [
        { id: "fullName", label: "Employee Name" },
        { id: "emailAddress", label: "Employee Email" },
        { id: "phoneNumber", label: "Employee Contact" },
        { id: "department", label: "Employee Department"},
        { id: "actions", label: "Actions", disableSorting: true },
    ];


    const {
        TableContainer,
        TableHeader,
        TablePaging,
        RecordsAfterPagingAndSorting,
    } = UseTable(records, headCells, filterFn);

    const handleSearch = (event) => {
        let target = event.target;
        setFilterFn({
            fn: items => {
                if (target.value === "") {
                    return items;
                } else {
                    return items.filter(item => item.fullName.toLowerCase().includes(target.value));
                }
            }
        });
    }

    // close pop up
    const handleOpenPopUP = () => {
        setOpenPopUp(!openPopUp);
        setRecordsForEdit(null);
    }

    // add or edit entry
    const addOrEdit = (employee, handleResetForm) => {
        if(employee.id === 0){
            employeeService.insertEmployees(employee);
        }else{
            employeeService.updateEmployee(employee);
        }
        handleResetForm();
        setRecordsForEdit(null);
        setOpenPopUp(false);
        setRecords(employeeService.getAllEmployees());
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success"
        })
    }

    // open in popup
    const openInPopUp = (item) => {
        setRecordsForEdit(item);
        setOpenPopUp(true);
    }

    const onDelete = (id) => {
        setConfirmDialog({
            isOpen: true,
            title: "Are you sure you want to delete entry",
            subTitle: "Entry deleted cannot be restored. You cant undo this operation",
            onConfirm: () => {handleDelete(id)}
        })
    }

    // handle delete operation
    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });
        employeeService.deleteEmployee(id);
        setRecords(employeeService.getAllEmployees());
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error"
        })
    }

    return (
        <>
            <Paper elevation={0} className={styles.employeePageContent}>
                <Toolbar>
                    <InputField
                        label="Search Employee"
                        className={styles.searchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                        onChange={handleSearch}
                    />
                    <FormButton
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={styles.newButton}
                        onClick={handleOpenPopUP}
                    />
                </Toolbar>

                <TableContainer>
                    <TableHeader />
                    <TableBody>
                        {
                            RecordsAfterPagingAndSorting().map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.emailAddress}</TableCell>
                                    <TableCell>{item.phoneNumber}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>
                                        {/* edit */}
                                        <ActionButton color="primary" onClick={() => {openInPopUp(item)}}>
                                            <EditOutlinedIcon fontSize="small" />
                                        </ActionButton>
                                        {/* delete */}
                                        <ActionButton
                                            color="secondary"
                                            onClick={
                                                () => {onDelete(item.id)}
                                            }
                                        >
                                            <CloseIcon fontSize="small" />
                                        </ActionButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </TableContainer>
                <TablePaging />
            </Paper>

            {/* pop up form */}

            <PopUp
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
                title={"Employee Form"}
            >
                <EmployeeForm
                    addOrEdit={addOrEdit}
                    recordForEdit={recordsForEdit}
                />
            </PopUp>

            {/* Action Notification */}
            <Notification
                notify={notify}
                setNotify={setNotify}
            />

            {/* confirm dialog */}
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </>
    )
}

export default Employees;
