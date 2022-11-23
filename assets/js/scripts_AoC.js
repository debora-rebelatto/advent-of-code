const copyText = () => {
  var copyText = document.getElementById("code-leaderboard");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

const handleClick = () => {
  document.querySelector(".mobile-menu").classList.toggle("active");
};