const KEYS = {
    employees: "employees",
    employeeId: "employeeId",
}

export const getDepartmentCollection = () => ([
    { id: "1", title: "Development" },
    { id: "2", title: "Marketing" },
    { id: "3", title: "Accounting" },
    { id: "4", title: "Human Resource" },
]);

// insert data to local storage
export const insertEmployees = (data) => {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

// update entry
// insert data to local storage
export const updateEmployee = (data) => {
    let employees = getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id === data.id);
    employees[recordIndex] = {...data};
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

// generate employee id
export const generateEmployeeId = () => {
    if (localStorage.getItem(KEYS.employeeId) == null) {
        localStorage.setItem(KEYS.employeeId, '0');
    }
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

// delete entry
export const deleteEmployee = (id) => {
    let employees = getAllEmployees();
    employees = employees.filter(x => x.id !== id);
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}


// get all employees
export const getAllEmployees = () => {
    if (localStorage.getItem(KEYS.employees) == null) {
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    }
    let employees = JSON.parse(localStorage.getItem(KEYS.employees));
    let departments = getDepartmentCollection();
    return employees.map(item => ({
        ...item,
        department: departments[item.departmentId - 1].title
    }));
}
