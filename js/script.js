$(document).ready(function(){
    $( "#draggable" ).draggable();

    $( "#accordion" ).accordion({
        collapsible: true
    });

    // autocomplete

    var data=[
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "SQL",
        "Python"
    ];

    $( "#subject" ).autocomplete({
        source: data
      });
    

    //   drag and drop

    $( function() {
        $( "#drag_me" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      } );

      // Resizable
      
      $( function() {
        $( "#resizable" ).resizable();
      } );

      // Animate RESIZABLE

      $( function() {
        $( "#animate" ).resizable({
          animate: true
        });
      } );

      $( function() {
        $( "#selectable" ).selectable();
      } );

      $( function() {
        $( "#sortable" ).sortable();
      } );

      // portlet

      $( function() {
        $( ".column" ).sortable({
          connectWith: ".column",
          handle: ".portlet-header",
          cancel: ".portlet-toggle",
          placeholder: "portlet-placeholder ui-corner-all"
        });
     
        $( ".portlet" )
          .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
          .find( ".portlet-header" )
            .addClass( "ui-widget-header ui-corner-all" )
            .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
     
        $( ".portlet-toggle" ).on( "click", function() {
          var icon = $( this );
          icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
          icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
        });
      } );

      // Sortable INCLUDE & EXCLUDE ITEMS
      
      $( function() {
        $( "#sortable1" ).sortable({
          items: "li:not(.ui-state-disabled)"
        });
     
        $( "#sortable2" ).sortable({
          cancel: ".ui-state-disabled"
        });
     
        $( "#sortable1 li, #sortable2 li" ).disableSelection();
      } );

      // widget button DEFAULT STYLE

      $( function() {
        $( ".widget input[type=submit], .widget a, .widget button" ).button();
        $( "button, input, a" ).on( "click", function( event ) {
          event.preventDefault();
        } );
      } );

      // widget button CSS

      $( function() {
        $( ".widget button" )
          .eq( 0 ).button()
          .end().eq( 1 ).button( {
            icon: "ui-icon-gear",
            showLabel: false
          } ).end().eq( 2 ).button( {
            icon: "ui-icon-gear"
          } ).end().eq( 3 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "end"
          } ).end().eq( 4 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "top"
          } ).end().eq( 5 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "bottom"
          } );
      } );
     
      // Checkboxradio

      $( function() {
        $('input [type="radio"]').checkboxradio();
        $( "fieldset" ).controlgroup();
        if(this.checked == true){
          this.checked = false;
        }
        else {
          this.checked = true;
      }

      } );
});



