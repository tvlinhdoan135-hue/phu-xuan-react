export interface MonAn {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  moTa: string;
  hinhAnh: string;
}

export interface MonAnTrongGio
  extends MonAn {
  soLuong: number;
}

export const DANH_MUC: string[] = [
  "Tất cả",
  "Món nước",
  "Cơm",
  "Bánh Huế",
  "Món nướng",
  "Tráng miệng",
];

export const MON_AN: MonAn[] = [
  {
    id: 1,
    ten: "Bún bò Huế",
    danhMuc: "Món nước",
    gia: 45000,
    moTa:
      "Bún bò Huế đậm đà, thơm mùi sả và ruốc.",
    hinhAnh: "/images/bun-bo-hue.jpg",
  },

  {
    id: 2,
    ten: "Cơm hến",
    danhMuc: "Cơm",
    gia: 35000,
    moTa:
      "Cơm hến truyền thống với hến, rau sống, đậu phộng và tóp mỡ.",
    hinhAnh: "/images/com-hen.jpg",
  },

  {
    id: 3,
    ten: "Bánh bèo Huế",
    danhMuc: "Bánh Huế",
    gia: 30000,
    moTa:
      "Bánh bèo mềm, phủ tôm cháy, mỡ hành và nước mắm Huế.",
    hinhAnh: "/images/banh-beo.jpg",
  },

  {
    id: 4,
    ten: "Bánh khoái",
    danhMuc: "Bánh Huế",
    gia: 35000,
    moTa:
      "Bánh khoái vàng giòn, ăn kèm rau sống và nước lèo.",
    hinhAnh: "/images/banh-khoai.jpg",
  },

  {
    id: 5,
    ten: "Nem lụi",
    danhMuc: "Món nướng",
    gia: 40000,
    moTa:
      "Nem lụi nướng thơm, cuốn rau sống và chấm nước lèo.",
    hinhAnh: "/images/nem-lui.jpg",
  },

  {
    id: 6,
    ten: "Chè Huế",
    danhMuc: "Tráng miệng",
    gia: 20000,
    moTa:
      "Chè Huế truyền thống với nhiều loại đậu, hạt sen và nước cốt dừa.",
    hinhAnh: "/images/che-hue.jpg",
  },

  {
    id: 7,
    ten: "Bánh nậm",
    danhMuc: "Bánh Huế",
    gia: 30000,
    moTa:
      "Bánh nậm mềm mỏng, nhân tôm thịt đậm đà.",
    hinhAnh: "/images/banh-nam.jpg",
  },

  {
    id: 8,
    ten: "Bánh bột lọc",
    danhMuc: "Bánh Huế",
    gia: 35000,
    moTa:
      "Bánh bột lọc trong dai, nhân tôm thịt truyền thống.",
    hinhAnh: "/images/banh-bot-loc.jpg",
  },

  {
    id: 9,
    ten: "Bún thịt nướng",
    danhMuc: "Món nước",
    gia: 40000,
    moTa:
      "Bún ăn cùng thịt nướng thơm, rau sống và nước mắm chua ngọt.",
    hinhAnh: "/images/bun-thit-nuong.jpg",
  },

  {
    id: 10,
    ten: "Cơm Âm Phủ",
    danhMuc: "Cơm",
    gia: 45000,
    moTa:
      "Cơm trộn nhiều nguyên liệu với cách trình bày đặc trưng của Huế.",
    hinhAnh: "/images/com-am-phu.jpg",
  },

  {
    id: 11,
    ten: "Bánh canh",
    danhMuc: "Món nước",
    gia: 40000,
    moTa:
      "Bánh canh nước dùng đậm đà, kết hợp tôm và thịt.",
    hinhAnh: "/images/banh-canh.jpg",
  },

  {
    id: 12,
    ten: "Chè bắp",
    danhMuc: "Tráng miệng",
    gia: 25000,
    moTa:
      "Chè bắp thơm dịu, ngọt thanh từ bắp và đường.",
    hinhAnh: "/images/che-bap.jpg",
  },
];