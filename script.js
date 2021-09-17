const url='https://api.openweathermap.org/data/2.5/'
const key='278d3f305d016c28718e66dd2306557a'

const setQuery = (e) => {
    if(e.keyCode =='13')
    getResult(searchBar.value)
}


const getResult = (cityName) => {
 
console.log(cityName);
}










const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)