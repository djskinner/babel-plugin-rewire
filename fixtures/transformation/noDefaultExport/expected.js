"use strict";

var foo = _fooOrig;
let __$Getters__ = [];
let __$Setters__ = [];
let __$Resetters__ = [];

function _GetDependency__(name) {
	return __$Getters__[name]();
}

function _Rewire__(name, value) {
	__$Setters__[name](value);
}

function _ResetDependency__(name) {
	__$Resetters__[name]();
}

let _RewireAPI__ = {
	"__GetDependency__": _GetDependency__,
	"__get__": _GetDependency__,
	"__Rewire__": _Rewire__,
	"__set__": _Rewire__,
	"__ResetDependency__": _ResetDependency__
};

function _fooOrig(val) {
	return val + 1;
}

var _foo = foo;

__$Getters__["foo"] = function () {
	return foo;
};

__$Setters__["foo"] = function (value) {
	foo = value;
};

__$Resetters__["foo"] = function () {
	foo = _foo;
};

export { _fooOrig as foo };
export { _GetDependency__ as __GetDependency__, _GetDependency__ as __get__, _Rewire__ as __Rewire__, _Rewire__ as __set__, _ResetDependency__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };
export default _RewireAPI__;