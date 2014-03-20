/**
 * Created by mcfedr on 20/03/2014.
 */

var weather = 'http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua';

function get(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', function() {
            resolve(request.responseText);
        });
        request.addEventListener('error', function() {
            reject(new Error('Error getting'));
        });
        request.open('GET', url);
        request.send();
    });
}

document.querySelector('#get').addEventListener('click', function() {
    var status = document.querySelector('#status')
    get(weather).then(function(value) {
        status.textContent = value;
    }, function(e) {
        status.textContent = e;
    });
});

function getJson(url) {
    return get(url).then(function(text) {
        return JSON.parse(text);
    });
}

document.querySelector('#getjson').addEventListener('click', function() {
    var status = document.querySelector('#status')
    getJson(weather).then(function(value) {
        status.textContent = value.weather[0].description;;
    }, function(e) {
        status.textContent = e;
    });
});


var cache = [];
function getJsonCache(url) {
    return new Promise(function(resolve, reject) {
        if(cache[url]) {
            resolve(cache[url]);
        }
        else {
            resolve(getJson(url).then(function(value) {
                cache[url] = value;
                return value;
            }));
        }
    });
}

document.querySelector('#getjsoncache').addEventListener('click', function() {
    var status = document.querySelector('#status')
    getJsonCache(weather).then(function(value) {
        status.textContent = value.weather[0].description;;
    }, function(e) {
        status.textContent = e;
    });
});
