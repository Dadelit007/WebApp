var installBanner = document.getElementById(installBanner);
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
  if(deferredPrompt){
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function(choiceResult){
      console.log(choiceResult.outcome);
      if(choiceResult.outcome === 'dismissed'){
        console.log('user cancelled installation');
      }else{
        console.log('User added to home screen');
      }
    });
    deferredPrompt=null;
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

installBanner.addEventListener('click', openCreatePostModal);

//closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);
