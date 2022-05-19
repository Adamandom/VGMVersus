
function modalEvents() {
    $("#help_close").click( () => {
        GAME_PAUSED = false
        $("#help_wrapper").fadeOut(200)
        resume_game()
    })

    $("#settings_start").click( () => {
        GAME_PAUSED = false
        applySettings()
        hideSettings()
    })
    $("#settings_close").click( () => {
        GAME_PAUSED = false
        hideSettings()
        resume_game()
    })
    
    $("#songs_dir").keydown( ev => {
        if ( ev.keyCode === 13 ) {
            GAME_PAUSED = false
            applySettings()
            hideSettings()
        }
    })

    // prevent typing impossible values in number fields 
    $("#t_minutes").change( ev => {
        let aboveThreshold = ev.target.value > 9 
        let belowThreshold = ev.target.value < 0 
        let isNaN = isNaN(ev.target.value)
        
        if ( isNaN ) { ev.target.value = 0 }  
        if ( aboveThreshold ) { ev.target.value = 9 }
        if ( belowThreshold ) { ev.target.value = 0 }
    } )
    $("#t_seconds").change( ev => {
        let aboveThreshold = ev.target.value > 59 
        let belowThreshold = ev.target.value < 0 
        let isNaN = isNaN(ev.target.value)
        
        if ( isNaN ) { ev.target.value = 0 }  
        if ( aboveThreshold ) { ev.target.value = 59 }
        if ( belowThreshold ) { ev.target.value = 0 }
    } )
    $("#t_increment").change( ev => {
        let aboveThreshold = ev.target.value > 30 
        let belowThreshold = ev.target.value < 0 
        let isNaN = isNaN(ev.target.value)
        
        if ( isNaN ) { ev.target.value = 0 }  
        if ( aboveThreshold ) { ev.target.value = 30 }
        if ( belowThreshold ) { ev.target.value = 0 }
    } )

    // prevent dragging numbers to bypass above
    $(".settings_number").on( "dragstart", ev => {
        ev.preventDefault()
    } )
}

function showSettings() {
    $("#settings_wrapper").fadeIn(200)
}
function hideSettings() {
    $("#settings_wrapper").fadeOut(200)
}

