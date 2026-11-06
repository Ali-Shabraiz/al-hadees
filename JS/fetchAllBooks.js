const booksContainer = document.querySelector('.booksContainer');
const bookOpened = document.querySelector('#bookOpened');
const openBookTop = document.getElementById('openBookTop');
const cover = document.getElementById('cover');
let nextBackPage, currentPage;
var organizedData;
var allBooks;
var BookData;
let currentHadith, currentLastH, currentStartH, currentTH;
function fetch_books() {
    displayBooksSkeleton(32)
    fetch("https://www.thaqalayn-api.net/api/v2/allbooks").then(res => {
        return res.json();
    }).then(data => {
        booksContainer.innerHTML = '';
        allBooks = data;

        displayBooks(allBooks, data.length);
        // console.log(data);
    }).catch(err => {
        console.log(err)
    });
}
function displayBooksSkeleton(number) {
    for (var i = 0; i <= number; i++) {
        var element = document.createElement('div');
        element.classList.add('bookSkeleton');
        element.innerHTML = `
        <div class="img"></div>
            <div class="content">
                <div class="name"></div>
                <div class="transName"></div>
                <div class="auName"></div>`
        booksContainer.appendChild(element);
    }

}
fetch_books();
function displayBooks(books, length) {
    for (var i = 0; i < length; i++) {
        var book = document.createElement('div');
        book.classList.add('book');
        book.innerHTML = `<img src="${getImageSrc(books[i].bookId)}" alt="">
                          <img class="visibleImg" src="${getImageSrc(books[i].bookId)}" alt="">
            <div class="content">
                <h2 class="name">${books[i].bookId}</h2>
                
                <i class="englishName">${books[i].englishName}</i>
                <q class="authorName">${books[i].author}</q>
                <button class="opener" value="${books[i].bookId}" onclick="getBookData(this.value)"></button>
            </div>
            `
            ;
            console.log(books[i].bookId);
        booksContainer.appendChild(book);
    }
}
function openPage(open, close) {
    document.querySelector(open).classList.remove('close');
    document.querySelector(close).classList.add('close');
    currentPage = open;
    switch (open) {
        case '#hadithOpened': nextBackPage = '#bookOpened';
            break;
        case '#bookOpened': nextBackPage = '#booksContainer';
            break;
        case '#booksContainer': { nextBackPage = ''; currentPage = '';bookData = [];organizedData = [];bookCategoryObjects = []}
            break;
    }

}

function getImageSrc(bookId){
    switch(bookId){
        case "Al-Kafi-Volume-1-Kulayni":
        case "Al-Kafi-Volume-2-Kulayni":
        case "Al-Kafi-Volume-3-Kulayni":
        case "Al-Kafi-Volume-4-Kulayni":
        case "Al-Kafi-Volume-5-Kulayni":
        case "Al-Kafi-Volume-6-Kulayni":
        case "Al-Kafi-Volume-7-Kulayni":
        case "Al-Kafi-Volume-8-Kulayni":
            return "https://thaqalayn.com/images/hadith/covers/1-round.webp"
            break; 
        case "Man-La-Yahduruh-al-Faqih-Volume-1-Saduq":
        case "Man-La-Yahduruh-al-Faqih-Volume-2-Saduq":
        case "Man-La-Yahduruh-al-Faqih-Volume-3-Saduq":
        case "Man-La-Yahduruh-al-Faqih-Volume-4-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/34-round.webp";
            break;
        case "Tahdhib-al-Ahkam-Volume-1-Tusi":
        case "Tahdhib-al-Ahkam-Volume-2-Tusi":
        case "Tahdhib-al-Ahkam-Volume-3-Tusi":
        case "Tahdhib-al-Ahkam-Volume-4-Tusi":
            return "https://thaqalayn.com/images/hadith/covers/41-round.webp";
            break;
        case "Uyun-akhbar-al-Rida-Volume-1-Saduq":
        case "Uyun-akhbar-al-Rida-Volume-2-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/11-round.webp"
            break;
        case "Al-Tawhid-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/14-round.webp";
            break;
        case "Kamil-al-Ziyarat-Qummi":
            return "https://thaqalayn.com/images/hadith/covers/24-round.webp";
            break;
        case "Al-Khisal-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/10-round.webp";
        case "Thawab-al-Amal-wa-iqab-al-Amal-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/23-round.webp";
        case "Maani-al-Akhbar-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/28-round.webp";
        case "Al-Amali-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/29-round.webp";
        case "Al-Amali-Mufid":
            return "https://thaqalayn.com/images/hadith/covers/13-round.webp";
        case "Kamal-al-Din-wa-Tamam-al-Nima-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/39-round.webp";
        case "Kitab-al-Ghayba-Tusi":
            return "https://thaqalayn.com/images/hadith/covers/27-round.webp";
        case "Kitab-al-Ghayba-Numani":
            return "https://thaqalayn.com/images/hadith/covers/22-round.webp";
        case "Mujam-al-Ahadith-al-Mutabara-Muhsini":
            return "https://thaqalayn.com/images/hadith/covers/9-round.webp";
        case "Nahj-al-Balagha-Radi":
            return "https://thaqalayn.com/images/hadith/covers/32-round.webp";
        case "Risalat-al-Huquq-Abidin":
            return "https://thaqalayn.com/images/hadith/covers/33-round.webp";
        case "Kitab-al-Duafa-Ghadairi":
            return "https://thaqalayn.com/images/hadith/covers/17-round.webp";
        case "Kitab-al-Mumin-Ahwazi":
            return "https://thaqalayn.com/images/hadith/covers/30-round.webp";
        case "Kitab-al-Zuhd-Ahwazi":
            return "https://thaqalayn.com/images/hadith/covers/31-round.webp";
        case "Fadail-al-Shia-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/25-round.webp";
        case "Sifat-al-Shia-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/26-round.webp";
        case "Fadail-al-Ashhur-al-Thalatha-Saduq":
            return "https://thaqalayn.com/images/hadith/covers/40-round.webp";

    }
}
function getBookInfo(bookName) {
    var filteredData = allBooks.find(book => book.bookId == bookName);
    console.log(filteredData.bookId);
    bookOpened.innerHTML = `
      <div class="info">
            <img src="${getImageSrc(filteredData.bookId)}" alt="">
            <div class="content">
                <h1>${filteredData.bookId}</h1>
                <h3>${filteredData.englishName}</h3>
                <q>${filteredData.author}</q>
                <i><span class="wt5">Translated by: </span>${filteredData.translator}</i>
            </div>            
        </div>
        <div class="description"><span id="scrollBarDescription"></span><p onscroll="descriptionScroll(this)">${filteredData.bookDescription}<p><div>`
    allCategories(filteredData.idRangeMax);
    displayCategories(bookCategoryObjects);
    openBookTop.click();
}

var bookCategoryObjects = [];
function allCategories(HadithNumber) {
    var filteredData = Number(bookData.find(item => item.id == 1).categoryId);
    var filteredData2 = Number(bookData.find(item => item.id == HadithNumber).categoryId);
    for (var i = filteredData; i <= filteredData2; i++) {
        var categoryInfomation = new Object();
        var data = bookData.find(item => item.categoryId == i);
        categoryInfomation.categoryId = data.categoryId;
        categoryInfomation.category = data.category;
        categoryInfomation.startingHadith = data.id;
        categoryInfomation.lastHadith = bookData.findLast(item => item.categoryId == i).id;
        categoryInfomation.totalHadith = categoryInfomation.lastHadith - data.id + 1;
        categoryInfomation.startingChap = data.chapterInCategoryId;
        categoryInfomation.lastChap = bookData.findLast(item => item.categoryId == i).chapterInCategoryId;
        categoryInfomation.chapters = arangeChaptersData(data.categoryId, categoryInfomation.startingChap, categoryInfomation.lastChap);
        bookCategoryObjects.push(categoryInfomation);

    }
}
function arangeChaptersData(id, start, last) {
    var bookChaptersObjects = new Array();
    for (var i = start; i <= last; i++) {
        var chapterInfomation = new Object();
        var filt = bookData.find(item => item.categoryId == id && item.chapterInCategoryId == i);
        chapterInfomation.chapterId = filt.chapterInCategoryId;
        chapterInfomation.chapter = filt.chapter;
        chapterInfomation.startingHadith = filt.id;
        chapterInfomation.lastHadith = bookData.findLast(item => item.categoryId == id && item.chapterInCategoryId == i).id;
        chapterInfomation.totalHadith = chapterInfomation.lastHadith - filt.id + 1;
        chapterInfomation.hatith = arrangeHdithData(filt.id, chapterInfomation.lastHadith);
        bookChaptersObjects.push(chapterInfomation);
    }
    return bookChaptersObjects;
}
function arrangeHdithData(start, last) {
    // console.log(`Start = ${start}, End =  ${last}`)
    var bookHadithObjects = new Array();
    for (var i = start; i <= last; i++) {
        var hadithInfomation = new Object();
        var filt = bookData.find(hadith => hadith.id == i);
        hadithInfomation.id = filt.id;
        hadithInfomation.arabicText = filt.arabicText;
        hadithInfomation.englishText = filt.englishText;
        hadithInfomation.thaqalaynSanad = filt.thaqalaynSanad;
        hadithInfomation.thaqalaynMatn = filt.thaqalaynMatn;
        bookHadithObjects.push(hadithInfomation)
    }
    // console.log(bookHadithObjects);
    return bookHadithObjects;
}
function displayChapters(data, categoryNumber) {
    // console.log(data)
    for (var i = 0; i < data.length; i++) {
        var element = document.createElement('div');
        element.classList.add('chapter');
        element.innerHTML = `<h4 class="chapterInfo"><span>Chapter ${data[i].chapterId}</span><span>${data[i].totalHadith} Aḥadīth</span></h4>
        <h5 class="chapterName">${data[i].chapter}</h5>
        <button class="opener" onclick="displayHadith(${categoryNumber},${data[i].chapterId})"></Button>`;
        document.querySelector(`#chapters_${categoryNumber}`).appendChild(element);
    }
}
function displayCategories(data) {
    for (var i = 0; i < data.length; i++) {
        // console.log(i);
        var element = document.createElement('div');
        element.classList.add('categoryBox');
        element.innerHTML = `<h1>${data[i].categoryId}</h1>
            <h1>${data[i].category}</h1><span><span class="fa fa-caret-down"></span></span>
            <button class="opener" onclick="openChapters(${data[i].categoryId})"></button>
            `;
        bookOpened.appendChild(element);
        var el = document.createElement('div');
        el.classList.add('chapterBox');
        el.id = `chapters_${data[i].categoryId}`;
        bookOpened.appendChild(el);
        displayChapters(bookCategoryObjects[i].chapters, bookCategoryObjects[i].categoryId);
    }
    organizedData = data;
}
function displayHadith(categoryNumber, chapterNumber) {
    var filt = organizedData.find(hadith => hadith.categoryId == categoryNumber).chapters;
    filt = filt.find(hadith => hadith.chapterId == chapterNumber);
    currentStartH = filt.startingHadith;
    currentTH = filt.totalHadith;
    currentlastH = filt.lastHadith;
    currentHadith = filt.startingHadith;
    var hadith = bookData.find(hadith => hadith.id == currentHadith);
    openPage('#hadithOpened', '#bookOpened');
    hadithOpened.innerHTML = `<h2 class="bookName">Al-Kafi</h2>
        <h2 class="bookNumber" style="color: var(--wt5);">Book ${categoryNumber}, Chapter ${chapterNumber}</h2>
        <h2 class="chapterName">${filt.chapter}</h2>
        <h4>${currentTH} Haidth</h4>
        <div class="hadithData" id="hadithData">
            ${showHadith(currentHadith)}
        </div>`;
}
function displayTranslatedText() {
    var hadith = bookData.find(hadith => hadith.id == currentHadith);
    if (hadith.thaqalaynMatn == '' && hadith.thaqalaynSanad == '') {
        return hadith.englishText;
    }
    else {
        return `<span style="color: var(--wt5)">${hadith.thaqalaynSanad}</span><span>${hadith.thaqalaynMatn}</span>`
    }

}
function showHadith(currentHadith) {
    var hadith = bookData.find(hadith => hadith.id == currentHadith);
    //    var hadithData = document.getElementById('hadithData');
    return `<h3 class="head">Hatith ${currentHadith}</h3>
            <div class="text">
                <section class="englishText">${displayTranslatedText(currentHadith)}</section>
                <p class="arabicText">${hadith.arabicText}</p>
             </div>
             <div class="grading">${showGrading(hadith)}</div>
             `;
}
function showGrading(hadith) {
    var grading = hadith.gradingsFull;
    var string = '';
    for (var i = 0; i < grading.length; i++) {
        string = string + `<div class="gradingBox"><span style="background: ${giveGradingColor(grading[i].grade_ar)}">${grading[i].grade_ar}</span>${grading[i].reference_en}<span><span>${grading[i].author.name_en}</span></div>`;
    }
    return string + `<div class="buttons">
        <button onclick="nextPre(--currentHadith)">Previous</button>
        <button onclick="nextPre(++currentHadith)">Next</button>
        </div>`;
}
function giveGradingColor(string) {
    var str = string.trim();
    console.log(str);

    switch (str) {
        case 'صحيح': return 'oklch(72.3% .219 149.579)';
            break;
        case 'ضعيف': return 'oklch(70.4% .191 22.216)';
            break;
        case 'لم يخرجه': return 'oklch(37.2% .044 257.287)';
            break;
        case 'مرسل': return 'oklch(68.1% .162 75.834)';
            break;
        case 'موثق ول يقصر عن الصحيح': return 'oklch(72.3% .219 149.579)';
            break;
        case 'ضعيف على المشهور': return 'oklch(70.4% .191 22.216)';
            break;
        case 'مجهول': return 'oklch(68.1% .162 75.834)';
            break;
    }
}
function nextPre(number) {
    var filterData = bookData.find(hadith => hadith.id == number);
    var cID = filterData.categoryId, chID = filterData.chapterId;
    if (number >= currentStartH && number <= currentlastH)
        document.getElementById('hadithData').innerHTML = showHadith(number);
    else if (number < currentStartH || number > currentHadith) {

    }
}
function openChapters(number) {
    document.getElementById(`chapters_${number}`).classList.toggle('active');
    document.querySelector('.categoryBox .fa').classList.toggle('active');
}
function getBookData(bookName) {
    bookOpened.innerHTML = '';
    cover.style.display = 'block';
    fetch(`https://www.thaqalayn-api.net/api/v2/${bookName}`).then(res => {
        return res.json();
    }).then(data => {
        bookData = data;
        cover.style.display = 'none';
        openPage('#bookOpened', '#booksContainer');
        // console.log(data);
        getBookInfo(bookName);
    });
}