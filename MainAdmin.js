// Initialize LocalStorage data structure if it doesn't exist
if (!localStorage.getItem('librarians')) {
    localStorage.setItem('librarians', JSON.stringify([]));
}

// Main function to show different sections
function showSection(section) {
    const mainContent = document.getElementById("main-content");
    let contentHTML = '';

    if (section === "register") {
        contentHTML = `<section class="form-container">
            <h2>Register Librarian</h2>
            <form id="registerForm">
                <label>Librarian Name<span>:</span></label>
                <input type="text" id="fullName" required>
                
                <label>Librarian Mail id<span>:</span></label>
                <input type="email" id="email">
                
                <label>Contact Number<span>:</span></label>
                <input type="text" id="phone" required>
                
                <label>Set Librarian Password<span>:</span></label>
                <input type="password" id="password">
                
                <label>Gender<span>:</span></label>
                <input type="radio" name="gender" value="male"> Male
                <input type="radio" name="gender" value="female"> Female
                
                <button class="submit-button" type="submit">SUBMIT</button>
            </form>
        </section>`;
    } 
    else if (section === "update") {
        contentHTML = `<section class="form-container">
            <h2>Update Librarian</h2>
            <form id="updateForm">
                <label>Librarian ID<span>:</span></label>
                <input type="text" id="librarianId" required>
                
                <label>Librarian Name<span>:</span></label>
                <input type="text" id="newFullName">
                
                <label>Librarian Mail id<span>:</span></label>
                <input type="email" id="newEmail">
                
                <label>Contact Number<span>:</span></label>
                <input type="text" id="newPhone">
                
                <label>Set Librarian Password<span>:</span></label>
                <input type="password" id="newPassword">
                
                <label>Gender<span>:</span></label>
                <input type="radio" name="newGender" value="male"> Male
                <input type="radio" name="newGender" value="female"> Female
                
                <button class="submit-button" type="submit">Update</button>
            </form>
            <div id="updateResult"></div>
        </section>`;
    } 
    else if (section === "delete") {
        contentHTML = `<section class="form-container">
            <h2>Delete Librarian</h2>
            <form id="deleteForm">
                <label>Librarian ID<span>:</span></label>
                <input type="text" id="deleteId" required>
                
                <button class="submit-button" type="submit">Delete</button>
            </form>
            <div id="deleteResult"></div>
        </section>`;
    } 
    else if (section === "showAll") {
        displayAllLibrarians();
        return; // Return early since displayAllLibrarians handles its own content
    } 
    else {
        contentHTML = `<h3>Welcome To Library Management System</h3>`;
    }

    mainContent.innerHTML = contentHTML;
    
    // Attach event listeners after the HTML is inserted
    if (section === "register") {
        document.getElementById("registerForm").addEventListener("submit", registerLibrarian);
    } 
    else if (section === "update") {
        document.getElementById("updateForm").addEventListener("submit", updateLibrarian);
    } 
    else if (section === "delete") {
        document.getElementById("deleteForm").addEventListener("submit", deleteLibrarian);
    }
}

// Register Librarian
function registerLibrarian(e) {
    e.preventDefault();
    const form = e.target;

    const newLibrarian = {
        id: Date.now(), // Simple unique ID using timestamp
        fullName: form.querySelector("#fullName").value,
        email: form.querySelector("#email").value,
        phone: form.querySelector("#phone").value,
        password: form.querySelector("#password").value,
        gender: form.querySelector("input[name='gender']:checked")?.value || "",
        createdAt: new Date().toISOString()
    };

    const librarians = JSON.parse(localStorage.getItem('librarians'));
    librarians.push(newLibrarian);
    localStorage.setItem('librarians', JSON.stringify(librarians));

    alert('Librarian registered successfully!');
    form.reset(); // Clear the form
}

// Update Librarian
function updateLibrarian(e) {
    e.preventDefault();
    const form = e.target;

    const id = parseInt(form.querySelector("#librarianId").value);
    const librarians = JSON.parse(localStorage.getItem('librarians'));
    const librarian = librarians.find(l => l.id === id);

    if (!librarian) {
        document.getElementById("updateResult").innerHTML = '<p style="color:red;">Librarian not found!</p>';
        return;
    }

    // Update only the fields that have new values
    if (form.querySelector("#newFullName").value) {
        librarian.fullName = form.querySelector("#newFullName").value;
    }
    if (form.querySelector("#newEmail").value) {
        librarian.email = form.querySelector("#newEmail").value;
    }
    if (form.querySelector("#newPhone").value) {
        librarian.phone = form.querySelector("#newPhone").value;
    }
    if (form.querySelector("#newPassword").value) {
        librarian.password = form.querySelector("#newPassword").value;
    }
    if (form.querySelector("input[name='newGender']:checked")) {
        librarian.gender = form.querySelector("input[name='newGender']:checked").value;
    }

    localStorage.setItem('librarians', JSON.stringify(librarians));
    document.getElementById("updateResult").innerHTML = '<p style="color:green;">Librarian updated successfully!</p>';
    form.reset();
}

// Delete Librarian
function deleteLibrarian(e) {
    e.preventDefault();
    const form = e.target;

    const id = parseInt(form.querySelector("#deleteId").value);
    const librarians = JSON.parse(localStorage.getItem('librarians'));
    const initialLength = librarians.length;

    const updatedLibrarians = librarians.filter(l => l.id !== id);

    if (updatedLibrarians.length === initialLength) {
        document.getElementById("deleteResult").innerHTML = '<p style="color:red;">Librarian not found!</p>';
        return;
    }

    localStorage.setItem('librarians', JSON.stringify(updatedLibrarians));
    document.getElementById("deleteResult").innerHTML = '<p style="color:green;">Librarian deleted successfully!</p>';
    form.reset();
}

// Display All Librarians
function displayAllLibrarians() {
    const librarians = JSON.parse(localStorage.getItem('librarians'));
    const contentDiv = document.getElementById("main-content");

    if (librarians.length === 0) {
        contentDiv.innerHTML = "<h3>No librarians registered yet</h3>";
        return;
    }

    let html = `
        <section class="form-container">
            <h2>All Librarians</h2>
            <table class="librarian-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Registered On</th>
                    </tr>
                </thead>
                <tbody>
    `;

    librarians.forEach(librarian => {
        html += `
            <tr>
                <td>${librarian.id}</td>
                <td>${librarian.fullName}</td>
                <td>${librarian.email || '-'}</td>
                <td>${librarian.phone || '-'}</td>
                <td>${librarian.gender || '-'}</td>
                <td>${new Date(librarian.createdAt).toLocaleDateString()}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </section>
    `;

    contentDiv.innerHTML = html;
}

// Logout function
function logout() {
    localStorage.removeItem('adminToken');
    alert('Logging out.....');
    window.location.href = "index.html"; // Redirect to home page
}








