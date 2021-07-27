// 関数にインターセプト（ 横入り ）する方法を用意。

$( target ).on( 'click', sample1 );

// Define: Intercept.
$.fn.intercept = function () {
    var self = this;
    var event = null, selector = null, handler1 = null, handler2 = null;
    var reference = null, intercept = null;
    if ( typeof arguments[0] === 'string' ) {
        event = arguments[0];
        if ( typeof arguments[1] === 'string' ) {
            selector = arguments[1];
            handler1 = ( typeof arguments[2] === 'function' ) ? arguments[2] : null;
            handler2 = ( typeof arguments[3] === 'function' ) ? arguments[3] : null;
        }
        if ( typeof arguments[1] === 'function' ) {
            handler1 = ( typeof arguments[1] === 'function' ) ? arguments[1] : null;
            handler2 = ( typeof arguments[2] === 'function' ) ? arguments[2] : null;
        }
    }
    reference = handler1 && handler2 ? handler1 : null;
    intercept = handler1 && handler2 ? handler2 : handler1;
    if ( null === event ) {
        console.error( 'Error: Invalid Arguments Type. Could Not Reference Event Name.' );
        return self;
    }
    if ( null === intercept ) {
        console.error( 'Error: Invalid Arguments Type. Could Not Reference Functions.' );
        return self;
    }
    return this.each( function () {
        var
        events = ( $._data( this, 'events' ) || [] )[event] || [],
        origin = [],
        checked = false;
        if ( events.length ) {
            // Intercept at The Begining.
            if ( null === reference ) {
                for ( var i = 0, l = events.length; i < l; i++ ) {
                    if ( typeof( events[i] ) !== 'undefined' ) {
                        origin.push( events[i] );
                    }
                }
                $( this ).off( event );
                $( this ).on( event, selector, intercept );
                for ( var i = 0, l = origin.length; i < l; i++ ) {
                    $( this ).on( event, origin[i].selector, origin[i].handler );
                }
            }
            // Intercept Before The Specified Functions.
            if ( reference ) {
                for ( var i = 0, l = events.length; i < l; i++ ) {
                    if ( typeof( events[i] ) !== 'undefined' ) {
                        origin.push( events[i] );
                    }
                }
                $( this ).off( event );
                for ( var i = 0, l = origin.length; i < l; i++ ) {
                    if ( false === checked && origin[i].handler === reference ) {
                        $( this ).on( event, selector, intercept );
                        checked = true;
                    }
                    $( this ).on( event, origin[i].selector, origin[i].handler );
                }
            }
        }
    } );
}


// Example: Binding The Functions.
// 名前付き／匿名いずれかの関数がバインドされている
var
target = document.getElementById( 'page-body' ),
sample1 = function () { console.log( 'sample 1' ); };
$( target ).on( 'click', sample1 );
$( target ).on( 'click', function ( e ) { console.log( 'sample 2' ); } );

// 名前付き関数を指定しない場合、一番最初に実行することができる
$( target ).intercept( 'click', function () {
    console.log( 'sample 100' );
} );


// 通常は以下通り（ ハンドラー登録順 ）にログが吐かれます
/*
sample 1
sample 2
sample 10
sample 100
*/

// 1、2、3 をすべて実行（ インターセプト ）すると、以下の順番でログが吐かれます（ 実行されます ）
/*
sample 100
sample 10
sample 1
sample 2
*/

$( target ).intercept( event, [ scope, reference_function, intercept_function ] );

/*
arguments: 1. イベントリスナー（ 必須 ）
例: click / hover / scroll ...
arguments: 2. セレクタスコープ
$( document ).on( 'click', '.class_name', function () {} );
よくあるこういった構文が使えます。
arguments: 3. 参照する関数
4 の関数が割り込む対象を指定することができます。
arguments: 4. 割り込む関数（ 必須 ）
3 の参照先を指定しない場合は、対象となる DOM におけるイベントリスナーの一番最初に割り込みます。 
*/

