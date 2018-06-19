var Debt = Backbone.Model.extend({
  defaults: {
    amount: 0
  }
});

var DebtCollection = Backbone.Collection.extend({
  model: Debt,
  url: '/debts',
  totalOwed: function() {
    var amounts = this.pluck('amount');
    return _.reduce(amounts, function(sum, a) {
      return sum + a;
    })
  }
});

var DebtView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  events: {
    'blur [contenteditable="true"]': "setAttrs",
    'click [data-action="save"]': "save",
    'click [data-action="delete"]': "destroy"
  },

  tagName: 'tr',

  template: $('[data-template="debt"]').html(),

  setAttrs: function(e) {
    var field = $(e.target);
    var key = field.data('attr');
    var val = field.text().trim();

    this.model.set(key, val);
  },

  save: function() {
    this.model.save();
  },

  destroy: function() {
    this.model.destroy();
  },

  render: function() {
    this.$el.html( Mustache.render(this.template, this.model.toJSON()) );
  }
});

var DebtsView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
  },

  addOne: function(debt) {
    var v = new DebtView({model: debt});
    v.render();
    this.$el.append(v.el);
  }
});

var StatView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync remove', this.render);
    this.render();
  },
  tagName: 'div',

  className: 'ui horizontal statistic',

  template: $('[data-template="stats"]').text(),

  render: function() {
    this.$el.html( Mustache.render(this.template, {owed: this.collection.totalOwed()}) );
  }
})

var debts = new DebtCollection();
var dV = new DebtsView({el: $('tbody'), collection: debts});

var s = new StatView({collection: debts});
$('[data-section="summary"]').append(s.el);

$('.ui.label.blue').on('click', function() {
  debts.add(new Debt());
});

debts.fetch();