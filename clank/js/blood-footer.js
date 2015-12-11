var joke_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

var promise = joke_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_joke .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: joke_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_jokes_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
});


var video_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

promise = video_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_video .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: video_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_videos_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
    });


var events_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

promise = events_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_events .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: events_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_events_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
    });

var genre_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

promise = genre_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_genre .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: genre_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_genre_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
    });



var director_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

promise = director_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_director .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: director_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_directors_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
    });


var actor_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["test", "testyyy", "As", "Testt"]
});

promise = actor_engine.initialize();

promise
    .done(function() { console.log('ready to go!'); })
    .fail(function() { console.log('err, something went wrong :('); });

$('#bloodhound_actor .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: actor_engine.ttAdapter()
    }).on('typeahead:selected typeahead:autocompleted', function(e, datum) {
        angular.element('[ng-controller=EntertainController]').scope().add_category(datum, 'settings_actors_selected');
        angular.element('[ng-controller=EntertainController]').scope().$apply();
    });