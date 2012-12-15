# ref-binder

little data-structure for managing event-oriented relationships

API likely to change. :)

## Example Usage

````javascript

var RefBinder = require('ref-binder');

// currently assumes you are using backbone
var model = new Backbone.Model();
var view = new Backbone.View();

// create a set of references for a view
var refs = new RefBinder(view);

// bind model events to view methods
refs.set('item1',model,{
  'change': 'render',
  'fetch': 'showLoader',
  'sync': 'hideLoader'
});

// get a reference to the bound model object
var item1 = refs.get('item1');

// properly de-reference and unbind the model
refs.unset('item1');

// dereference everything when you are ready to destroy the view
refs.unsetAll();


// Example of a Backbone view using ref-binder

var TodoListView = Backbone.View.extend({

  initialize: function(o){
    this.models = new RefBinder(this);
    this.setTodos(o.todo_items);
  },

  getTodos: function(){
    return this.models.get('todos');
  },

  setTodos: function(todo_items){
    this.models.set('todos',todo_items,{
     'change':  'render',
     'fetch':  'showLoadingGraphic',
     'sync':  'hideLoadingGraphic',
    });
  },

  destroy: function(){
    this.models.unsetAll();
    this.remove();
  }
  
});



````
