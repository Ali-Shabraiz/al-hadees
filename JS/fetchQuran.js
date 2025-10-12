function getSuratNames(){
    fetch('https://api.alquran.cloud/v1/surah').then(res => {
        res.json()
    }).then(data => {
        console.log(data);
    })
}