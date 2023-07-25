module.exports = day;
//lets not call day as a function here so that it is called as a function only when the server wants otherwise calling it as a function
// like day() also works
function day() {
    var day = ""; const d = new Date();
    var options = {

        year: 'numeric',
        month: 'long',
        day: 'numeric', weekday: 'long', hour: "numeric", minute: "numeric"
    }
    day = d.toLocaleDateString("en-US", options);
    return day;
}