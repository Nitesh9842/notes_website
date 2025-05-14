// Google Sign-Up Callback
function handleCredentialResponse(response) {
    // Decode JWT from Google
    const data = parseJwt(response.credential);
    console.log("User Info:", data);

    // Example: Show user data in an alert
    alert(`Welcome ${data.name} (${data.email})`);
}

// Utility function to parse JWT token
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}

// Form toggle functionality
document.getElementById('show-signup').addEventListener('click', function () {
    document.querySelector('.forms').classList.add('active');
});

document.getElementById('show-login').addEventListener('click', function () {
    document.querySelector('.forms').classList.remove('active');
});


