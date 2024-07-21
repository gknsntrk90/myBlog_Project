const searchIcon = document.getElementById('searchIcon');
const searchEngine = document.getElementById('searchEngine');

//*olay dinleyicisi ekliyoruz click olayı gerçekleşisince işlesin
searchIcon.addEventListener("click", () => {
    //*click işlemi yapıldığında buraya classList eklicez toggle ile
    //*ve eğer toggle içinde active varsa kaldırıcak yoksa ekleme yapacak
    searchEngine.classList.toggle('active')
})