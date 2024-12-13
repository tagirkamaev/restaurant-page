const loadContactsPage = () => {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const contacts = document.createElement("div");

  const callToAction = document.createElement("h2");
  callToAction.textContent = "Contact our restaurant";
  contacts.appendChild(callToAction);

  const contactDetails = document.createElement("p");
  contactDetails.textContent = "Our phone: +79036752205";
  contacts.appendChild(contactDetails);

  content.appendChild(contacts);
};

export default loadContactsPage;
