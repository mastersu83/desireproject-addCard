"use strict";

const commentContainer = document.querySelector(".comments__items");
const commentForm = document.querySelector("#formAdd");
const commentInputText = document.querySelector(".comment__input-text");
const nameInput = document.querySelector(".comment__input-name");
const templatecomments = document.querySelector(".template__comments").content;
const avatarImg = document.querySelector(".comments__item-img");
const mail = document.querySelector(".comment__input-mail");
const date = document.querySelector(".comments__date");
const formatter = new Intl.DateTimeFormat("en", {
	month: "long",
	day: "numeric",
	year: "numeric",
});
const month = formatter.format(new Date());

function createCard({ name, text }) {
	const cardItem = templatecomments.cloneNode(true);
	cardItem.querySelector(".comments__item-img").src = "image/avatar.png";
	cardItem.querySelector(".comments__name").textContent = name;
	cardItem.querySelector(".comments__text").textContent = text;
	cardItem.querySelector(".comments__date").textContent = month;
	commentContainer.prepend(cardItem);
}

function addComment(evt) {
	evt.preventDefault();
	let name = nameInput.value;
	let text = commentInputText.value;
	createCard({ name, text });
	commentInputText.value = "";
	nameInput.value = "";
	mail.value = "";
}

commentForm.addEventListener("submit", addComment);

var today = new Date().getMonth();
// document.write(today);
