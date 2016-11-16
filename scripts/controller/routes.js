/* Routing for single page web app*/

page('/', geoLocation.getLocation);
page('/about', aboutController.reveal);

page();
