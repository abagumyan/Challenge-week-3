
function switchChannel(channelName) {
    console.log('Tuning into channel, ' + channelName); 
    document.getElementById('current_channel_name').innerHTML = channelName;
    //get element with ID locationRef and assign it to variable item
    var item = document.getElementById('locationRef');
    //Insert the content requested in the app bar to link to W3W site
    item.innerHTML = ' UPGRADING.NEVER.HELPS';
    //Setting the href atribute to link the content to https://what3words.com/
    item.setAttribute("href", "https://what3words.com/");    
   
}
function emptyStar() {
  $('#likestar').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');    
}
function filledStar() {
 $('#likestar').attr('src','http://ip.lfe.mw.tum.de/sections/star.png' );
}
function selectTab(tabId){
    //Removing the selection from every button in the tab bar using a nested selector
    $('#tab-bar .selected').removeClass('selected');
    //Adding the slection(class selected) to the clicked button with tabId from the argument
    $(tabId).addClass('selected');
    console.log('Changing to tab',tabId);
}
function emoji_available() {
    $('#emojis').toggle();
}