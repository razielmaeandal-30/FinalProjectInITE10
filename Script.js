/* LOGIN */
function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    const correctUser = "Andal";
    const correctPass = "12345";

    errorMsg.textContent = "";

    /* RANDOM ERROR MESSAGE LISTS */
    const wrongEmailMsgs = [
        "Email not found.",
        "This email is not registered.",
        "Incorrect email. Try again.",
        "Email does not match our records."
    ];

    const wrongPassMsgs = [
        "Incorrect password.",
        "Wrong password. Try again.",
        "Password does not match.",
        "Password is incorrect."
    ];

    const wrongBothMsgs = [
        "Invalid email or password.",
        "Your login details are incorrect.",
        "Credentials not recognized.",
        "Login failed. Please try again."
    ];

    function randomMsg(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    /* VALIDATION */
    if (user !== correctUser && pass !== correctPass) {
        errorMsg.textContent = randomMsg(wrongBothMsgs);
        return;
    }
    if (user !== correctUser) {
        errorMsg.textContent = randomMsg(wrongEmailMsgs);
        return;
    }
    if (pass !== correctPass) {
        errorMsg.textContent = randomMsg(wrongPassMsgs);
        return;
    }

    // SUCCESS
    document.getElementById("login-section").style.display = "none";
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("portfolio").style.display = "block";
    
    switchPage("home");
}

/* SHOW / HIDE PASSWORD */
const toggleBtn = document.getElementById("togglePass");
const passField = document.getElementById("password");

toggleBtn.addEventListener("click", () => {
    if (passField.type === "password") {
        passField.type = "text";
        toggleBtn.textContent = "Hide";
        toggleBtn.setAttribute("aria-label", "Hide password");
    } else {
        passField.type = "password";
        toggleBtn.textContent = "Show";
        toggleBtn.setAttribute("aria-label", "Show password");
    }
});

/* ENTER key login */
document.addEventListener("keydown", e => {
    if (e.key === "Enter") login();
});

/* LOGOUT with confirmation */
function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        location.reload();
    }
}

/* PAGE SWITCH */
function switchPage(pageId) {
    document.querySelectorAll(".page-section").forEach(s => s.style.display = "none");
    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
    document.getElementById("link-" + pageId).classList.add("active");
}

/* SIDEBAR COLLAPSE */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
}

/* DARK MODE */
const themeIcon = document.getElementById("theme-icon");
themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeIcon.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

/* PROJECT MODAL */
function openProject(project) {
    const modal = document.getElementById("project-modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    if (project === "python") {
        modalImg.src = "ProjectGame.jpg";
        modalTitle.textContent = "Python Quiz Game – “Who Wants to Be a Billionaire”";
        modalDesc.textContent =
            "A Python-based command-line quiz game featuring multiple-choice programming questions. " +
            "Includes scoring, shuffled questions, validation, and fun feedback messages. " +
            "Built using loops, lists, functions, and core Python logic.";
    }

    if (project === "csharp") {
        modalImg.src = "Csharp.jpg";
        modalTitle.textContent = "C# Console Login Program";
        modalDesc.textContent =
            "A console-based login authentication system with limited attempts. " +
            "Showcases conditional statements, loops, and secure input handling.";
    }

    if (project === "loginui") {
        modalImg.src = "ProjectLogin.jpg";
        modalTitle.textContent = "Login UI Website (HTML, CSS, JavaScript)";
        modalDesc.textContent =
            "A fully functional and responsive login UI. Features input validation, " +
            "dark theme, centered layout, and modern interactive design.";
    }

    modal.style.display = "flex";
}

function closeProject() {
    document.getElementById("project-modal").style.display = "none";
}

/* FADE ANIMATION */
const faders = document.querySelectorAll(".fade-section");

function showSections() {
    faders.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) sec.classList.add("show");
    });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);
