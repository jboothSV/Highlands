
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav

     $('body').on('click','[data-toggle-mobilenav]', function() {
        $(this).parent().toggleClass('active');
    });


     $('body').on('click','[data-menu-toggle-parent]',function(){
        $(this).closest("li").toggleClass("active");
    });

     $('body').on('click','[data-menu-toggle-item]',function(){
        $(this).next().slideToggle();
        $(this).toggleClass('open');
        $(this).prev('div').toggleClass('selected');
    });

    function add_scroll_to_mobile(){
        var $nav =  $('body').find('[data-sv-mainnav]');
        var height = $( window ).height();

        $nav.height(height - 67);  // minus height of nav bar
        $nav.addClass('add-scroll');
        $nav.removeClass('no-scroll');
        $('body').addClass('nav-open');
    }

    function remove_scroll(){
        var $nav = $('body').find('[data-sv-mainnav]');

        $nav.removeClass('add-scroll');
        $nav.addClass('no-scroll');
        $('body').removeClass('nav-open');
    }