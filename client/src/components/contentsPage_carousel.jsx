import React from "react";
import style from "./contentsPage_carousel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

// import "./slick.css";
// import "./slick-theme.css";

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  .slick-arrow {
    transition: all 200ms ease-in;
  }
  .slick-prev:before,
  .slick-next:before {
    /* background-color: black; */
    font-family: "slick";
    font-size: 90px;
    font-weight: 700;
    line-height: 0.01;
    opacity: 0.6;
    color: #000000;
    /* font-size: 25px; */
    /* margin: 0.51em; */
    -webkit-font-smoothing: antialiased;
  }
  .slick-prev:hover,
  .slick-next:hover {
    opacity: 0.3;
  }
  .slick-prev:before {
    content: "‹";
  }
  [dir="rtl"] .slick-prev:before {
    content: "›";
  }

  [dir="rtl"] .slick-next {
    left: -10px;
    top: 70px;
    right: auto;
  }
  .slick-next:before {
    content: "›";
  }
  [dir="rtl"] .slick-next:before {
    content: "‹";
  }
`;
const ContentsPage_carousel = ({ select_1_category, handleContentsInfo }) => {
  // console.log("select_1_category", select_1_category);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 920, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={style.container}>
      <Wrap>
        <Slider {...settings} className={style.slick_list}>
          {select_1_category.map((el) => (
            <div className={style.contents_container}>
              <img
                className={style.img_card}
                src={el.image}
                alt=""
                onClick={() => handleContentsInfo(el)}
              />
              <span className={style.title}>{el.title}</span>
            </div>
          ))}
        </Slider>
      </Wrap>
    </div>
  );
};

export default ContentsPage_carousel;
