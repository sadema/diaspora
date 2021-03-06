describe("app.views.StreamShortcuts", function () {

  beforeEach(function() {
    this.post1 = factory.post({author : factory.author({name : "Rebecca Black", id : 1492})});
    this.post2 = factory.post({author : factory.author({name : "John Stamos", id : 1987})});

    this.stream = new app.models.Stream();
    this.stream.add([this.post1, this.post2]);
    this.streamView = new app.views.Stream({model : this.stream});
    spec.content().html(this.streamView.render().el);
    this.view = new app.views.StreamShortcuts({el: $(document)});

    expect(spec.content().find("div.stream-element.loaded").length).toBe(2);
  });

  describe("pressing 'j'", function(){
    it("should call 'gotoNext' if not pressed in an input field", function(){
      spyOn(this.view, 'gotoNext');
      var e = $.Event("keydown", { which: Keycodes.J, target: {type: "div"} });
      this.view._onHotkeyDown(e);
      expect(this.view.gotoNext).toHaveBeenCalled();
    });

    it("'gotoNext' should call 'selectPost'", function(){
      spyOn(this.view, 'selectPost');
      this.view.gotoNext();
      expect(this.view.selectPost).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'gotoNext');
      spyOn(this.view, 'selectPost');
      var e = $.Event("keydown", { which: Keycodes.J, target: {type: "textarea"} });
      this.view._onHotkeyDown(e);
      expect(this.view.gotoNext).not.toHaveBeenCalled();
      expect(this.view.selectPost).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'k'", function(){
    it("should call 'gotoPrev' if not pressed in an input field", function(){
      spyOn(this.view, 'gotoPrev');
      var e = $.Event("keydown", { which: Keycodes.K, target: {type: "div"} });
      this.view._onHotkeyDown(e);
      expect(this.view.gotoPrev).toHaveBeenCalled();
    });

    it("'gotoPrev' should call 'selectPost'", function(){
      spyOn(this.view, 'selectPost');
      this.view.gotoPrev();
      expect(this.view.selectPost).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'gotoPrev');
      spyOn(this.view, 'selectPost');
      var e = $.Event("keydown", { which: Keycodes.K, target: {type: "textarea"} });
      this.view._onHotkeyDown(e);
      expect(this.view.gotoPrev).not.toHaveBeenCalled();
      expect(this.view.selectPost).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'c'", function(){
    it("should click on the comment-button if not pressed in an input field", function(){
      spyOn(this.view, 'commentSelected');
      var e = $.Event("keyup", { which: Keycodes.C, target: {type: "div"} });
      this.view._onHotkeyUp(e);
      expect(this.view.commentSelected).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'commentSelected');
      var e = $.Event("keyup", { which: Keycodes.C, target: {type: "textarea"} });
      this.view._onHotkeyUp(e);
      expect(this.view.commentSelected).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'l'", function(){
    it("should click on the like-button if not pressed in an input field", function(){
      spyOn(this.view, 'likeSelected');
      var e = $.Event("keyup", { which: Keycodes.L, target: {type: "div"} });
      this.view._onHotkeyUp(e);
      expect(this.view.likeSelected).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'likeSelected');
      var e = $.Event("keyup", { which: Keycodes.L, target: {type: "textarea"} });
      this.view._onHotkeyUp(e);
      expect(this.view.likeSelected).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'r'", function(){
    it("should click on the reshare-button if not pressed in an input field", function(){
      spyOn(this.view, 'reshareSelected');
      var e = $.Event("keyup", { which: Keycodes.R, target: {type: "div"} });
      this.view._onHotkeyUp(e);
      expect(this.view.reshareSelected).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'reshareSelected');
      var e = $.Event("keyup", { which: Keycodes.R, target: {type: "textarea"} });
      this.view._onHotkeyUp(e);
      expect(this.view.reshareSelected).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'm'", function(){
    it("should click on the more-button if not pressed in an input field", function(){
      spyOn(this.view, 'expandSelected');
      var e = $.Event("keyup", { which: Keycodes.M, target: {type: "div"} });
      this.view._onHotkeyUp(e);
      expect(this.view.expandSelected).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'expandSelected');
      var e = $.Event("keyup", { which: Keycodes.M, target: {type: "textarea"} });
      this.view._onHotkeyUp(e);
      expect(this.view.expandSelected).not.toHaveBeenCalled();
    });
  });

  describe("pressing 'o'", function(){
    it("should click on the more-button if not pressed in an input field", function(){
      spyOn(this.view, 'openFirstLinkSelected');
      var e = $.Event("keyup", { which: Keycodes.O, target: {type: "div"} });
      this.view._onHotkeyUp(e);
      expect(this.view.openFirstLinkSelected).toHaveBeenCalled();
    });

    it("shouldn't do anything if the user types in an input field", function(){
      spyOn(this.view, 'openFirstLinkSelected');
      var e = $.Event("keyup", { which: Keycodes.O, target: {type: "textarea"} });
      this.view._onHotkeyUp(e);
      expect(this.view.openFirstLinkSelected).not.toHaveBeenCalled();
    });
  });
});
