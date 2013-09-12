// we want strict javascript that fails
// on ambiguous syntax
"using strict";

// to prevent timeout
requirejs.config({
    waitSeconds: 60
});

// do not use notebook loaded  event as it is re-triggerd on
// revert to checkpoint but this allow extension to be loaded
// late enough to work.

$([IPython.events]).on('app_initialized.NotebookApp', function(){

    /**  Use path to js file relative to /static/ dir without leading slash, or
     *  js extension.
     *  Link directly to file is js extension.
     *
     *  first argument of require is a **list** that can contains several modules if needed.
     **/

    // require(['custom/noscroll']);
    // require(['custom/clean_start'])
    // require(['custom/toggle_all_line_number'])
    // require(['custom/gist_it']);

    /**
     *  Link to entrypoint if extension is a folder.
     *  to be consistent with commonjs module, the entrypoint is main.js
     *  here youcan also trigger a custom function on load that will do extra
     *  action with the module if needed
     **/

    // require(['custom/slidemode/main'],function(slidemode){
    //     // do stuff
    // })

    // require(['custom/nikola_deploy'],function(nikola_deploy){
    //
    //   // You can choose to build the whole site activating the cleaner
    //
    //   nikola_deploy.cleaner('True');
    //
    //   console.log('Nikola_deploy extension loaded correctly')
    //
    // })

    // require(['custom/zenmode/main'],function(zenmode){
    //
    //   // You can use other images as a background, just check the
    //   // zenmode/images folder or put there your own background...
    //   // Don't forget to modify properly the the line below:
    //
    //   zenmode.background('images/back12.jpg');
    //
    //   // or if you want an IPython logo you can use:
    //
    //   zenmode.background('images/ipynblogo1.png');
    //
    //   console.log('Zenmode extension loaded correctly')
    //
    // })

     require(['custom/livereveal/main'],function(livereveal){
    //
    //       // livereveal.parameters('theme', 'transition', 'fontsize');
    //       // * theme can be: simple, sky, beige, serif, solarized
    //       // (you will need aditional css for default, night, moon themes).
    //       // * transition can be: linear, zoom, fade, none
    //       // (aditional transitions are cube, page, concave, default).
    //       // * fontsize is in % units, ie. you can choose 150% or 200%
    //
       livereveal.parameters('simple', 'linear', '180%');
    //
       console.log('Live reveal extension loaded correctly')
    //
     })

    // software carpentry tags example.
    /*  require(['custom/swc/main'],function(m){
     *
     *       // param1 : Name of the preset in the dropdown selector
     *       // param2 : namespace to use in metadata
     *       // param3 : list of tags name to use both in UI in front of checkboxes and in metadata
     *
     *       m.new_tag_set('Software Carpentry Tags', 'swc' ,['instructor','learner','exercise'])
     *
     *       console.log('Sofware carpentry tags extension loaded corectly')
     *  })
     */

});