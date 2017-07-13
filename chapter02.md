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
tag/property/childNode
```


### HTML Attributes vs property
attribute는 HTML 문서 내 존재하는 HTML ??의 추가적 정보
property는 DOM tree에서의 attribute의 표현. DOM node/element의 정보 
- (https://medium.com/@jeongwooahn/html-attribute%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-d3c172cebc41)
- [jQuery prop](http://api.jquery.com/prop/)


## form in React
### 제어 컴포넌트 
- 값이나 확인되는 속성을 가지는 폼 컴포넌트
- user 변경 x 
    + 이라면서 state로 변경할 수 있는거잖아 ????

### 비제어 컴포넌트 
- 값을 제공하지 않는 모든 입력 컴포넌트
- 빈 값으로 제공된다?
    + defaultValue를 설정할 수 있잖아 ???? 


## 몰게뙁 
- id는 id 그대로 쓰면서, class는 왜 className 으로? 선점 ?
    + DOM property에 className이 있지 
- 인라인 스타일링이 많이 필요할까 ?
    + 어차피 대부분 class 로 스타일을 제어하는데 
    + css가 어떻게 들어가는지를 봐야겠네? 
- 제어 컴포넌트 vs 비제어 컨포넌트 
    - 제어 : 액션을 취했을 때 바뀌는 것 -> checkbox radio button 
        + 데이터가 바뀌었을 때, rerender 하는 것 
    - 비제어 : value만 바뀐다 ? 
