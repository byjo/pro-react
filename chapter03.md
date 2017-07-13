# CAHPTER 03 |

## ES6 
* let
    - var와 같은 아이임 but 
    - scope가 block 단위

## LifeCylce
- componentDidUpdate 안에 setState() 하면 무한루프 빠짐 

## Immutability
### Immutability
* liable or subject to change or alteration
* after it has been created, it can never change.
* 객체를 변경하지 않고 대체하는 것 

## QUESTIONS
* 데이터의 흐름이 부모 -> 자식의 단방향인 건 알겠음. 근데 App -> CheckList 같이 무한정 아래로 내려가는거(계속해서 props로 전달) 영 안좋아 보이는데 
* React Component의 setState 내부에서는 객체 값의 비교가 아닌, 그저 주소 값만 비교한다는 것인가?
    - 항상 새로운 객체를 setState의 인자로 넘기니깐 
    - 별론데? 
* 컨테이너 vs 상태 저장 컴포넌트 
    - 예제에서는 컨테이너에서 통신을 했지만, 앱이 좀 더 커지면 상태 저장이 여러개 되고, 컨테이너는 그저 wrapping 정도가 되지 않을까? 

## deprecated things
* PropTypes
`React.PropTypes is deprecated since React 15.5.0, use the npm module prop-types instead`
* react-addons-update
`update is a legacy add-on. Use immutability-helper instead.`

## Reference
- (https://www.sitepoint.com/immutability-javascript/)

