fetch( './randomMaxim.json' )
    .then( ( response ) => response.json() )
    // .then((json) => console.log(json[0]))
    .then( ( json ) => modularization( json ) )

function modularization( json ) {
    var blockRow = document.createElement( 'div' );
    console.log( json.length )
    var randomMaxim = json.sample();
    if ( !randomMaxim[ 'english' ] ) {
            blockRow.innerHTML = `<div class='block-row'>${randomMaxim['mandarin']}</div>
            <div class='block-row'>${ randomMaxim[ 'author' ] }</div>`;
    } else if ( !randomMaxim[ 'english1' ] ) {
        blockRow.innerHTML = `<div class='block-row'>${randomMaxim['mandarin']}</div>
            <div class='block-row'>${ randomMaxim[ 'english' ] }</div>
            <div class='block-row'>${ randomMaxim[ 'author' ] }</div>`;
    } else {
        blockRow.innerHTML =  `<div class='block-row'>${ randomMaxim[ 'mandarin' ] }</div>
            <div class='block-row'>${ randomMaxim[ 'english' ] }</div>
            <div class='block-row'>${ randomMaxim[ 'english1' ] }</div>
            <div class='block-row'>${ randomMaxim[ 'author' ] }</div>`;
    }
    var block = document.getElementsByClassName( 'block' )[ 0 ];
    block.append( blockRow );
}

Array.prototype.sample = function() {
    return this[ Math.round( Math.random()*this.length ) ];
}

