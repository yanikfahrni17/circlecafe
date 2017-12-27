
var ConferenceService = function() {
    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var session = null;
        var l = sessions.length;
        for (var i=0; i < l; i++) {
            if (sessions[i].id === id) {
                session = sessions[i];
                break;
            }
        }
        deferred.resolve(session);
        return deferred.promise();
    }
    this.findByName = function(searchKey) {

        var deferred = $.Deferred();
        var results = sessions.filter(function(element) {
            var fullName = element.date + " " + element.eventName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();

    }

}
	var sessions = [
        { "id":0,"title":"Am Grosshöchstetter Herbstmärit haben wir von 17:00 für euch geöffnet!","date":"25.10.2017","eventName":"Grosshöchstetter Herbstmärit","pic":"market.jpg","time":"25.10.2017, Türöffnung 17:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"timkim","description":"Wir haben am Herbstmärit von 17:00 bis 00:30 geöffnet! Happy Hour von 18:00 bis 19:00: 2 für 1 Bier!!!"},
        { "id":1,"title":"Halloween Kostümparty am 28.10.2017. Türöffnung 20:00! Come dressed up to kill","date":"28.10.2017","eventName":"Halloween Kostümparty","pic":"halloween.jpg","time":"28.10.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"brucelefebvre","description":"Zu Halloween feiern wir am 28.10.2017 eine Kostümparty im Gewölbekeller. Kommt vorbei wenn ihr euch traut."},
        { "id":2,"title":"Champions League 4. Spieltag","date":"31.10.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"31.10.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"brettrudd","description":"Champions League 4. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
        { "id":3,"title":"Champions League 4. Spieltag","date":"01.11.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"01.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"infil00p","description":"Champions League 4. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
        { "id":4,"title":"WM Qualifikation Nordirland - Schweiz","date":"09.11.2017","eventName":"WM Qualifikation","pic":"schweiz.jpg","time":"09.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"aniskadri","description":"Hinspiel der WM Qualifikation Barage zwischen der Schweiz und Nordirland. Kommt vorbei und fiebert mit der Schweizer Nati mit um den Einzug zur Weltmeisterschaft!"},
        { "id":5,"title":"WM Qualifikation Schweiz - Nordirland","date":"12.11.2017","eventName":"WM Qualifikation","pic":"schweiz.jpg","time":"12.11.2017, Türöffnung 18:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"planetrumsey","description":"Rückspiel der WM Qualifikation Barage zwischen der Schweiz und Nordirland. Kommt vorbei und schaut der Schweizer Nationalmannschaft beim letzten Qualifikationsspiel zu!"},
        { "id":6,"title":"Champions League 5. Spieltag","date":"21.11.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"01.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"infil00p","description":"Champions League 5. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
		{ "id":7,"title":"Champions League 5. Spieltag","date":"22.11.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"01.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"infil00p","description":"Champions League 5. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
		{ "id":8,"title":"Champions League 6. Spieltag","date":"05.12.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"01.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"infil00p","description":"Champions League 6. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
		{ "id":9,"title":"Champions League 6. Spieltag","date":"06.12.2017","eventName":"Champions League","pic":"championsleague.jpg","time":"01.11.2017, Türöffnung 20:00","room":"Circle Café Underground, Dorfstrasse 1A, 3506 Grosshöchstetten","twitter_id":"infil00p","description":"Champions League 6. Spieltag live im Circle Café! Wir probieren immer den bestmöglichsten Match oder die Konferenz live zu übertragen."},
	];
/*
	var theData = { testdata: [
						{headerTitle:"Shop Page", weekDay:"Wednesday"},
						{headerTitle:"Shop Page2", weekDay:"Monday"},
						{headerTitle:"Shop Page3", weekDay:"Sunday"},
	]};
	*/


