var joke_engine = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: ["Doctor", "Food", "Dark Humor", "Adult", "Geek", "Adult Geek", "Dad Jokes"]
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
    local: ["Funny", "Cat", "Educational", "Standups", "Ted Talks", "Talks", "Trailers"]
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
    local: ["Comicons", "Conferences", "Standups", "Dramas", "Theater"]
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
    local: ["Action", "Adventure", "Comedy", "Crime", "Fantasy", "Historical", "Horror", "Mystery", "Political", "Romance", "Science Fiction", "Thriller"]
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
    local: ["Steven spielberg", "Alfred Hitchcock", "Christopher Nolan", "James Cameron"]
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
    local: ["Johnny Depp", "Leonardo DiCaprio", "Tom Hanks", "Al Pacino", "Tom Cruise", "Brad Pitt", "Robert De Niro", "Angilena" +
    " Jolie", "Nicole Kidman", "Kate Winslet", "Scarlett Johansso"]

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