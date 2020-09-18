self.addEventListener('install',function(event){
    console.log('Installing',event);
});
self.addEventListener('activate',function(event){
    console.log('Activating',event);
    return self.clients.claim();
});
self.addEventListener('fetch',function(event){
    //console.log('Fetching something',event);
});