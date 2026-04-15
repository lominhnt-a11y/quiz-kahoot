export const QUESTIONS = [
  {
    text: `Câu 1. Phép thử gieo một đồng xu (có mặt sấp “S” và ngửa “N”) hai lần liên tiếp. Mô tả không gian mẫu ta được:`,
    choices: [
      `\\(\\Omega = \\{S, N\\}\\)`,
      `\\(\\Omega = \\{SN, NS, NN, SS\\}\\)`,
      `\\(\\Omega = \\{SN, NS\\}\\)`,
      `\\(\\Omega = \\{S, N, NN, SS\\}\\)`
    ],
    answer: "B"
  },
  {
    text: `Câu 2. Xét phép thử T có không gian mẫu \\(\\Omega = \\{1; 2; 3; a; b; c\\}\\). Tập hợp nào sau đây là một biến cố của phép thử T`,
    choices: [
      `\\(N = \\{1; 2; d\\}\\)`,
      `\\(M = \\{a; b; d\\}\\)`,
      `\\(H = \\{1; a; b; e\\}\\)`,
      `\\(K = \\{2; a; c\\}\\)`
    ],
    answer: "D"
  },
  {
    text: `Câu 3. Tập hợp \\(A \\cap B\\) gồm tất cả các phần tử`,
    choices: [
      `thuộc A hoặc thuộc B`,
      `thuộc đồng thời cả A và B`,
      `thuộc A và không thuộc B`,
      `thuộc B và không thuộc A`
    ],
    answer: "B"
  },
  {
    text: `Câu 4. Tập hợp \\(A \\cup B\\) gồm tất cả các phần tử`,
    choices: [
      `thuộc A hoặc thuộc B`,
      `thuộc đồng thời cả A và B`,
      `thuộc A và không thuộc B`,
      `thuộc B và không thuộc A`
    ],
    answer: "A"
  },
  {
    text: `Câu 5. Công thức tính xác suất cổ điển của biến cố A trong 1 phép thử có không gian mẫu \\(\\Omega\\) là`,
    choices: [
      `\\(P(A)=\\dfrac{n(\\Omega)}{n(A)}\\)`,
      `\\(P(A)=\\dfrac{n(A)}{n(\\Omega)}\\)`,
      `\\(P(A)=n(\\Omega)\\cdot n(A)\\)`,
      `\\(P(A)=1+P(\\overline{A})\\)`
    ],
    answer: "B"
  },
  {
    text: `Câu 6. Gieo 1 đồng xu 3 lần liên tiếp. Biến cố A “Mặt sấp xuất hiện ít nhất 2 lần” có biến cố đối là`,
    choices: [
      `\\(\\overline{A}\\): “Mặt sấp xuất hiện không quá 2 lần”`,
      `\\(\\overline{A}\\): “Mặt sấp xuất hiện 3 lần”`,
      `\\(\\overline{A}\\): “Mặt sấp xuất hiện không quá 1 lần”`,
      `\\(\\overline{A}\\): “Mặt sấp xuất hiện 2 lần hoặc 3 lần”`
    ],
    answer: "C"
  },
  {
    text: `Câu 7. Cho 2 tập hợp A và B bất kì. Với \\(n(X)\\) là kí hiệu số phần tử của tập hợp X. Khẳng định nào sau đây đúng`,
    choices: [
      `\\(n(A \\cap B)=n(A)+n(B)-n(A \\cup B)\\)`,
      `\\(n(A \\cup B)=n(A)+n(B)\\)`,
      `\\(n(A \\cup B)=n(A)+n(B)+n(A \\cap B)\\)`,
      `\\(n(A \\cup B)=n(A)+n(B)-n(A \\cap B)\\)`
    ],
    answer: "D"
  },
  {
    text: `Câu 8. Số các tổ hợp chập 3 của 5 phần tử là`,
    choices: [
      `60.`,
      `15.`,
      `10.`,
      `20.`
    ],
    answer: "C"
  },
  {
    text: `Câu 9. Phép thử gieo 1 con xúc xắc một lần. Biến cố M có nội dung “Gieo được mặt có số chấm là số nguyên tố”. Biến cố M viết dưới dạng tập hợp là`,
    choices: [
      `\\(M=\\{2; 3; 5\\}\\)`,
      `\\(M=\\{1; 2; 3; 5\\}\\)`,
      `\\(M=\\{2; 3; 4; 5\\}\\)`,
      `\\(M=\\{1; 3; 5\\}\\)`
    ],
    answer: "A"
  },
 {
  text: `Câu 10. Cho bốn tập hợp A, B, C và \\(\\Omega\\), với \\(A \\subseteq \\Omega,\\ B \\subseteq \\Omega\\). Tập hợp nào sau đây không phải tập con của \\(\\Omega\\)`,
  choices: [
    `\\(A \\cup B\\)`,
    `\\(A \\cap B\\)`,
    `\\(\\varnothing \\setminus B\\)`,
    `\\(A \\cup C\\)`
  ],
  answer: "D"
}
];
