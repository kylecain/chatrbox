(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');
    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({ message: 'pow!' });
        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}
exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSx1QkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQzdCLFlBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBQyxTQUFTLE1BQVYsRUFBaEIsQ0FBZDtBQUNBLDJCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0gsS0FIRDtBQUlBLHVCQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3BDLGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsS0FGRDtBQUdILEM7O0lBR0MsVztBQUNGLCtCQUlHO0FBQUEsWUFIVSxDQUdWLFFBSEMsT0FHRDtBQUFBLDZCQUZDLElBRUQ7QUFBQSxZQUZPLENBRVAsNkJBRlMsUUFFVDtBQUFBLGtDQURDLFNBQ0Q7QUFBQSxZQURZLENBQ1osa0NBRGUsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ2Q7O0FBQUE7O0FBQ0MsYUFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OztvQ0FDVztBQUNSLG1CQUFPO0FBQ0gsc0JBQU0sS0FBSyxJQURSO0FBRUgseUJBQVMsS0FBSyxPQUZYO0FBR0gsMkJBQVcsS0FBSztBQUhiLGFBQVA7QUFLSDs7Ozs7O2tCQUVVLE87Ozs7O0FDakNmOzs7Ozs7QUFDQSxJQUFJLGFBQUo7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDZixhQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDSDs7QUFFRCxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzFDLFdBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ2xCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDSCxLQUhEO0FBSUg7O0FBRUQsU0FBUyxzQkFBVCxDQUFpQyxlQUFqQyxFQUFrRDtBQUM5QyxXQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDdEIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6QjtBQUNBLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLHdCQUFnQixJQUFoQjtBQUNILEtBSkQ7QUFLSDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDMUIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7a0JBQ2M7QUFDWCxjQURXO0FBRVgsNENBRlc7QUFHWCxrREFIVztBQUlYO0FBSlcsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xuXG5jbGFzcyBDaGF0QXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2Uoe21lc3NhZ2U6ICdwb3chJ30pO1xuICAgICAgICAgICAgc29ja2V0LnNlbmRNZXNzYWdlKG1lc3NhZ2Uuc2VyaWFsaXplKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBtZXNzYWdlOiBtLFxuICAgICAgICB1c2VyOiB1PSdiYXRtYW4nLFxuICAgICAgICB0aW1lc3RhbXA6IHQ9KG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICAgIH0pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbTtcbiAgICAgICAgdGhpcy51c2VyID0gdTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0O1xuICAgIH1cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXIsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDsiLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5uZXcgQ2hhdEFwcCgpOyIsImxldCBzb2NrZXQ7XG5cbmZ1bmN0aW9uIGluaXQodXJsKSB7XG4gICAgc29ja2V0ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJylcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJPcGVuSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgICBzb2NrZXQub25vcGVuID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIgKGhhbmRsZXJGdW5jdGlvbikge1xuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XG4gICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQsXG4gICAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcbiAgICByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyLFxuICAgIHNlbmRNZXNzYWdlXG59Il19
