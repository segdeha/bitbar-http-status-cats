#!/Users/andrew/.nvm/versions/node/v8.10.0/bin/node
// change path above to the output of `which node` on your system

// <bitbar.title>HTTP Status Cats</bitbar.title>
// <bitbar.version>v1.0</bitbar.version>
// <bitbar.author>Andrew Hedges</bitbar.author>
// <bitbar.author.github>segdeha</bitbar.author.github>
// <bitbar.desc>HTTP Status Cats Lookup</bitbar.desc>
// <bitbar.image>https://bitbar-http-status-cats.netlify.com/assets/http-status-cats.svg</bitbar.image>
// <bitbar.dependencies>node</bitbar.dependencies>
// <bitbar.abouturl>https://github.com/segdeha/bitbar-http-status-cats</bitbar.abouturl>

var codes = ['100', '101', '200', '201', '202', '204', '206', '207', '300', '301', '302', '303', '304', '305', '307', '400', '401', '402', '403', '404', '405', '406', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '420', '421', '422', '423', '424', '425', '426', '429', '431', '444', '450', '451', '500', '502', '503', '504', '506', '507', '508', '509', '510', '511', '599'];

function buildMenuItem() {
    console.log('🐈');
    console.log('---');
}

function buildMenu() {
    codes.forEach(function (code) {
        console.log(`${code}| href=https://http.cat/${code}`);
    });
}

function render() {
    buildMenuItem();
    buildMenu();
}

render();
