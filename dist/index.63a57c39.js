var searchQuery = /sort_by=(.+)/g.exec(window.location.search);
if (searchQuery === null || searchQuery[1] === "upcoming-events") {
    var eventListContainer = $(".upcoming-events");
    var eventList = eventListContainer.children("a");
    var yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);
    for(i = 0; i < eventList.length; i++){
        var event = eventList[i];
        var eventDate = Date.parse(event.getAttribute("data-date").replaceAll(".", "/"), "yyyy/mm/dd");
        if (eventDate < yesterday) event.classList.add("past-event");
    }
    eventList = eventListContainer.children("a");
    eventList.sort(function(a, b) {
        var event1date = Date.parse(a.getAttribute("data-date").replaceAll(".", "/"), "yyyy/mm/dd");
        var event2date = Date.parse(b.getAttribute("data-date").replaceAll(".", "/"), "yyyy/mm/dd");
        return event1date < event2date ? 1 : event1date > event2date ? -1 : 0;
    });
    eventList.detach().appendTo(eventListContainer);
}

//# sourceMappingURL=index.63a57c39.js.map
