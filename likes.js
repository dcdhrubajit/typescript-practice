"use strict";
exports.__esModule = true;
exports.Comment = void 0;
var Comment = /** @class */ (function () {
    function Comment(commentId) {
        this.commentId = commentId;
    }
    Comment.prototype.displayComment = function () {
        console.log("Comment ID: " + this.commentId);
    };
    return Comment;
}());
exports.Comment = Comment;
var comment = new Comment(12);
comment.displayComment();
