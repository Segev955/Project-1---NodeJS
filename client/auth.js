const URL = "http://localhost:3000/verify";
const USERS = "http://localhost:3000/users";
const EMPLOYEES = "http://localhost:3000/employees";
const DEPARTMENT = "http://localhost:3000/departments";
const SHIFTS = "http://localhost:3000/shifts";
const LOG = "http://localhost:3000/log";

async function checkAuth() {
  const token = sessionStorage.token;

  if (!token) {
    location.href = "./login.html";
    return Promise.reject("No token found");
  }

  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "access-token": token,
      },
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      console.log(data);
      location.href = "./login.html";
      return Promise.reject("Invalid token");
    }
    sessionStorage.fullName = data.user.fullName;
    sessionStorage.userId = data.user.userId;
    userActions();
    return Promise.resolve(data.user);
  } catch (error) {
    console.error("Auth error:", error);
    location.href = "./login.html";
    return Promise.reject("Auth error");
  }
}

async function loadHeader() {
  const headerContainer = document.getElementById("header-container");
  const response = await fetch("header.html");
  const headerHTML = await response.text();
  headerContainer.innerHTML = headerHTML;

  // Set username and attach log-out functionality
  const fullName = sessionStorage.fullName;
  document.getElementById("username").textContent = fullName || "Guest";
  document.getElementById("logout").addEventListener("click", () => {
    sessionStorage.clear();
    location.href = "./login.html";
  });
}

async function userActions() {
  const userId = sessionStorage.userId;

  let resp = await fetch(`${USERS}/${userId}`);
  const user = await resp.json();
  const today = new Date().toISOString().split("T")[0];
  // Reset actions if it's a new day
  if (
    !user.lastActionDate ||
    new Date(user.lastActionDate).toISOString().split("T")[0] !== today
  ) {
    const obj = {
      currentActions: user.numOfActions,
      lastActionDate: new Date(),
    };

    // Update user in DB
    resp = await fetch(`${USERS}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  }

  if (user.currentActions <= 0) {
    alert("Action limit reached. Try again tomorrow.");
    sessionStorage.clear();
    location.href = "./login.html";
  } else {
    let obj = {
      currentActions: user.currentActions - 1,
    };
    resp = await fetch(`${USERS}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    obj = {
      id: user._id,
      maxActions: user.numOfActions,
      date: new Date(user.lastActionDate).toISOString().split("T")[0],
      actionAllows: user.currentActions,
    };
    resp = await fetch(LOG, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    document.getElementById("actions").textContent =
      `Actions: ${user.currentActions}` || "Action";
  }
}
