'use strict';

import _aFunctionTemp$Import from 'myModule';

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
	'__GetDependency__': _GetDependency__,
	'__get__': _GetDependency__,
	'__Rewire__': _Rewire__,
	'__set__': _Rewire__,
	'__ResetDependency__': _ResetDependency__
};
let _aFunction$IsLifeBindingActive = true;
let aFunction = _aFunctionTemp$Import;

__$Getters__['aFunction'] = function () {
	return _aFunction$IsLifeBindingActive ? _aFunctionTemp$Import : aFunction;
};

__$Setters__['aFunction'] = function (value) {
	_aFunction$IsLifeBindingActive = false;
	aFunction = value;
};

__$Resetters__['aFunction'] = function () {
	_aFunction$IsLifeBindingActive = true;
	aFunction = _aFunctionTemp$Import;
};

let _defaultExport = {
	addOne: function (val) {
		return _GetDependency__('aFunction')() + 1;
	}
};

if ((typeof _defaultExport === 'object' || typeof _defaultExport === 'function') && Object.isExtensible(_defaultExport)) {
	Object.defineProperty(_defaultExport, '__Rewire__', {
		'value': _Rewire__,
		'enumerable': false,
		'configurable': true
	});
	Object.defineProperty(_defaultExport, '__set__', {
		'value': _Rewire__,
		'enumerable': false,
		'configurable': true
	});
	Object.defineProperty(_defaultExport, '__ResetDependency__', {
		'value': _ResetDependency__,
		'enumerable': false,
		'configurable': true
	});
	Object.defineProperty(_defaultExport, '__GetDependency__', {
		'value': _GetDependency__,
		'enumerable': false,
		'configurable': true
	});
	Object.defineProperty(_defaultExport, '__get__', {
		'value': _GetDependency__,
		'enumerable': false,
		'configurable': true
	});
	Object.defineProperty(_defaultExport, '__RewireAPI__', {
		'value': _RewireAPI__,
		'enumerable': false,
		'configurable': true
	});
}

export default _defaultExport;
export { _GetDependency__ as __GetDependency__, _GetDependency__ as __get__, _Rewire__ as __Rewire__, _Rewire__ as __set__, _ResetDependency__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };