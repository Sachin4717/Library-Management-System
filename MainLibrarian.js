// Initialize LocalStorage data structures if they don't exist
if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify([]));
}

if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify([]));
}

if (!localStorage.getItem('transactions')) {
    localStorage.setItem('transactions', JSON.stringify([]));
}

// Main function to show different sections
function showSection(section) {
    const mainContent = document.getElementById('main-content');
    let contentHTML = '';

    if (section === 'issubook') {
        contentHTML = ` <section class="form-container">
            <h2>Book Issue</h2>
            <form id="issueForm">
                <label>Student ID<span>:</span></label>
                <input type="text" id="issueStudentId" required>

                <label>Book ID<span>:</span></label>
                <input type="text" id="issueBookId" required>

                <label>Due Date<span>:</span></label>
                <input type="date" id="dueDate" required>

                <button class="submit-button" type="submit">Issue</button>
            </form>
            <div id="issueResult"></div>
        </section>`;
    } 
    else if (section === 'submitbook') {
        contentHTML = `<section class="form-container">
            <h2>Submit Book</h2>
            <form id="returnForm">
                <label>Transaction ID<span>:</span></label>
                <input type="text" id="returnTransactionId" required>

                <button class="submit-button" type="submit">Submit</button>
            </form>
            <div id="returnResult"></div>
        </section>`;
    } 
    else if (section === 'registerstudent') {
        contentHTML = `<section class="form-container">
            <h2>Register Student</h2>
            <form id="registerStudentForm">
                <label>Student ID<span>:</span></label>
                <input type="text" id="studentId" required>

                <label>Student Name<span>:</span></label>
                <input type="text" id="studentName" required>

                <label>Mail ID<span>:</span></label>
                <input type="email" id="studentEmail" required>

                <label>Password<span>:</span></label>
                <input type="password" id="studentPassword" required>

                <label>Gender<span>:</span></label>
                <div>
                    <input type="radio" name="gender" value="male"> Male
                    <input type="radio" name="gender" value="female"> Female
                </div>

                <label>Course<span>:</span></label>
                <input type="text" id="studentCourse" required>

                <label>Branch<span>:</span></label>
                <input type="text" id="studentBranch" required>

                <label>Contact Number<span>:</span></label>
                <input type="tel" id="studentPhone" required>

                <label>Batch<span>:</span></label>
                <input type="number" id="studentBatch" required>

                <button class="submit-button" type="submit">Submit</button>
            </form>
            <div id="registerResult"></div>
        </section>`;
    } 
    else if (section === 'searchstudent') {
        contentHTML = `<section class="form-container">
            <h2>Search Student</h2>
            <form id="searchStudentForm">
                <label>Student ID<span>:</span></label>
                <input type="text" id="searchStudentId" required>

                <button class="submit-button" type="submit">Search</button>
            </form>
            <div id="searchResult"></div>
        </section>`;
    } 
    else if (section === 'studentlist') {
        displayAllStudents();
        return;
    } 
    else if (section === 'addbook') {
        contentHTML = `<section class="form-container">
            <h2>Add Book</h2>
            <form id="addBookForm">
                <label>Book ID<span>:</span></label>
                <input type="text" id="bookId" required>

                <label>Book Name<span>:</span></label>
                <input type="text" id="bookName" required>

                <label>Subject<span>:</span></label>
                <input type="text" id="bookSubject" required>

                <label>Author<span>:</span></label>
                <input type="text" id="bookAuthor" required>

                <label>Title<span>:</span></label>
                <input type="text" id="bookTitle" required>

                <label>Version<span>:</span></label>
                <input type="text" id="bookVersion" required>

                <label>Quantity<span>:</span></label>
                <input type="number" id="bookQuantity" required min="1">

                <button class="submit-button" type="submit">Add</button>
            </form>
            <div id="addBookResult"></div>
        </section>`;
    } 
    else if (section === 'updatebook') {
        contentHTML = `<section class="form-container">
            <h2>Update Book</h2>
            <form id="updateBookForm">
                <label>Book ID<span>:</span></label>
                <input type="text" id="updateBookId" required>

                <label>New Quantity<span>:</span></label>
                <input type="number" id="updateBookQuantity" required min="0">

                <button class="submit-button" type="submit">Update</button>
            </form>
            <div id="updateBookResult"></div>
        </section>`;
    } 
    else if (section === 'deletebook') {
        contentHTML = `<section class="form-container">
            <h2>Delete Book</h2>
            <form id="deleteBookForm">
                <label>Book ID<span>:</span></label>
                <input type="text" id="deleteBookId" required>

                <button class="submit-button" type="submit">Delete</button>
            </form>
            <div id="deleteBookResult"></div>
        </section>`;
    } 
    else if (section === 'showtranscation') {
        displayAllTransactions();
        return;
    } 
    else if (section === 'searchbook') {
        contentHTML = `<section class="form-container">
            <h2>Search Book</h2>
            <form id="searchBookForm">
                <label>Book ID<span>:</span></label>
                <input type="text" id="searchBookId">

                <button class="submit-button" type="submit">Search</button>
            </form>
            <div id="searchBookResult"></div>
        </section>`;
    } 
    else {
        contentHTML = `<h3>Welcome to Library Management System</h3>`;
    }

    mainContent.innerHTML = contentHTML;
    
    // Attach event listeners after the HTML is inserted
    switch(section) {
        case 'issubook':
            document.getElementById('issueForm').addEventListener('submit', issueBook);
            break;
        case 'submitbook':
            document.getElementById('returnForm').addEventListener('submit', returnBook);
            break;
        case 'registerstudent':
            document.getElementById('registerStudentForm').addEventListener('submit', registerStudent);
            break;
        case 'searchstudent':
            document.getElementById('searchStudentForm').addEventListener('submit', searchStudent);
            break;
        case 'addbook':
            document.getElementById('addBookForm').addEventListener('submit', addBook);
            break;
        case 'updatebook':
            document.getElementById('updateBookForm').addEventListener('submit', updateBook);
            break;
        case 'deletebook':
            document.getElementById('deleteBookForm').addEventListener('submit', deleteBook);
            break;
        case 'searchbook':
            document.getElementById('searchBookForm').addEventListener('submit', searchBook);
            break;
    }
}

// Issue Book
function issueBook(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('issueStudentId').value;
    const bookId = document.getElementById('issueBookId').value;
    const dueDate = document.getElementById('dueDate').value;
    
    const students = JSON.parse(localStorage.getItem('students'));
    const books = JSON.parse(localStorage.getItem('books'));
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    
    const student = students.find(s => s.id == studentId);
    const book = books.find(b => b.id == bookId);
    
    if (!student) {
        document.getElementById('issueResult').innerHTML = '<p style="color:red;">Student not found!</p>';
        return;
    }
    
    if (!book) {
        document.getElementById('issueResult').innerHTML = '<p style="color:red;">Book not found!</p>';
        return;
    }
    
    if (book.quantity <= 0) {
        document.getElementById('issueResult').innerHTML = '<p style="color:red;">No copies available!</p>';
        return;
    }
    
    const newTransaction = {
        id: Date.now(),
        bookId: bookId,
        studentId: studentId,
        issueDate: new Date().toISOString(),
        dueDate: dueDate,
        returnDate: null,
        status: 'Issued'
    };
    
    // Update book quantity
    book.quantity--;
    
    transactions.push(newTransaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('books', JSON.stringify(books));
    
    document.getElementById('issueResult').innerHTML = '<p style="color:green;">Book issued successfully!</p>';
    e.target.reset();
}

// Return Book
function returnBook(e) {
    e.preventDefault();
    
    const transactionId = document.getElementById('returnTransactionId').value;
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    const books = JSON.parse(localStorage.getItem('books'));
    
    const transaction = transactions.find(t => t.id == transactionId);
    
    if (!transaction) {
        document.getElementById('returnResult').innerHTML = '<p style="color:red;">Transaction not found!</p>';
        return;
    }
    
    if (transaction.status === 'Returned') {
        document.getElementById('returnResult').innerHTML = '<p style="color:red;">Book already returned!</p>';
        return;
    }
    
    const book = books.find(b => b.id == transaction.bookId);
    
    // Update transaction
    transaction.returnDate = new Date().toISOString();
    transaction.status = 'Returned';
    
    // Update book quantity
    book.quantity++;
    
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('books', JSON.stringify(books));
    
    document.getElementById('returnResult').innerHTML = '<p style="color:green;">Book returned successfully!</p>';
    e.target.reset();
}

// Register Student
function registerStudent(e) {
    e.preventDefault();
    
    const students = JSON.parse(localStorage.getItem('students'));
    const newStudent = {
        id: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        password: document.getElementById('studentPassword').value,
        gender: document.querySelector('input[name="gender"]:checked')?.value || '',
        course: document.getElementById('studentCourse').value,
        branch: document.getElementById('studentBranch').value,
        phone: document.getElementById('studentPhone').value,
        batch: document.getElementById('studentBatch').value,
        registeredAt: new Date().toISOString()
    };
    
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    
    document.getElementById('registerResult').innerHTML = '<p style="color:green;">Student registered successfully!</p>';
    e.target.reset();
}

// Search Student
function searchStudent(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('searchStudentId').value;
    const students = JSON.parse(localStorage.getItem('students'));
    const student = students.find(s => s.id == studentId);
    
    if (!student) {
        document.getElementById('searchResult').innerHTML = '<p style="color:red;">Student not found!</p>';
        return;
    }
    
    let html = `
        <div class="student-details">
            <h3>Student Details</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <p><strong>Branch:</strong> ${student.branch}</p>
            <p><strong>Batch:</strong> ${student.batch}</p>
        </div>
    `;
    
    document.getElementById('searchResult').innerHTML = html;
}

// Display All Students
function displayAllStudents() {
    const students = JSON.parse(localStorage.getItem('students'));
    const contentDiv = document.getElementById('main-content');
    
    if (students.length === 0) {
        contentDiv.innerHTML = '<h3>No students registered yet</h3>';
        return;
    }
    
    let html = `
        <section class="form-container">
            <h2>List of All Students</h2>
            <table class="student-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Branch</th>
                        <th>Batch</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    students.forEach(student => {
        html += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.branch}</td>
                <td>${student.batch}</td>
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

// Add Book
function addBook(e) {
    e.preventDefault();
    
    const books = JSON.parse(localStorage.getItem('books'));
    const newBook = {
        id: document.getElementById('bookId').value,
        name: document.getElementById('bookName').value,
        subject: document.getElementById('bookSubject').value,
        author: document.getElementById('bookAuthor').value,
        title: document.getElementById('bookTitle').value,
        version: document.getElementById('bookVersion').value,
        quantity: parseInt(document.getElementById('bookQuantity').value),
        available: parseInt(document.getElementById('bookQuantity').value),
        addedAt: new Date().toISOString()
    };
    
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    
    document.getElementById('addBookResult').innerHTML = '<p style="color:green;">Book added successfully!</p>';
    e.target.reset();
}

// Update Book
function updateBook(e) {
    e.preventDefault();
    
    const bookId = document.getElementById('updateBookId').value;
    const newQuantity = parseInt(document.getElementById('updateBookQuantity').value);
    const books = JSON.parse(localStorage.getItem('books'));
    
    const book = books.find(b => b.id == bookId);
    
    if (!book) {
        document.getElementById('updateBookResult').innerHTML = '<p style="color:red;">Book not found!</p>';
        return;
    }
    
    // Calculate difference in quantity
    const diff = newQuantity - book.quantity;
    book.quantity = newQuantity;
    book.available += diff; // Adjust available copies
    
    localStorage.setItem('books', JSON.stringify(books));
    
    document.getElementById('updateBookResult').innerHTML = '<p style="color:green;">Book updated successfully!</p>';
    e.target.reset();
}

// Delete Book
function deleteBook(e) {
    e.preventDefault();
    
    const bookId = document.getElementById('deleteBookId').value;
    const books = JSON.parse(localStorage.getItem('books'));
    const initialLength = books.length;
    
    const updatedBooks = books.filter(b => b.id != bookId);
    
    if (updatedBooks.length === initialLength) {
        document.getElementById('deleteBookResult').innerHTML = '<p style="color:red;">Book not found!</p>';
        return;
    }
    
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    document.getElementById('deleteBookResult').innerHTML = '<p style="color:green;">Book deleted successfully!</p>';
    e.target.reset();
}

// Display All Transactions
function displayAllTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions'));
    const books = JSON.parse(localStorage.getItem('books'));
    const students = JSON.parse(localStorage.getItem('students'));
    const contentDiv = document.getElementById('main-content');
    
    if (transactions.length === 0) {
        contentDiv.innerHTML = '<h3>No transactions recorded yet</h3>';
        return;
    }
    
    let html = `
        <section class="form-container">
            <h2>All Transactions</h2>
            <table class="transaction-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book</th>
                        <th>Student</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Return Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    transactions.forEach(transaction => {
        const book = books.find(b => b.id == transaction.bookId);
        const student = students.find(s => s.id == transaction.studentId);
        
        html += `
            <tr>
                <td>${transaction.id}</td>
                <td>${book?.name || 'Unknown'} (ID: ${transaction.bookId})</td>
                <td>${student?.name || 'Unknown'} (ID: ${transaction.studentId})</td>
                <td>${new Date(transaction.issueDate).toLocaleDateString()}</td>
                <td>${new Date(transaction.dueDate).toLocaleDateString()}</td>
                <td>${transaction.returnDate ? new Date(transaction.returnDate).toLocaleDateString() : '-'}</td>
                <td>${transaction.status}</td>
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

// Search Book
function searchBook(e) {
    e.preventDefault();
    
    const bookId = document.getElementById('searchBookId').value;
    const books = JSON.parse(localStorage.getItem('books'));
    const book = books.find(b => b.id == bookId);
    
    if (!book) {
        document.getElementById('searchBookResult').innerHTML = '<p style="color:red;">Book not found!</p>';
        return;
    }
    
    let html = `
        <div class="book-details">
            <h3>Book Details</h3>
            <p><strong>ID:</strong> ${book.id}</p>
            <p><strong>Name:</strong> ${book.name}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Subject:</strong> ${book.subject}</p>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Version:</strong> ${book.version}</p>
            <p><strong>Total Quantity:</strong> ${book.quantity}</p>
            <p><strong>Available:</strong> ${book.available}</p>
        </div>
    `;
    
    document.getElementById('searchBookResult').innerHTML = html;
}

// Logout function
function logout() {
    localStorage.removeItem('librarianToken');
    alert('Logging out.....');
    window.location.href = 'index.html';
}







