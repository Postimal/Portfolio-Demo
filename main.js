document.addEventListener("DOMContentLoaded", function () {
    //    nav toggle class
    $('.menu').click(function () {
        $('.menu').toggleClass('active')
        $('.menu-bar').toggleClass('active')
    })
    // smooth scroll
    $('.smooth a').on("click", function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                }, 800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    }
    );


    // smooth button
    document.querySelector('.arrow').addEventListener("click", function () {
        window.scroll({
            top: 654,
            left: 0,
            behavior: "smooth"
        })

    })


    // Machine typing     dodać migający kursor
    const hText = document.querySelector('#typing');
    const txt = "Ostatecznie nabyłem upragnione umiejętności"
    const paragraf = document.querySelector(".show");

    let indexText = 0


    function myFunction() {

        const addLetter = () => {
            hText.textContent += txt[indexText];
            indexText++;
            if (indexText === txt.length) {
                clearInterval(indexTyping);
                paragraf.classList.add('active');

            }
        }
        const indexTyping = setInterval(addLetter, 200);
    }

    const elem = $('#dreaming');
    let flag = 0;
    $(window).scroll(function () {
        if (flag == false) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
                myFunction(),
                    flag++;
            }
        }
    });

    // Slider click

    const span1 = document.querySelector('#one span');
    const span2 = document.querySelector('#two span');
    const span3 = document.querySelector('#three span');
    const span4 = document.querySelector('#four span');


    const spanList = document.querySelector('.cb-slideshow')
    const string = document.querySelector('.string');

    spanList.firstElementChild.classList.add("active");

    const anime = function () {
        const spansArray = Array.from(spanList.children);
        spansArray.forEach(children => { children.classList.remove("active") });


        const strArray = Array.from(string.children);
        strArray.forEach(children => { children.classList.remove("border") });

        if (this.classList.contains("btn-one")) {
            string.firstElementChild.classList.add("border")
            spanList.firstElementChild.classList.add("active");
        }
        else if (this.classList.contains("btn-sec")) {
            string.children[1].classList.add("border");
            spanList.children[1].classList.add("active");
        }
        else if (this.classList.contains("btn-third")) {
            string.children[2].classList.add("border");
            spanList.children[2].classList.add("active");
        }
        else if (this.classList.contains("btn-fourth")) {
            string.children[3].classList.add("border");
            spanList.children[3].classList.add("active");
        }

    }



    document.querySelector('.btn-one').addEventListener("click", anime);
    document.querySelector('.btn-sec').addEventListener("click", anime);
    document.querySelector('.btn-third').addEventListener("click", anime);
    document.querySelector('.btn-fourth').addEventListener("click", anime)









})