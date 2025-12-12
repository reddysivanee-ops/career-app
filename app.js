<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Career Path Finder</title>

<style>
    body {
        margin: 0;
        font-family: Poppins, Arial;
        background: #f3f6ff;
    }
    header {
        background: #4a5cf6;
        color: white;
        padding: 18px;


        
        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }
    .container {
        padding: 20px;

    }
    .card {
        background: white;
        padding: 20px;
        margin-top: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .btn {
        display: block;
        width: 100%;
        padding: 12px;
        background: #4a5cf6;
        color: white;
        border: none;
        border-radius: 6px;
        margin-top: 10px;
        font-size: 17px;
        cursor: pointer;
    }
    input {
        width: 100%;
        padding: 12px;
        margin-top: 10px;
        border-radius: 6px;
        border: 1px solid #bbb;
    }
    .hidden {
        display: none;
    }
    .course-item {
        padding: 10px;
        background: #fff;
        margin-top: 10px;
        border-radius: 8px;
        border-left: 4px solid #4a5cf6;
    }
</style>

</head>
<body>

<header>Career Path Finder</header>

<!-- LOGIN PAGE -->
<div id="loginPage" class="container">
    <div class="card">
        <h2>Welcome</h2>
        <p>Sign in to continue</p>

        <input id="email" type="email" placeholder="Email">
        <input id="password" type="password" placeholder="Password">
        <button class="btn" onclick="login()">Sign In</button>

        <p style="text-align:center; margin-top:10px;">New user?
            <a href="#" onclick="showSignup()">Create Account</a>
        </p>
    </div>
</div>

<!-- SIGNUP PAGE -->
<div id="signupPage" class="container hidden">
    <div class="card">
        <h2>Create an Account</h2>
        <input id="newEmail" type="email" placeholder="Email">
        <input id="newPassword" type="password" placeholder="Password">
        <button class="btn" onclick="signup()">Sign Up</button>
    </div>
</div>

<!-- DASHBOARD -->
<div id="dashboardPage" class="container hidden">
    <div class="card">
        <h2>Hello, Student 👋</h2>
        <button class="btn" onclick="showQuiz()">Take Career Quiz</button>
        <button class="btn" onclick="showCourses()">Explore Courses</button>
        <button class="btn" onclick="logout()">Logout</button>
    </div>
</div>

<!-- QUIZ PAGE -->
<div id="quizPage" class="container hidden">
    <div class="card">
        <h2>Career Recommendation Quiz</h2>
        
        <p>1. What subjects do you enjoy?</p>
        <select id="q1">
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
        </select>

        <p>2. What work style suits you?</p>
        <select id="q2">
            <option value="tech">Technical</option>
            <option value="creative">Creative</option>
            <option value="management">Management</option>
        </select>

        <button class="btn" onclick="getRecommendation()">Get Recommendation</button>

        <div id="quizResult" class="card hidden"></div>
    </div>
</div>

<!-- COURSE PAGE -->
<div id="coursePage" class="container hidden">
    <h2>Available Courses</h2>

    <div id="courseList"></div>
    <button class="btn" onclick="goBack()">Back</button>
</div>

<script>
/* -----------------------
   AUTHENTICATION (LOCAL STORAGE)
-------------------------*/
function signup() {
    let email = document.getElementById("newEmail").value;
    let pass = document.getElementById("newPassword").value;

    if (email === "" || pass === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("Account created!");
    showLogin();
}

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (
        email === localStorage.getItem("userEmail") &&
        pass === localStorage.getItem("userPass")
    ) {
        showDashboard();
    } else {
        alert("Invalid credentials");
    }
}

function logout() {
    showLogin();
}

/* -----------------------
   PAGE HANDLERS
-------------------------*/
function showLogin() {
    hideAll();
    document.getElementById("loginPage").classList.remove("hidden");
}

function showSignup() {
    hideAll();
    document.getElementById("signupPage").classList.remove("hidden");
}

function showDashboard() {
    hideAll();
    document.getElementById("dashboardPage").classList.remove("hidden");
}

function showQuiz() {
    hideAll();
    document.getElementById("quizPage").classList.remove("hidden");
}

function showCourses() {
    hideAll();
    document.getElementById("coursePage").classList.remove("hidden");

    let courses = [
        { name: "Engineering", desc: "B.Tech / M.Tech / Diploma" },
        { name: "MBBS", desc: "Doctor / Surgeon / Medical Fields" },
        { name: "B.Com", desc: "Finance / Accounting / Banking" },
        { name: "BA", desc: "Psychology / English / Political Science" },
        { name: "BBA", desc: "Business Management" }
    ];

    let list = document.getElementById("courseList");
    list.innerHTML = "";
    courses.forEach(c => {
        list.innerHTML += `<div class='course-item'><b>${c.name}</b><br>${c.desc}</div>`;
    });
}

function hideAll() {
    document.querySelectorAll(".container").forEach(div => div.classList.add("hidden"));
}

function goBack() {
    showDashboard();
}

/* -----------------------
   QUIZ LOGIC
-------------------------*/
function getRecommendation() {
    let s1 = document.getElementById("q1").value;
    let s2 = document.getElementById("q2").value;

    let result = "";

    if (s1 === "science" && s2 === "tech") result = "You should consider **Engineering / Computer Science**";
    else if (s1 === "science" && s2 === "creative") result = "Try **Biotech / Architecture**";
    else if (s1 === "commerce") result = "You may like **BBA / CA / Banking**";
    else if (s1 === "arts") result = "You may enjoy **BA / Psychology / Law**";
    else result = "Try exploring more options!";

    let div = document.getElementById("quizResult");
    div.innerHTML = "<h3>Recommendation:</h3><p>" + result + "</p>";
    div.classList.remove("hidden");
}
</script>

</body>
</html>
