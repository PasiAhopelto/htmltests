$(document).ready(function() {
	updateStatus();
	storeAndGet();
	storeAndGetWithIndexedDb();
});

function statusInEnglish() {
	return Modernizr.localstorage ? "enabled" : "disabled";
}

function updateStatus() {
	$('#status').html('Local storage is ' + statusInEnglish());
}

function storeAndGet() {
	if(Modernizr.localstorage) {
		localStorage.setItem("test", new Date());
		$('#values').html(localStorage.getItem("test"));
	}
}

function openIndexedDb() {
	var request = window.indexedDB.open("storeAndGet", 1);
	request.onerror = function(event) {
		console.log("Error opening DB", event);
	}
	request.onupgradeneeded = function(event) {
		console.log("First time on page, or new version of database.");
		var db = event.target.result;
		db.createObjectStore("store", { keyPath : "id" });
		insertObjectToIndexedDb(db);
		readAndPrintValue(db);
	};
	request.onsuccess = function(event) {
		console.log("Database already exists.");
		var db = event.target.result;
		insertObjectToIndexedDb(db);
		readAndPrintValue(db);
	}
	request.onblocked = function(event) {
		console.log("Connection blocked");
	}
}

function readAndPrintValue(db) {
    var request = db.transaction(["store"],"readwrite").objectStore("store").get(2);
    request.onsuccess = function(event) {
        $('#indexedValues').html("Values : "+ request.result.value + ", " + request.result.secondValue);    
    };
}

function insertObjectToIndexedDb(db) {
	var transaction = db.transaction(["store"],"readwrite");
	transaction.oncomplete = function(event) {
		console.log("Inserted object", event);
	};

	transaction.onerror = function(event) {
		console.log("Error inserting object (might already exist)", event);
	};  
	var objectStore = transaction.objectStore("store");
	objectStore.add({id: 2, value: 'value', secondValue: '2nd'});
}

function storeAndGetWithIndexedDb() {
	window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	if(window.indexedDB) {
		openIndexedDb();
	}
	else {
		console.log("IndexedDB not supported");    	 
	}
}