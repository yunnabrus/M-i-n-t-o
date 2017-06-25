
$(document).ready(function() {    
    fillCarousel();
    fillCollapse();
})

function fillCarousel() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(0, 10);

    $.each (tabList, function (key, item) {
        $(` <li data-target="#carousel-example-generic" class="carousel-indicator" data-slide-to="`+ key +`"></li>`).appendTo($('.carousel-indicators'));                           
            
            $(` <div class="item">
                            <img src="` + item.url + `" alt="photos color">
                            <div class="carousel-caption"></div>
                        </div>
                           `).appendTo($('.carousel-inner'));                           
            });

            $('.carousel-indicator').first().addClass('active');
            $('.item').first().addClass('active');
            $('.carousel').carousel();
        },
        error: function() { alert('Nothing');}    
    });
}

var a = document.createElement('div');
a.className = 'carousel slide';
var b = document.getElementById('mintoCar');

b.appendChild(a);

function fillCollapse() {
     $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
             var tabList = data.slice(0, 5);         

   $.each (tabList, function (key, item) {
            $(` <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="heading` + key +`">
                        <h4 class="panel-title">
                           <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse` + key +`" aria-expanded="true" aria-controls="collapse` + key +`">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapse` + key +`" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading` + key +`">
                        <div class="panel-body">
                            ` + item.body + `
                         </div>                     
                    </div>
                </div>
                            `).appendTo($('#someFacts'));

                           
             });  

             $('.collapse').collapse();
         },
         error: function() { alert('Nothing');}        
     });
 }

// var c = document.createElement('div');
// c.className = 'panel-default';
// var d = document.getElementById('someFacts');

// d.appendChild(c);




