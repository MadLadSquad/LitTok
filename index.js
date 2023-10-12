'use strict';
// ------------------- CONSTANT BLOCK EDIT IF RUNNING ON A CUSTOM SYSTEM ------------------
// ---------------------------------- CONSTANT BLOCK END ----------------------------------

var localStorageData;

function saveToLocalStorage(string)
{
	window.localStorage.setItem("littokData", JSON.stringify(string));
}

// Returns an element, creates an element with the given parameters and appends it
function addElement(elType, content, id, classType, data, parentEl)
{
	let el = document.createElement(elType);
	el.className = classType;
	el.id = id;
	el.textContent = content;
	el.setAttribute("arbitrary-data", data);

	parentEl.appendChild(el);
	return el;
}

// Returns an URLSearchParams object
function getParams()
{
	return new URLSearchParams(window.location.search);
}

// I'm a C/C++ programmer, I ain't trusting this toy language with anything + it's stupid to not have a main function tbh
function main()
{
	// Saves us performance costs of loading and saving things many times
	window.localStorageData = JSON.parse(window.localStorage.getItem("littokData"));
	if (window.localStorageData === null)
	{
		const data = {
			sessions: 0,
			streak: 0,
			lastDate: 0,
			totalTimeInSessions: 0,
			books: [],
		}
		saveToLocalStorage(data);
		document.location.reload(true);
	}

	const params = getParams();
}

main();
