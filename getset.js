/**declare authenticated user**/
var userName = "Employee@11";
/**function class**/
var UserAuth = (function () {
    function UserAuth() {
    }
    Object.defineProperty(UserAuth.prototype, "fullName", {
        /**get function**/
        get: function () {
            return this._fullName;
        },
        /**set function**/
        set: function (newName) {
            if (userName && userName == newName) {
                this._fullName = newName;
                console.log("Valid user");
                document.getElementById("user").innerHTML = newName + " is a Valid User";
            }
            else {
                console.log("Invalid User");
                document.getElementById("user").innerHTML = newName + " Invalid User";
            }
        },
        enumerable: true,
        configurable: true
    });
    return UserAuth;
}());
var User = new UserAuth();
User.fullName = document.getElementById('inputVal').value;
