    (function($) {
        //track index
    var savedIndex = 0;
        // create plug-in
        $.fn.imgslicer = function(customOptions) {
        //track index
            var endIndex = savedIndex;
            var thisCount = this.length;
            if(savedIndex > 0) {
                savedIndex = savedIndex + thisCount;
            }
            else {
                savedIndex = thisCount;
            }
        
            // load default and custom options
            var options = $.extend({
                "cols" : 3,
                "rows" : 3
            }, customOptions);
        
            // set up each imgsplitter object instance on the page (returns 'this' for chainability)
            return this.each(function(index, value) { //imgIndex counts each instance of an image on the page
                var img = $(this);
                var imgWidth = img.width();
                var imgHeight = img.height();
                var imgSrc = img.attr("src");    
                var colWidth = parseInt(imgWidth/options["cols"]);
                var rowHeight = parseInt(imgHeight/options["rows"]);
                
                // create and size the wrapper DIV that will replace image
                img.wrap("<div class ='imgWrapper' id='imgWrapper-" + (endIndex + index) + "'/>");
                var imgWrapper = img.parent();
                img.remove();
                imgWrapper.width(imgWidth);
                imgWrapper.height(imgHeight);
                
                // create slices
                var imgSlices = "";
                for(r=0;r<options["rows"];r++) {
                    for(c=0;c<options["cols"];c++) {
                        imgSlices +="<div class='imgSlice' id='imgSlice-" + (endIndex + index) + "-" + (c+1) + "-" + (r+1) + "' style='width:" + colWidth + "px; height:" + rowHeight + "px; background: url(\"" + imgSrc + "\") -" + c*colWidth + "px -" + r*rowHeight +"px; float: left; position: relative;'>" + "<\/div>";
                    }
                }
                imgWrapper.append(imgSlices);
            });
        }
    })(jQuery);