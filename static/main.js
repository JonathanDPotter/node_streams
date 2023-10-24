const aboutDialog = document.getElementsByTagName("dialog")[0];
const openDialog = document.getElementById("open-dialog");

openDialog.addEventListener("click", () => {
  aboutDialog.show();
});
