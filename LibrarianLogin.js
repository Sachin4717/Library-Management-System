document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const librarian = document.getElementById('Librarian').value;
    const password = document.getElementById('password').value;

    if (librarian === 'ManjurAlam' && password === 'manjur@2004') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'NitinKumar' && password === 'nitin@2003') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'Sachin' && password === 'sachin@2004') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'Divyanshu' && password === 'divyanshu@2006') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'RahulArya' && password === 'rahul@2005') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";
    } else {
        document.getElementById('message').textContent = 'Invalid Librarian ID or password.';
    }
});