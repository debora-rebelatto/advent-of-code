const copyText = (value) => {
  var copyText = document.getElementById("copyvalue");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
}

const handleClick = () => {
  document.querySelector(".nav-menu").classList.toggle("active");
};