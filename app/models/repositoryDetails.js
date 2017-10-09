"use strict";
var RepositoryDetails = (function () {
    function RepositoryDetails(id, name, fullname, html_url, description, stargazers_count, language) {
        this.id = id;
        this.name = name;
        this.fullname = fullname;
        this.html_url = html_url;
        this.description = description;
        this.stargazers_count = stargazers_count;
        this.language = language;
    }
    return RepositoryDetails;
}());
exports.RepositoryDetails = RepositoryDetails;
//# sourceMappingURL=repositoryDetails.js.map