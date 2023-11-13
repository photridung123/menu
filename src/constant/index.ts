
export interface Action {
  title: string;
  image: string;
  text: string;
}

export const ACTION_MENU: Action[] = [
  {
    title: "muốn nói chuyện với anh",
    image: "/menu/het_gian.jpg",
    text: "Anh ơi, em muốn nói chuyện với anh",
  },
  {
    title: "muốn đi chơi với anh",
    image: "/menu/chan_qua.jpg",
    text: "Anh ơi, em chán quá, dẫn em đi chơi đi",
  },
  {
    title: "muống đi ăn với anh",
    image: "/menu/di_an.jpg",
    text: "Anh ơi, em đói rồi, dẫn em đi ăn đi",
  },
  {
    title: "muốn đi tà tữa với anh",
    image: "/menu/tra_sua.jpg",
    text: "Anh ơi, em muốn uống tà tữa, mình đi mua đi",
  },
  {
    title: "cần anh phụ việc em",
    image: "/menu/phu_viec.jpg",
    text: "Anh ơi, em cần anh phụ việc em",
  },
];

export const PASS_CODE = "270620"