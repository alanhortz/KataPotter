function Book(id, title) {
	this.id = id;
	this.title = title;
}
Book.prototype.id = function () {
	return this.id;
};
Book.prototype.title = function () {
	return this.title;
};