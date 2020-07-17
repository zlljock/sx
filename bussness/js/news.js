
const headerEl = document.querySelector("header");

//折叠按钮
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click",()=>{
    headerEl.classList.toggle("open");
})

function cearchNews (page) {
    let _this = this;
    axios({
        headers: {
        },
        method: 'get',
        url: 'https://www.fastmock.site/mock/98a26e03f84de20b51fc6921fcc824ab/shixun/jo?page=' + page,
        params: {
            page: page,
        }
        }).then(function (response) {
            var newsDIV = document.getElementById("news");
            var str = "";
            var res = response.data.list;

            for (var i = 0; i < res.length; i++) {
                str += '<div class="new">' +
                '<h3 class="new-title">' + res[i].title + '</h3></a><p class="new-content">' + res[i].describe + '</p></div>';
                ''
            }
            newsDIV.innerHTML = str;
        }).catch(function (error) {
            console.log(error)
        })
};

window.onload = function() {
    cearchNews(1);
}

