"use strict";
var Repository = (function () {
    function Repository(id, name, full_name, stargazers_count) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.stargazers_count = stargazers_count;
    }
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map