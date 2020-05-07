var getModal = function(config) {
    return $('<div class="modal fade" id="' + config.id + '" tabindex="-1" role="dialog" aria-hidden="true">' + 
        '<div class="modal-dialog modal-lg" role="document">' + 
            '<div class="modal-content">' + 
                '<div class="modal-header">' + 
                    '<h5 class="modal-title text-cyan">' + config.title + '</h5>' + 
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' + 
                        '<span class="text-white" aria-hidden="true">&times;</span>' + 
                    '</button>' + 
                '</div>' + 
                '<div class="modal-body text-white">' + 
                    config.content.html() + 
                '</div>' + 
                '<div class="modal-footer">' + 
                '</div>' + 
            '</div>' + 
        '</div>' + 
    '</div>');
}

var getWorkGalleryItems = function() {
    return [{
        id: 'rainforest_alliance',
        label: 'Rainforest Alliance',
        image: './assets/images/work/rainforest.jpeg',
        desc: 'A site for the Rainforest Alliance conservation efforts. The backend is a headless CMS called Strapi and the frontend uses React.<br /><i class="fa fa-link text-white mr-2" aria-hidden="true"></i><a href="http://146.148.41.238/" target="_blank">Visit site</a><br /><i class="fa fa-github text-white mr-2" aria-hidden="true"></i><a href="https://github.com/dmls/srfolio-fe" target="_blank">Github Repo</a>'
    }, {
        id: 'parallax_tilt',
        label: 'Parallax-Tilt Gallery',
        image: './assets/images/work/parallax-gallery.png',
        desc: 'I created an image gallery with some cool tilt and parallax scrolling effects in React based on a design that was presented to me. It would make for a great product or case study gallery. Some of the effects still need some work in certain mobile browsers.<br /><i class="fa fa-link text-white mr-2" aria-hidden="true"></i><a href="http://danmlsv.com/parallax-gallery" target="_blank">Visit site</a>'
    }, {
        id: 'full_page_slide_nav',
        label: 'Full Page Slide Navigation',
        image: './assets/images/work/slide-nav.png',
        desc: 'A great looking animated full page navigation menu that I saw on a website. I decided to take a stab at rebuilding it on my own. I built this one using React and the animations use good old fashioned CSS/SASS without any JavaScript.<br /><i class="fa fa-link text-white mr-2" aria-hidden="true"></i><a href="http://danmlsv.com/full-page-slide-nav" target="_blank">Visit site</a>'
    }, {
        id: 'dja_ds',
        label: 'DJA Digital Solutions',
        image: './assets/images/work/templategallery-header.jpg',
        desc: 'DJA had a lot of great work and experience to offer perspective clients. The only problem was that they had nowhere to show it off. That changed when we worked on this gallery for them. The items in the gallery are stored in a database file and can be easily edited and added/removed.<br /><i class="fa fa-link text-white mr-2"></i><a href="https://templategallery.dja.com" target="_blank">Visit site</a>'
    }, {
        id: 'bic',
        label: 'BIC Razors Rebate',
        image: './assets/images/work/bic.jpg',
        desc: 'BIC kept coming back for more iterations of a rebate program we worked on for them. Consumers arrive at the site, print out a rebate form, fill it out, and mail it. Administrators receive the form and use a dashboard we developed that has the ability to enter new claims, add new eligible SKUs, validate claims, and fulfill them.'
    }, {
        id: 'modelo',
        label: 'Modelo Gold Cup Sweepstakes',
        image: './assets/images/work/modelo.jpg',
        desc: 'We built a site for Modelo that ran during the 2019 Gold Cup. Users would arrive at the site, register, and then be able to select which teams they thought would win each day\'s match.'
    }, {
        id: 'corepower',
        label: 'Core Power Sweepstakes',
        image: './assets/images/work/corepower.jpg',
        desc: 'A lightweight site for Core Power where users arrive and are instructed to register into a sweepstakes for a chance to win an all expenses paid trip to watch the NCAA Men\'s Basketball Finals along with $500.'
    }, {
        id: 'buckeye',
        label: 'Buckeye Broadband',
        image: './assets/images/work/buckeye.jpg',
        desc: 'Buckeye Broadband\'s eCommerce site that provides customers with the ability to view and purchase plans and services.<br /><i class="fa fa-link text-white mr-2"></i><a href="https://buckeyebroadband.com" target="_blank">Visit site</a>'
    }, {
        id: 'marriott_spin',
        label: 'Marriott Spin Game Prizes',
        image: './assets/images/work/marriott-spinner.jpg',
        desc: 'To show some appreciation for its valued meeting planners, Marriott decided to give away some goodies. The planners were directed to this site where they would register and then play a spin the wheel game which would tell them which prize they would be receiving.'
    }, {
        id: 'judging',
        label: 'Contest Judging Dashboard',
        image: './assets/images/work/judging.jpg',
        desc: 'The folks at an agency that specializes in web based contests wanted to rebuild their existing contest entry judging platform. We spent a while with the people who would be using it to come up with a fresh user experience that had all of the features they wanted. We came up with a utility where administrators can pull contest data from any of their programs, decide which information they want to appear when judging entries whether it be images, videos, or text, and put it all together to up with a fresh new dashboard.'
    }, {
        id: 'locator',
        label: 'Sport Store Locator',
        image: './assets/images/work/locator.jpg',
        desc: 'A sporting goods manufacturer wanted to provide their site visitors with an easy place to find stores that sold their equipment. I created a database of locations that sold their goods and tied it in with Google Maps so that users could search for nearby stores and see that store\'s contact and address info.'
    }, {
        id: 'estimates',
        label: 'Estimate Request and Submission Dashboard',
        image: './assets/images/work/estimates.jpg',
        desc: 'A utility I built for an agency so that sales could put in estimate requests to their development department. The form to create these requests contains all of the most common features that the agency builds into their sites and provides extra fields for custom behavior as well. The development department would be notified of new requests and could price them out with forms of their own, send questions or comments back to the person who submitted, and view all of the requested features that were submitted in the request.'
    }];
}

var getWorkGalleryTile = function(item) {
    var $li = $('<li>', {
        'data-toggle': 'modal',
        'data-target': '#' + item['id']
    });
    var $a = $('<a>', {
        class: 'thumbnail',
        style: 'background-image: url(\'' + item['image'] + '\')'
    });
    var $span = $('<span>', {
        class: 'description',
        text: item['label']
    });

    $a.append($span);
    $li.append($a);

    return $li;
}

var getWorkGalleryModalContent = function(item) {
    var $wrap = $('<div>', {class: 'container'});

    var $row = $('<div>', {class: 'row mb-4'});
    var $col = $('<div>', {class: 'col'});
    var $img = $('<img>', {
        class: 'img-fluid',
        src: item['image']
    });

    $col.append($img);
    $row.append($col);
    $wrap.append($row);

    var $row = $('<div>', {class: 'row'});
    var $col = $('<div>', {
        class: 'col',
        html: item['desc']
    });

    $row.append($col);
    $wrap.append($row);

    return $wrap;
}

var initWorkGallery = function() {
    var items = getWorkGalleryItems();

    // Create gallery tiles & modals
    var $body = $('body');
    for (var i = 0; i <  items.length; ++i) {
        var item = items[i];

        var $li = getWorkGalleryTile(item);
        $('.thumbs').append($li);

        var $modalContent = getWorkGalleryModalContent(item);
        $body.append(getModal({
            id: item.id, 
            title: item.label,
            content: $modalContent
        }));
    }

    // Initialize gallery plugin
    $('.thumbs').each(function() {
        $(this).portfolio({
            cols: 3
        });
    });
}

var initAutoType = function(elementClass, typingSpeed) {
    $(elementClass).each(function() {
        var thhis = $(this);
        thhis.css({
          "position": "relative",
          "display": "inline-block"
        });
        thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
        thhis = thhis.find(".text-js");
        var text = thhis.text().trim().split('');
        var amntOfChars = text.length;
        var newString = "";
        thhis.text("|");
        setTimeout(function(){
          thhis.css("opacity",1);
          thhis.prev().removeAttr("style");
          for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
              setTimeout(function() {        
                newString += char;
                thhis.text(newString);
              },i*typingSpeed);
            })(i+1,text[i]);
          }
        },1500);
    });
}

var initModalPositionFix = function() {
    $(document).on('click', '[data-toggle="modal"]', function() {
        window.scrollTo(0, 0);
    });
}

$(document).ready(function() {
  initWorkGallery();
  initAutoType('.type-js', 150);
  initModalPositionFix();
});
