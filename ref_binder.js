function RefBinder(){
  this.initRefBinder();
}

module.exports = RefBinder;

RefBinder.prototype.initRefBinder = function(name,obj,events){
  this._refs = {};
};

RefBinder.prototype.getRef = function(name,obj,events){
  return this._refs[name];
};

RefBinder.prototype.setRef = function(name,obj,events){
  this.unsetRef(name);
  for(var e_name in events){
    obj.on( e_name, this[events[e]], this);
  }
  this._refs[name] = obj;
};

RefBinder.prototype.unsetRef = function(name){
  if(!this._ref[name]) return;
  this._ref[name].off(null,null,this);
  delete this._ref[name];
};

RefBinder.prototype.unsetAllRefs = function(){
  for(var name in this._refs){
    this.unsetRef(name);
  }
};
