var deferredPrompt;
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log("SW Registered");
    });
}
else{
    console.log('SW not registered');
}
window.addEventListener('beforeinstallprompt',function(event){
    console.log('b4 install prompt fired');
    event.preventDefault();
    deferredPrompt=event;
    return false;
});
