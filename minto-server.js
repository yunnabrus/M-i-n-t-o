$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(0, 1);

    $.each(tabList, function (key, item) {
            $(` <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            ` + item.body + `
                        </div>
                        </div>
                </div>
                            `).appendTo($('#accordion'));
                });
        },
        error: function() { alert('Nothing'); }
    });
})

$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(1, 2);

    $.each(tabList, function (key, item) {
            $(` <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            ` + item.body + `
                        </div>
                        </div>
                    </div>
                            `).appendTo($('#accordion'));
                });
        },
        error: function() { alert('Nothing'); }
    });
})

$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(2, 3);

    $.each(tabList, function (key, item) {
            $(` <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            ` + item.body + `
                        </div>
                        </div>
                    </div>
                            `).appendTo($('#accordion'));
                });
        },
        error: function() { alert('Nothing'); }
    });
})

$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(3, 4);

    $.each(tabList, function (key, item) {
            $(` <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingfourth">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefourth" aria-expanded="false" aria-controls="collapsefourth">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapsefourth" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfourth">
                        <div class="panel-body">
                            ` + item.body + `
                        </div>
                        </div>
                    </div>
                            `).appendTo($('#accordion'));
                });
        },
        error: function() { alert('Nothing'); }
    });
})

$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'get',
        success: function(data, status, xhr) {
            var tabList = data.slice(4, 5);

    $.each(tabList, function (key, item) {
            $(` <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingfifth">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapsefifth" aria-expanded="false" aria-controls="collapsefifth">
                            ` + item.title + `
                            </a>
                        </h4>
                        </div>
                        <div id="collapsefifth" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingfifth">
                        <div class="panel-body">
                            ` + item.body + `
                        </div>
                        </div>
                    </div>
                            `).appendTo($('#accordion'));
                });
        },
        error: function() { alert('Nothing'); }
    });
})


    

var a = document.createElement('div');
a.className = 'panel-default';
var b = document.getElementById('accordion');

b.appendChild(a);

