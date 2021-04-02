 
// Slick arrows control on resize
$(window).on('resize', function () {
    var slidesLength = $('.slick-slide').length - 1;
    if ($(window).width() > 1050) {
        if (slidesLength < 3) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 3);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 3);
    }

    if ($(window).width() < 1050) {
        if (slidesLength < 2) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 2);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 2);
    }
    if ($(window).width() < 768) {
        if (slidesLength < 1) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 1);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 1);
    }
});
// END Slick arrows control on resize

$(document).ready(function(){

    // Data
    var pets = [
        {
            id: 1,
            img: './assets/images/pets-katrine.svg',
            name: 'Katrine',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
            age: '2 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 2,
            img: './assets/images/pets-jennifer.svg',
            name: 'Jennifer',
            breed: 'Dog - Labrador',
            petDescripton: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won"t hesitate to play up a storm in the house if she has all of her favorite toys',
            age: '3 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 3,
            img: './assets/images/pets-woody.svg',
            name: 'Woody',
            breed: 'Dog - Golden Retriever',
            petDescripton: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
            age: '4 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 4,
            img: './assets/images/pets-sophia.svg',
            name: 'Sophia',
            breed: 'Dog - Shih tzu',
            petDescripton: 'Sophia here and I"m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I"m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'

        },
        {
            id: 5,
            img: './assets/images/pets-timmy.svg',
            name: 'Timmy',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
            age: '5 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 6,
            img: './assets/images/pets-charly.svg',
            name: 'Charly',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
            age: '6 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 7,
            img: './assets/images/pets-scarlet.svg',
            name: 'Scarlett',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 8,
            img: './assets/images/pets-freddie.svg',
            name: 'Freddie',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },

         {
            id: 9,
            img: './assets/images/pets-timmy.svg',
            name: 'Timmy',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
            age: '5 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 10,
            img: './assets/images/pets-charly.svg',
            name: 'Charly',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
            age: '6 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },


        {
            id: 11,
            img: './assets/images/pets-woody.svg',
            name: 'Woody',
            breed: 'Dog - Golden Retriever',
            petDescripton: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
            age: '4 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 12,
            img: './assets/images/pets-sophia.svg',
            name: 'Sophia',
            breed: 'Dog - Shih tzu',
            petDescripton: 'Sophia here and I"m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I"m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'

        },
        {
            id: 13,
            img: './assets/images/pets-katrine.svg',
            name: 'Katrine',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
            age: '2 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 14,
            img: './assets/images/pets-jennifer.svg',
            name: 'Jennifer',
            breed: 'Dog - Labrador',
            petDescripton: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won"t hesitate to play up a storm in the house if she has all of her favorite toys',
            age: '3 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },



        {
            id: 15,
            img: './assets/images/pets-scarlet.svg',
            name: 'Scarlett',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 16,
            img: './assets/images/pets-freddie.svg',
            name: 'Freddie',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 17,
            img: './assets/images/pets-katrine.svg',
            name: 'Katrine',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
            age: '2 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 18,
            img: './assets/images/pets-jennifer.svg',
            name: 'Jennifer',
            breed: 'Dog - Labrador',
            petDescripton: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won"t hesitate to play up a storm in the house if she has all of her favorite toys',
            age: '3 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 19,
            img: './assets/images/pets-woody.svg',
            name: 'Woody',
            breed: 'Dog - Golden Retriever',
            petDescripton: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
            age: '4 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 20,
            img: './assets/images/pets-sophia.svg',
            name: 'Sophia',
            breed: 'Dog - Shih tzu',
            petDescripton: 'Sophia here and I"m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I"m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'

        },
        {
            id: 21,
            img: './assets/images/pets-timmy.svg',
            name: 'Timmy',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
            age: '5 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 22,
            img: './assets/images/pets-charly.svg',
            name: 'Charly',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
            age: '6 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 23,
            img: './assets/images/pets-scarlet.svg',
            name: 'Scarlett',
            breed: 'Dog - Jack Russell Terrier',
            petDescripton: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 24,
            img: './assets/images/pets-freddie.svg',
            name: 'Freddie',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 25,
            img: './assets/images/pets-katrine.svg',
            name: 'Katrine',
            breed: 'Cat - British Shorthair',
            petDescripton: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
            age: '2 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 26,
            img: './assets/images/pets-jennifer.svg',
            name: 'Jennifer',
            breed: 'Dog - Labrador',
            petDescripton: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won"t hesitate to play up a storm in the house if she has all of her favorite toys',
            age: '3 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 27,
            img: './assets/images/pets-woody.svg',
            name: 'Woody',
            breed: 'Dog - Golden Retriever',
            petDescripton: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
            age: '4 months',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'
        },
        {
            id: 28,
            img: './assets/images/pets-sophia.svg',
            name: 'Sophia',
            breed: 'Dog - Shih tzu',
            petDescripton: 'Sophia here and I"m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I"m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
            age: '1 month',
            inoculations: 'none',
            diseases: 'none',
            parasites: 'none'

        }
    ];

    // Navigation menu
    $('.nav-menu a').on('click', function(){
        $('.nav-menu a').removeClass('active');
        $(this).addClass('active');
    });
    // End Navigation menu

    // Mobile navigation menu
    $('.mob-nav-menu span a').on('click', function(){
        $('.mob-container').css('display','none');

        $('.mob-nav-menu span a').removeClass('active');
        $(this).addClass('active');
    });

    $('.burger-open').on('click', function(){
        $('.mob-container').css('display','block');
        $('body').addClass('noscroll');
    });
    $('.burger-close').on('click', function(){
        $('.mob-container').css('display','none');
        $('body').removeClass('noscroll');
    });
    // End Mobile navigation menu

    
    // Scroll
    $('.shelter-about, .shelter-contacts, .shelter-help').on('click', function(){
         $('body').removeClass('noscroll');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function(){
                window.location.hash = hash;
            });
        } 
    });

    $('.to-shelter-help').on('click', function(){
        window.location.replace("index.html#sc-3");
    });
    // End Scroll


    // Slick-slider
    $('.pets-slider').slick({
        infinite: false,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        prevArrow: $('.prev-our-friend'),
        nextArrow :$('.next-our-friend')
        }).on('afterChange', function(event, slick, currentSlide, nextSlide){
            var slidesLength = $('.slick-slide').length - 1;

            var prevEnd = $(".slick-slide:eq(0)").attr('aria-hidden');
              if (prevEnd == 'false') {
                $('.prev-our-friend').addClass('no-prev-slide');
              }
              else{
                $('.prev-our-friend').removeClass('no-prev-slide');
              }
            var nextEnd = $(".slick-slide:eq("+ slidesLength +")").attr('aria-hidden');
              if (nextEnd == 'false') {
                $('.next-our-friend').addClass('no-next-slide');
              }
              else{
                $('.next-our-friend').removeClass('no-next-slide');
              }
    });
    
    // slick arrows control
    if ($(window).width() > 1050) {
        var slidesLength = $('.slick-slide').length - 1;
        if (slidesLength < 3) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 3);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 3);
    }
    if ($(window).width() < 1050) {
        var slidesLength = $('.slick-slide').length - 1;
        if (slidesLength < 2) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 2);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 2);
    }
    if ($(window).width() < 768) {
        var slidesLength = $('.slick-slide').length - 1;
        if (slidesLength < 1) {
            $('.next-our-friend').addClass('no-next-slide');
        }
        else{
            $('.next-our-friend').removeClass('no-next-slide');
        }
         
        $('.pets-slider').slick('slickSetOption', 'slidesToShow', 1);
        $('.pets-slider').slick('slickSetOption', 'slidesToScroll', 1);
    }
    // End Slick-slider


    // Pagination
    function stepPrevPage(next){
        if (next == 1) {
            var currentPage =  parseInt($('.page-current').val()) - 1;
        }
        if (next == 2){
            var currentPage =  parseInt($('.page-current').val()) - 2;
        }

        var countPages =  Math.ceil(pets.length / 8 );

        if(next == 1){
            if (currentPage <  countPages){
                $('.all-pets').html('');
                $('.page-current').val(currentPage);
                var end = currentPage*8;
                var start = end - 8;
                if (end >= pets.length )
                {
                    end = pets.length;
                }
                for (var i = start; i < end; i++)
                {
                    $('.all-pets').append(
                        '<div class="pet">'+
                        '<div class="pet-description">' +
                        '<img src="'+ pets[i].img+ '"' + 'alt="img-katrine"'+'>'+
                        '<p>'+ pets[i].name +'</p>' +
                        '<a href="#" href="javascript:void(0)"  class="learn-more" data-petID="' + pets[i].id + '">Learn more</a>' +
                        '</div>'+
                        '</div>'
                    );
                }
            }
        }

        if(next == 2){
            if ( (currentPage+2) <= countPages){
                $('.all-pets').html('');
                var nextCurrentPage;
                $('.page-current').val(currentPage);

                var end = (currentPage)*8;
                var start = end - 8;
                if (end >= pets.length )
                {
                    end = pets.length;
                }
                for (var i = start; i < end; i++)
                {
                    $('.all-pets').append(
                        '<div class="pet">'+
                        '<div class="pet-description">' +
                        '<img src="'+ pets[i].img+ '"' + 'alt="img-katrine"'+'>'+
                        '<p>'+ pets[i].name +'</p>' +
                        '<a href="javascript:void(0)"  class="learn-more" data-petID="' + pets[i].id + '">Learn more</a>' +
                        '</div>'+
                        '</div>'
                    );
                }
            }
        }
    }

    function stepNextPage(next){
        var currentPage =  parseInt($('.page-current').val()) ;
        var countPages =  Math.ceil(pets.length / 8 );

        if(next == 1){
            if (currentPage <  countPages){
                $('.all-pets').html('');
                var nextCurrentPage;
                nextCurrentPage = currentPage + 1;
                $('.page-current').val(nextCurrentPage);
                var start = currentPage*8;
                var end = start + 8;
                if (end >= pets.length )
                {
                    end = pets.length;
                }
                for (var i = start; i < end; i++)
                {
                    $('.all-pets').append(
                        '<div class="pet">'+
                            '<div class="pet-description">' +
                                '<img src="'+ pets[i].img+ '"' + 'alt="img-katrine"'+'>'+
                                '<p>'+ pets[i].name +'</p>' +
                                '<a href="javascript:void(0)"  class="learn-more" data-petID="' + pets[i].id + '">Learn more</a>' +
                            '</div>'+
                        '</div>'
                    );
                }
            }
        }

        if(next == 2){
            if ( (currentPage+2) <= countPages){
                $('.all-pets').html('');
                var nextCurrentPage;
                nextCurrentPage = currentPage + 2;
                $('.page-current').val(nextCurrentPage);
                var start = (currentPage+1)*8;
                var end = start + 8;
                if (end >= pets.length )
                {
                    end = pets.length;
                }
                for (var i = start; i < end; i++)
                {
                    $('.all-pets').append(
                        '<div class="pet">'+
                        '<div class="pet-description">' +
                        '<img src="'+ pets[i].img + '"' + 'alt="img-katrine"'+'>'+
                        '<p>'+ pets[i].name +'</p>' +
                        '<a href="javascript:void(0)"  class="learn-more" data-petID="' + pets[i].id + '">Learn more</a>' +
                        '</div>'+
                        '</div>'
                    );
                }
            }
        }
    }

    var currentPage = $('.page-current').val();
    if (currentPage == 1) {
        $('.page.step-prev-one').removeClass('page-active ').addClass('page-disabled').attr('disabled', true);
        $('.page.step-prev-two').removeClass('page-active ').addClass('page-disabled').attr('disabled', true);
    }

    $('.step-one, .step-two, .step-prev-one, .step-prev-two').on('click',  function(){
        if($(this).data('click') == '-1' ){
            stepPrevPage(1);
        }
        else if ($(this).data('click') == '-2' ){
            stepPrevPage(2);
        }
        else if ($(this).data('click') == '1'  ){
            stepNextPage(1)
        }
         else if ($(this).data('click') == '2'  ){
            stepNextPage(2)
        }

        var currentPageValue = parseInt($('.page.page-current').val());
        var  countPages =  Math.ceil(pets.length / 8 );
   
        if(currentPageValue < 1){
            $('.page.step-prev-one').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
            $('.page.step-prev-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
        }
        if(currentPageValue == 1){
            $('.page.step-prev-one').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
            $('.page.step-prev-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
        }
        else if(currentPageValue == 2){
            $('.page.step-prev-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
            $('.page.step-prev-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
        }
        else if(currentPageValue > 2){
            $('.page.step-prev-two').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
            $('.page.step-prev-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
        } 

        if(currentPageValue == countPages){
            $('.page.step-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
            $('.page.step-one').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
                if(currentPageValue > 2){
                    $('.page.step-prev-two').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
                }
                else if(currentPageValue > 1){
                    $('.page.step-prev-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
                }
        }
        else if((countPages-currentPageValue) >= 2){
            $('.page.step-two').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
            $('.page.step-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
        }

        else if((countPages-currentPageValue) >= 1){
           $('.page.step-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
            $('.page.step-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
        }
    });

    var countPages =  Math.ceil(pets.length / 8 );
    var petsLength = pets.length;
      if ( petsLength <= 8 ) {
         $('.page.step-one').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
         $('.page.step-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
       }
      if (countPages >= 1 ) {
           var countEnd = 8 ; 
           if(pets.length < countEnd){
              countEnd = pets.length ;
           }
           for (var i = 0; i < countEnd; i++)
           {
               $('.all-pets').append(
                   '<div class="pet">'+
                   '<div class="pet-description">' +
                   '<img src="'+ pets[i].img+ '"' + 'alt="img-katrine"'+'>'+
                   '<p>' + pets[i].name + '</p>' +
                   '<a href="javascript:void(0)"  class="learn-more" data-petID="' + pets[i].id + '">Learn more</a>' +
                   '</div>'+
                   '</div>'
               );
           }
           if (countPages == 2) {
             $('.page.step-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
             $('.page.step-two').removeClass('page-active').addClass('page-disabled').attr('disabled', true);
           }
           if (countPages == 3) {
             $('.page.step-one').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
             $('.page.step-two').removeClass('page-disabled').addClass('page-active').attr('disabled', false);
           }
      }
    // End Pagination  

    // Popup pets
    $(document).on('click','.learn-more', function(){
        $('.learn-more-popup').attr('data-popup', 'learn-more-popup-active');

        $('.pop-pet-description').html('');
        for (var i = 0; i < pets.length; i++)
        {
            if($(this).attr('data-petID') == pets[i].id){
                $('.pop-pet-img').css('background-image','url("'+ pets[i].img +'")');
                 $('.pop-pet-description').append(
                    '<h3> ' + pets[i].name + '</h3>' +
                    '<h4> ' + pets[i].breed + '</h4>' +
                    '<p> ' +  pets[i].petDescripton  + '</p>' +
                    '<ul>' +
                        '<li><h5>Age:</h5><span> ' + pets[i].age + '</span></li>' +
                        '<li><h5>Inoculations:</h5><span> ' + pets[i].inoculations + '</span></li>' +
                        '<li><h5>Diseases:</h5><span> '+  pets[i].diseases + '</span></li>' +
                        '<li><h5>Parasites:</h5><span> ' + pets[i].parasites +'</span></li>' +
                    '</ul>'
                );
                break;
             }
        }
    });

    $(document).on('click','.close-popup', function(){
        $('.learn-more-popup').attr('data-popup', 'learn-more-popup-disabled');
    });
    //End Popup pets
});


