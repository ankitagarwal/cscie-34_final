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
    });