$(document).ready(function(){
    $(".collapsibleheader").click(function () {
        $collapsibleheader = $(this);
        //getting the next element
        $collapsiblecontent = $collapsibleheader.next();
        //open up the collapsiblecontent needed - toggle the slide- if visible, slide up, if not slidedown.
        $collapsiblecontent.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of collapsibleheader based on visibility of collapsiblecontent div
            $collapsibleheader.find("span:first-child").text(function () {
                //change text based on condition
                return $collapsiblecontent.is(":visible") ? "- " : "+ ";
            });
        });

    });
});