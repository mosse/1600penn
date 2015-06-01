var app = app || {};

$(function() {
    var visits = [
      { nameLast: 'Roberts', nameFirst: 'Kenneth', nameMid: 'D'},
      { nameLast: 'Russell', nameFirst: 'Joseph', nameMid: 'S'},
      { nameLast: 'Hornsby', nameFirst: 'Leah', nameMid: 'A'}
    ];

    new app.VisitsView( visits );
});