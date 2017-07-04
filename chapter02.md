# CAHPTER 02 | DOM 추상화의 내부 


## 이벤트
### HTML 이벤트 API
- onclick, onfocus...
- 단점 
    + 전역 스코프 오염 
    + 파일이 커질 경우 컨텍스트 추적이 어려움 (관리 어려움)
    + 성능
    + 메모리 
### JSX의 이벤트 API
- 비슷하지만 단점은 없엉 ㅋ
- 컴포넌트 스코프에서 콜백 함수가 동작 
    + 해당 스코프에서 정의 되었을 때를 말하는 거겠지? 
- CamelCase

## JSX
`자바스크립트 구문 확장 : js안에서 XML 스타일을 사용할 수 있다`
- 어떻게...? : 트랜스파일러가 XML -> 리액트에 대한 함수 호출로 변환 
```
<h1>hello world</h1>

React.createElement("h1", null, "hello world");
```


### HTML Attributes vs property


- (https://medium.com/@jeongwooahn/html-attribute%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-d3c172cebc41)
- [jQuery prop](http://api.jquery.com/prop/)
