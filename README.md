# 코드종의 "React Native 2/E" 예제 프로젝트

책의 예제를 하나의 프로젝트에서 쉽게 실행해 볼 수 있도록 branch로 구분하여 commit했습니다.
책의 내용 외에도 추가적으로 해볼 수 있는 내용도 추가하도록 하겠습니다.

![책 표지](https://scontent.fcgk6-1.fna.fbcdn.net/v/t1.0-9/38208442_1400240900133661_2920500640847233024_n.jpg?_nc_cat=106&_nc_ht=scontent.fcgk6-1.fna&oh=6da6d405f5022cd9795a4690041ac425&oe=5C780F10)

## 실행방법

1. 터미널에서 다음 명령어로 git clone합니다. git이 설치되어 있지 않다면 [git 홈페이지](https://git-scm.com)에서 다운로드 후 설치하세요.(맥은 기본적으로 설치되어 있음)
```
git clone https://github.com/codejong/class-react-native-2e.git
cd class-react-native-2e
```
1. 해당 폴더로 들어가 원하는 예제의 branch로 checkout하고, 디펜던시 설치한 후 프로젝트를 실행합니다. (expo를 사용하는 경우는 해당 파일들을 expo프로젝트에 복사해서 실행하세요.)
```
cd class-react-native-2e
git checkout chapter3/weather
npm install # 혹은 yarn install
```

## 예제별 branch 안내
참고로 branch는 `챕터명/예제이름`으로 구분했습니다. 책이 만들어진 이후 최신버전에서 달라진 내용에 대해서는 코드가 일부 수정되어 있습니다. 해당 branch의 commit을 확인해보시면 어떤 부분을 수정했는지 확인 가능합니다.

현재 다음과 같은 branch가 있습니다.

- chapter3/weather
- chapter4/flatlist
- chapter4/flatlist_naver_book
  - 4장 예제를 변경한 예제로 NYT 책 API 대신 naver의 책 검색 API를 이용해서 새로 고침과 무한 로딩(onEndReached)을 구현
- chatper4/touch_PanResponder
- chapter5/flex
- chapter5/mondrian