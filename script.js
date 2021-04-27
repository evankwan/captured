const blogCommentForm = document.getElementById('blogCommentForm');
const blogCommentFormNameInput = document.getElementById('name');
const blogCommentFormEmailInput = document.getElementById('email');
const blogCommentFormCommentInput = document.getElementById('comment');
const blogCommentContainer = document.getElementById('blogCommentContainer');

const handleCommentFormSubmit = function(event) {
	event.preventDefault();
	const comment = createNewCommentObject(
		blogCommentFormNameInput.value,
		blogCommentFormEmailInput.value,
		blogCommentFormCommentInput.value
	);
	return comment;
}

const getDayOfWeek = (commentDay) => {
	switch (commentDay) {
		case 0 :
			return 'Sunday'
		case 1 :
			return 'Monday'
		case 2 :
			return 'Tuesday'
		case 3 :
			return 'Wednesday'
		case 4 :
			return 'Thursday'
		case 5 :
			return 'Friday'
		case 6 :
			return 'Saturday'
		default :
			return ' '
	}
}

const getMonthOfYear = (commentMonth) => {
	switch (commentMonth) {
		case 0 :
			return 'January'
		case 1 :
			return 'February'
		case 2 :
			return 'March'
		case 3 :
			return 'April'
		case 4 :
			return 'May'
		case 5 :
			return 'June'
		case 6 :
			return 'July'
		case 7 :
			return 'August'
		case 8 :
			return 'September'
		case 9 :
			return 'October'
		case 10 :
			return 'November'
		case 11 :
			return 'December'
		default :
			return '';
	}
}

const createNewCommentObject = (name, email, comment) => {
	const timeOfComment = new Date;

	return comment = {
    	commenter: name,
    	commenterEmail: email,
		commentDay: getDayOfWeek(timeOfComment.getDay()),
		commentDate: timeOfComment.getDate(),
		commentMonth: getMonthOfYear(timeOfComment.getMonth()),
		commentYear: timeOfComment.getFullYear(),
		commentMessage: comment,
		imageSource: "https://placedog.net/100"
	}
}

blogCommentForm.addEventListener('submit', function(event) {
	const createdComment = handleCommentFormSubmit(event);

	const newCommentContainer = document.createElement("div");
	newCommentContainer.innerHTML = `
		<div class="commentContainer">
			<div class="imageContainer">
				<img src="${createdComment.imageSource}" alt="">
			</div>
			<div class="commentTextContainer">
				<p class="commentByLine"></p>
				<p class="comment"></p>
			</div>
		</div>
	`;

	const commentByLine = newCommentContainer.querySelector('.commentByLine');
	commentByLine.textContent = `${createdComment.commentDay}, ${createdComment.commentMonth} ${createdComment.commentDate}, ${createdComment.commentYear} by ${createdComment.commenter}`;
	console.log(commentByLine);

	const commentMessage = newCommentContainer.querySelector('.comment');
	commentMessage.textContent = `${createdComment.commentMessage}`;

	blogCommentContainer.append(newCommentContainer);
});

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("checked");
})