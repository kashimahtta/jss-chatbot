const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function timeNow() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function addMessage(role, html) {
  const row = document.createElement("div");
  row.className = "msg-row " + role;

  const av = document.createElement("div");
  av.className = "msg-av";
  av.textContent = role === "bot" ? "K" : "Y";

  const col = document.createElement("div");
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = html;

  const time = document.createElement("div");
  time.className = "msg-time";
  time.textContent = timeNow();

  col.appendChild(bubble);
  col.appendChild(time);
  row.appendChild(av);
  row.appendChild(col);
  chatBody.appendChild(row);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "typing-row";
  row.id = "typingRow";
  row.innerHTML = `<div class="msg-av" style="background:linear-gradient(155deg,var(--navy-800),var(--navy-950));color:var(--gold-300);display:flex;align-items:center;justify-content:center;">K</div>
    <div class="typing-dots"><span></span><span></span><span></span></div>`;
  chatBody.appendChild(row);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTyping() {
  const row = document.getElementById("typingRow");
  if (row) row.remove();
}

function respond(query) {
  addMessage("user", escapeHtml(query));
  chatInput.value = "";
  sendBtn.disabled = true;
  showTyping();

  const delay = reduceMotion ? 60 : 500 + Math.random() * 500;
  setTimeout(() => {
    hideTyping();
    const match = matchKB(query);
    addMessage("bot", match ? match.answer : FALLBACK);
    sendBtn.disabled = false;
    chatInput.focus();
  }, delay);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = chatInput.value.trim();
  if (!val) return;
  respond(val);
});

document.querySelectorAll(".topic-chip, .suggest-chip").forEach((btn) => {
  btn.addEventListener("click", () => respond(btn.dataset.q));
});

clearBtn.addEventListener("click", () => {
  chatBody.innerHTML = "";
  seedGreeting();
});

function seedGreeting() {
  addMessage(
    "bot",
    `Hello! I'm <b>kashiAI</b>, the virtual assistant for JSS Academy of Technical Education, Noida. Ask me anything about admissions, academics, campus life, research, placements or contact details — or tap a topic on the left to get started.`,
  );
}

seedGreeting();
