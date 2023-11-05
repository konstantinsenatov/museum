var quadrantsAnimated = 0;
var quadrantsAnimatedMax = 12;
var quadrantsTimer;
$(document).ready(function() {
    if ($('.quadrants').length > 0){
        $('.quadrants__block').on('click',function (){
            event.preventDefault();
            let currentAngle = $(this).data('rotate');
            let angle = currentAngle  ? parseInt(currentAngle) : 0;
            let newAngle = angle + 90;
            $(this).data('rotate', newAngle).css('transform','rotate('+newAngle+'deg)').addClass('active');
            let shadowPosition = newAngle % 360;
            $(this).removeClass('shadow-90 shadow-180  shadow-270').addClass('shadow-'+shadowPosition);
            if (quadrantsTimer){
                clearTimeout(quadrantsTimer);
            }

            quadrantsTimer = setTimeout(function (){
                $('.quadrants__block').removeClass('active');
            }, 400);
        })
        $('.quadrants__block').css('opacity', Math.random() * 0.5 + 0.8);
        for (let i = 0; i < quadrantsAnimatedMax; i++) {
            animateRandomBlocks();
        }
    }
});



function animateBlock($block) {
    quadrantsAnimated++;
    $($block).addClass('animating');
    var animationTime = Math.floor(Math.random() * 2501 + 2000);
    $($block).animate({opacity: 0.2}, animationTime, function() {
        let targetOpacity = Math.random()  + 0.5
        if (targetOpacity > 1) targetOpacity = 1;
        $($block).animate({opacity: targetOpacity}, animationTime, function (){
            $($block).removeClass('animating');
            quadrantsAnimated--;
            animateRandomBlocks();
        });
    });
}

function animateRandomBlocks() {
    let $blocks = $('.quadrants__block').not('.animating');
    if ($blocks.length === 0 || quadrantsAnimated > quadrantsAnimatedMax) {
        return;
    }
    const index = Math.floor(Math.random() * $blocks.length);
    animateBlock($blocks[index]);
}
