"use strict";
var User = (function () {
    function User(id, login, name, email, followers, following, bio, avatar_url) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.email = email;
        this.followers = followers;
        this.following = following;
        this.bio = bio;
        this.avatar_url = avatar_url;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map