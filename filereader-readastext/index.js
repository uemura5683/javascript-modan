var element = document.getElementById( "hoge" ) ;
var resultElement = document.getElementById( "result" ) ;

element.onchange = function () {
    var fileReader = new FileReader() ;

    fileReader.onload = function () {
        console.log( this.result ) ;
        resultElement.appendChild( new Text( this.result ) ) ;
    }

    var file = element.files[0] ;
    fileReader.readAsText( file ) ;
//  fileReader.readAsBinaryString( file ) ; // 試してみよう！
}