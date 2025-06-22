
// Node.js (콘솔 기반) : 자바스크립트를 브라우저 밖, 즉 **컴퓨터(서버, 콘솔 등)**에서도 실행할 수 있도록 만든 런타임 환경입니다. 웹 서버 만들기, API 처리, 파일 입출력, 데이터베이스 연결 등 백엔드에 주로 사용

// 입력 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("이름을 입력하세요: ", function(name) {
  console.log("안녕하세요, " + name + "님!");
  rl.close();
});

// 출력
console.log("출력 테스트");

// #1 Hello World
console.log("Hello World!");

// #2 A+B
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
/* ✅ 설명
- require('fs') : Node.js에서 기본 제공하는 파일 시스템(File System) 모듈을 불러옵니다. 즉, fs는 파일을 읽거나 쓰는 기능을 가진 객체예요.
- readFileSync(): fs 모듈의 메서드 중 하나로, 파일을 "동기식으로" 읽어들이는 함수입니다. “동기식”이란 → 파일을 다 읽을 때까지 기다렸다가 다음 코드를 실행하는 방식입니다.
- '/dev/stdin' : 리눅스 시스템에서 표준 입력(terminal에서 입력받는 내용) 의미
- .toString().trim().split(' '): 입력을 문자열로 만듦 -> 문자열의 앞뒤 공백 문자만 제거 -> 공백을 기준으로 나눕니다.
- Number(): 문자열을 숫자로 변환합니다.
- console.log(): 결과를 출력합니다.*/

// #3 A-B
var n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(n[0]-n[1]);