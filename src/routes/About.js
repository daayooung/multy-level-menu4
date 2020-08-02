import React from 'react';

const data = {
  harrypotter: {
    name: '해리포터',
    description: '조앤 K. 롤링의 소설 《해리포터》 시리즈의 주인공이다.'
  },
  hermione: {
    name: '헤르미온느',
    description:
      '해리 포터 시리즈의 등장인물. 정식 발매된 번역본의 풀네임은 헤르미온느 진 그레인저. 생일은 1979년 9월 19일[10]이다. 해리 포터의 가장 친한 친구 중 한 명이자 시리즈 내내 사건을 해결해 나가는 삼총사의 일원이다.'
  }
};
const About = ({ match }) => {
  const { charactes } = match.params;
  const about = data[charactes];
  if (!about) {
    return <div>등장인물의 정보가 없습니다.</div>;
  }

  return (
    <div className="contents">
      <h3>
        {charactes}({about.name})
      </h3>
      <p>{about.description}</p>
    </div>
  );
};

export default About;
