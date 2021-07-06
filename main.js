var UserAccount = /** @class */ (function () {
    function UserAccount(_userId, _userName) {
        this._userId = _userId;
        this._userName = _userName;
    }
    Object.defineProperty(UserAccount.prototype, "userId", {
        set: function (id) {
            this._userId = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserAccount.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (name) {
            this._userName = name;
        },
        enumerable: false,
        configurable: true
    });
    UserAccount.prototype.display = function () {
        console.log("User ID: " + this._userId + " Name: " + this._userName);
    };
    return UserAccount;
}());
var user1 = new UserAccount();
user1.userId = 11;
user1.userName = 'Dhrubajit';
user1.display();
console.log(user1.userName);
