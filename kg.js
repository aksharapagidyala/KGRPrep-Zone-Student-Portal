function showDepartments(degree) {
    const tableContainer = document.getElementById("table-container");
    const departmentsTable = document.getElementById("departments");

    // Define data for departments
    const data = {
        'Btech': [
            { sno: 1, department: 'CSE', regulation: 'KGR23' },
            { sno: 2, department: 'CSE-DS', regulation: 'KGR21' },
            { sno: 3, department: 'CSE-ML', regulation: 'KGR21' },
            { sno: 4, department: 'ECE', regulation: 'KGR21' },
            { sno: 5, department: 'ME', regulation: 'KGR21' },
            { sno: 6, department: 'CE', regulation: 'KGR21' },
        ],
        'MBA': [
            { sno: 1, department: 'Management', regulation: 'R19' },
            { sno: 2, department: 'Finance', regulation: 'R19' },
            { sno: 3, department: 'HR', regulation: 'R19' },
            { sno: 4, department: 'Operations', regulation: 'R19' }
        ],
        'M.Tech': [
            { sno: 1, department: 'CSE AI', regulation: 'KGR23' },
            { sno: 2, department: 'VLSI', regulation: 'KGR23' },
            { sno: 3, department: 'Power Systems', regulation: 'KGR23' },
            { sno: 4, department: 'Thermal Engineering', regulation: 'KGR23' }
        ],
    };

    // Define file paths (example for now)
    const filePaths = {
        'CSE': 'https://studentservices.jntuh.ac.in/oss/resources/files/previousQPapers/1.Btech/1.R18/1.I-I/5.CSE/4.MATHEMATICS-I/December%20-%202018.pdf',
        'CSE-DS': '#', // No file available
        'CSE-ML': '#',
        'ECE': '#',
        'ME': '#',
        'CE': '#',
        'Management': '#',
        'Finance': '#',
        'HR': '#',
        'Operations': '#',
        'CSE AI': '#',
        'VLSI': '#',
        'Power Systems': '#',
        'Thermal Engineering': '#',
    };

    // Clear previous content
    departmentsTable.innerHTML = "";

    if (data[degree]) {
        data[degree].forEach((row) => {
            let filePath = filePaths[row.department] || '#';
            let linkHTML = filePath !== '#' 
                ? `<a href="${filePath}" target="_blank">View Papers</a>` 
                : `<a href="#" onclick="showError(event)">View Papers</a>`;

            departmentsTable.innerHTML += `<tr>
                <td>${row.sno}</td>
                <td>${row.department}</td>
                <td>${row.regulation}</td>
                <td>${linkHTML}</td>
            </tr>`;
        });
    }

    // Show table when degree is clicked
    tableContainer.style.display = "block";
}

// Function to show error when clicking "View Papers"
function showError(event) {
    event.preventDefault(); // Prevents default link behavior
    alert("Error: No papers uploaded yet!");
}
