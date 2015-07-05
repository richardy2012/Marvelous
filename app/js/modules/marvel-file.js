Marvel.File = function (filepath, content) {
  var self = this;
  self.id = 'mf-' + (+new Date());
  self.update(filepath, content);
};

Marvel.File.prototype = {
  update: function (filepath, content) {
    var self = this;
    self.filepath = filepath || "";
    self.originalContent = content || "";
    self.content = content || "";
    self.title = (self.filepath === "") ?
      "Unnamed" :
      ((self.filepath.lastIndexOf('/') <= 0) ? self.filepath : self.filepath.slice(self.filepath.lastIndexOf('/') + 1));
    self.saved = true;
  },

  updateContent: function (content) {
    var self = this;
    self.content = content;
    self.saved = (self.originalContent === self.content);
  },

  setSaved: function () {
    var self = this;
    self.saved = true;
    self.originalContent = self.saved;
  }
}