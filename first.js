const button = document.getElementById('navigation-button');
function gotlocation(position){
    console.log(position)

}
function failedToGet(){
    console.log('There was some issue')
}
button.addEventListener('click', async  () =>{
   navigator.geolocation.getCurrentPosition(gotlocation , failedToGet)

})