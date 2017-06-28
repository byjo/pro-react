# CAHPTER 01 | 시작하기

## Keyword
* Node.js
	- JavaScript runtime built on Chrome's V8 JavaScript engine.
	- 브라우저에서 동작하던 js를 끌어내준 아이인가 
	- event-driven, non-blocking I/O model 
* npm (Node Package Modules)
	- Node.js의 package ecosystem 
	- Node.js 에서 사용 가능한 라이브러리들이 모여있고, 이를 쉽게 다운/사용 할 수 있게 해줌 
	- package : a file or directory that is described by a package.json
	- module : any file or directory that can be loaded by Node.js' require()
* express
	- Node.js의 웹 프레임워크 -> 웹서버 구축 
	- npm에서 제공하는 package 중 하나 
* Webpack
	- module bundler : dependency가 있는 module들을 static한 asset(번들 파일)으로 묶음
	- module -> entery -> bundle
	- 빌드 또한 가능 
* Grunt, gulp
	- 이거슨 js 프로젝트 빌드 도구
* Babel
	- js compiler (transpiler : source to source compiler)


## 정의
### React
> A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
- UI를 위한 js 라이브러리

#### cf. library (vs engine) vs framework
- library : toolkit, a set of functions that you can call
- framework : structure
- engine : it's a hybrid between a framework and a library. Like a framework, it has control over the application. However unlike a framework, you don't bind your subroutines to the engine but use its built in API to perform certain tasks (which is like a library)

#### Example 
- `jQuery` is a library because it abstracts a lot of browser incompatibilities but imposes no structure on your code.
- `underscore.js` is a library because it's a collection of utilities to manipulate data structures and other goodies.
- `backbone.js` is a framework because it structures your front-end code to match the MVC pattern.



## 장점
* SPA에 맞는 반응형 렌더링 
	- virtual DOM 성능 보장 
* native js로 마크업까지 커버 가능
	- 컴포넌트에만 집중하면 된다 
* 추상화



## JSX
> a syntax extension to JavaScript
- UI가 어떻게 보여야 하는지를 설명하는 React element를 만들어냄 
- js 코드 안에 XML을 작성할 수 있게 해줌 
- 자세한건 2장에서... :) 



## Component
> props를 input으로, React element를 output으로 갖는 function
> or render 메서드를 갖는 class (ES6)
### property
- 부모 -> 자식 component로 데이터 전달 
### state
- 컴포넌트가 가질 수 있는 데이터 셋 
- this.setState() 메소드로 변경 
	+ 왜 state를 직접 변경하면 안되는가? : re-render를 못한다는데
	+ React LifeCycle 
		- setState() 호출 시 shouldComponentUpdate(object nextProps, object nextState) 메소드의 리턴 값으로 render() 를 할지 말지 여부가 결정  
		- 해당 메소드에서 state변화를 감지 못하는거 아닐까 : reference 비교 
- state 변경 시, 컴포넌트의 반응형 렌더링 트리거 -> 해당 컴포턴트 및 자식 컴포넌트 다시 렌더링 


## 실습
### boilerplate and create-react-app
```
npm을 이용한 프로젝트의 의존성(dependency) 관리, React 프로젝트 개발을 위한 WebPack, Babel 세팅 쉽지않네?
```
* [boilerplate] (https://github.com/pro-react/react-app-boilerplate)
	- clone 받고 npm install만 하면 되는군^^ 바로 개발 가능!
```
했지만... Webpack, Babel... 이 녀석들의 Up-to-date가 보장이 안되네?
```

* [create-react-app] (https://github.com/facebookincubator/create-react-app)
	- one-dependency : 하나의 의존성(react-scripts)만 신경쓰자
	- Zero Configuration : 설정 파일은 모두 node_modules/react-scripts 안에 (꼴끔)
	- No Lock-In : `npm run eject` command를 통해 커스텀 셋업도 가능 
```
{
	"devDependencies": {
	    "babel-core": "~6.7.*",
	    "babel-loader": "~6.2.*",
	    "babel-preset-es2015": "~6.6.*",
	    "babel-preset-react": "~6.5.*",
	    "webpack": "~1.12.*",
	    "webpack-dev-server": "~1.14.*"
	}
}
```

```
{
	"devDependencies": {
    	"react-scripts": "0.1.0"
  	},
}
```

*결론 : boilerplate 대신 create-react-app 쓰세요 ^^*

### 하면서 궁금했던 것
* import의 destructing assignment
	- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
	- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
* Each child in an array or iterator should have a unique "key" prop
	- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
		+ https://facebook.github.io/react/docs/lists-and-keys.html#keys
	- When that's not the case, you can add a new ID property to your model or hash some parts of the content to generate a key. The key only has to be unique among its siblings, not globally unique. As a last resort, you can pass item's index in the array as a key. This can work well if the items are never reordered, but reorders will be slow.
		+ https://facebook.github.io/react/docs/reconciliation.html#recursing-on-children



## Reference
- https://stackoverflow.com/questions/3057526/framework-vs-toolkit-vs-library
- https://stackoverflow.com/questions/5068992/whats-the-difference-between-an-engine-and-a-framework
- https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html
- https://perfectacle.github.io/2017/06/18/what-is-node-js/
- https://docs.npmjs.com/how-npm-works/packages#what-is-a-package
- http://d2.naver.com/helloworld/0239818
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import



