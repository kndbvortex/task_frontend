var hide_modal = (id) => {
  var update_modal = document.getElementById(id);
  update_modal.classList.remove("show");
  update_modal.setAttribute("aria-hidden", "true");
  update_modal.setAttribute("style", "display: none");
  const modalsBackdrops = document.getElementsByClassName("modal-backdrop");
  for (let i = 0; i < modalsBackdrops.length; i++) {
    document.body.removeChild(modalsBackdrops[i]);
  }
};

export default hide_modal;
