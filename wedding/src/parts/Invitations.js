function invitations() {
	let change = document.querySelector('.choice__btn-1'),
		invitationContainer = document.querySelector('.invitation-block'),
		invitationContent = invitationContainer.querySelector('.invitation-block__item'),
		invitationContentCopy = invitationContent.cloneNode(true),
		modalContainer = document.querySelector('.invitation-modal'),
		modalContent = modalContainer.querySelector('.invitation-block'),
		modalContentItem = modalContainer.querySelector('.invitation-block__item'),
		invitationContentChildren = invitationContent.querySelectorAll('*'),
		invitationContentCopyChildren = invitationContentCopy.querySelectorAll('*'),
		modalContentChildren = modalContentItem.querySelectorAll('*'),
		removeButton = document.querySelector('.choice__btn-4');


	change.addEventListener('click', () => {
			
		for (let i = 1; i < modalContentChildren.length; i++) {
			modalContentChildren[i].style.border = '2px solid #fa7995';
			modalContentChildren[i].contentEditable = 'true';
		}		
		modalContainer.style.display = 'block';
	});

	modalContainer.addEventListener('click', (e) => {

		if(e.target === modalContainer && e.target !== modalContainer.children) {

			for (let i = 1; i < invitationContentChildren.length; i++) {
				invitationContentChildren[i].innerHTML = modalContentChildren[i].innerHTML;
			};
			modalContainer.style.display = 'none';			
		};
	});

	removeButton.addEventListener('click', () => {
		for (let i = 1; i < invitationContentChildren.length; i++) {
			invitationContentChildren[i].innerHTML = invitationContentCopyChildren[i].innerHTML;
			modalContentChildren[i].innerHTML = invitationContentCopyChildren[i].innerHTML;
		};
	});

}; 

export default invitations;