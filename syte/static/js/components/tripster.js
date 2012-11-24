
function setupTripster(url, el) {
  var href = el.href;

  if ($('#tripster-profile').length > 0) {
    window.location = href;
    return;
  }

  var spinner = new Spinner(spin_opts).spin();
  $('#tripster-link').append(spinner.el);

  require(["text!templates/tripster-view.html"],
    function(tripster_view) {
        var template = Handlebars.compile(tripster_view);

        $(template()).modal().on('hidden', function () {
            $(this).remove();
            adjustSelection('home');
        });

        spinner.stop();

    });
  return;

}
