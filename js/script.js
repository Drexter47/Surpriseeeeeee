document.addEventListener('DOMContentLoaded', () => {
  const answers_no = {
    english: [
      "No",
      "Are you sure?",
      "Are you really sure??",
      "Are you really really sure???",
      "Think again?",
      "Don't believe in second chances?",
      "Why are you being so cold?",
      "Maybe we can talk about it?",
      "I am not going to ask again!",
      "Ok now this is hurting my feelings!",
      "You are now just being mean!",
      "Why are you doing this to me?",
      "Please give me a chance!",
      "I am begging you to stop!",
      "Ok, Let's just start over.."
    ]
  };

  const answers_yes = { english: "Yes" };

  let language = "english";
  const no_button = document.getElementById("no-button");
  const yes_button = document.getElementById("yes-button");
  let i = 1;
  let size = 50;
  let clicks = 0;

  if (!no_button || !yes_button) {
    console.warn("Buttons not found in DOM. Check your HTML IDs.");
    return;
  }

  no_button.addEventListener("click", () => {
    const banner = document.getElementById("banner");
    if (clicks === 0 && banner) {
      banner.src = "images/no.gif";
      refreshBanner();
    }

    clicks++;
    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    const total = answers_no[language].length;

    if (i < total - 1) {
      no_button.innerHTML = answers_no[language][i];
      i++;
    } else {
      alert(answers_no[language][i]);
      i = 1;
      no_button.innerHTML = answers_no[language][0];
      yes_button.innerHTML = answers_yes[language];
      yes_button.style.height = "50px";
      yes_button.style.width = "50px";
      size = 50;
    }
  });

yes_button.addEventListener("click", () => {
  // change banner gif
  const banner = document.getElementById("banner");
  banner.src = "images/yes.gif";
  refreshBanner();

  // 🔥 REMOVE the question completely
  const question = document.getElementById("question-heading");
  if (question) {
    question.remove();
  }

  // hide buttons
  document.querySelector(".buttons").style.display = "none";

  // show success message
  document.querySelector(".message").style.display = "block";
});
  function refreshBanner() {
    const banner = document.getElementById("banner");
    if (!banner) return;
    const src = banner.src;
    banner.src = "";
    // small timeout helps the browser pick up the change on some platforms
    setTimeout(() => {
      banner.src = src;
    }, 10);
  }

  // Expose a small debug helper in case you want to force-remove the question from console:
  window._removeQuestionNow = function() {
    const q = document.getElementById("question-heading");
    if (q) {
      try { q.remove(); } catch (e) { q.style.display = "none"; }
    }
  };
});
