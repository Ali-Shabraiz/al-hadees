var body = document.body
window.addEventListener('scroll', e => {
    var totalH = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = window.scrollY;
    var per = scrolled / totalH;
    document.getElementById('scrollBar').style.width = `${per * 100}%`

});
function descriptionScroll(element) {
    var scrollAble = element.scrollHeight - element.clientHeight;
    var scrolled = element.scrollTop;
    var per = scrolled / scrollAble * 100 + '%';
    document.querySelector('#scrollBarDescription').style.width = per;
}