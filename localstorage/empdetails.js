

window.onload = function() {
    loadEmployeesFromLocalStorage();
}


document.getElementById('add-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;

    if (name === '' || position === '' || department === '') {
        alert('Please enter all details!');
        return;
    }

    const employee = {
        id: Date.now(),  
        name: name,
        position: position,
        department: department
    };


    saveEmployeeToLocalStorage(employee);

   
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('department').value = '';
});


function saveEmployeeToLocalStorage(employee) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));

   
    loadEmployeesFromLocalStorage();
}


function loadEmployeesFromLocalStorage() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; 

    employees.forEach(function(employee) {
        const li = document.createElement('li');
        li.setAttribute('data-id', employee.id);

        li.innerHTML = `
            <strong>${employee.name}</strong><br>
            Position: ${employee.position}<br>
            Department: ${employee.department}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

       
        employeeList.appendChild(li);
    });
}

document.getElementById('employee-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const li = event.target.parentElement;
        const id = li.getAttribute('data-id');

       
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        let employee = employees.find(emp => emp.id == id);

        if (employee) {
          
            const newName = prompt('Edit Name:', employee.name);
            const newPosition = prompt('Edit Position:', employee.position);
            const newDepartment = prompt('Edit Department:', employee.department);

            if (newName && newPosition && newDepartment) {
                employee.name = newName;
                employee.position = newPosition;
                employee.department = newDepartment;

                localStorage.setItem('employees', JSON.stringify(employees));

              
                loadEmployeesFromLocalStorage();
            }
        }
    }
});


document.getElementById('employee-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.parentElement;
        const id = li.getAttribute('data-id');

        
        let employees = JSON.parse(localStorage.getItem('employees')) || [];

        
        employees = employees.filter(emp => emp.id != id);

        
        localStorage.setItem('employees', JSON.stringify(employees));

        
        loadEmployeesFromLocalStorage();
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    localStorage.removeItem('employees');
    loadEmployeesFromLocalStorage(); 
});
